// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import { SepoliaConfig } from "@fhevm/solidity/config/ZamaConfig.sol";
import { euint32, externalEuint32, euint8, ebool, FHE } from "@fhevm/solidity/lib/FHE.sol";

contract ShieldedAuction is SepoliaConfig {
    using FHE for *;
    
    struct Auction {
        euint32 auctionId;
        euint32 reservePrice;
        euint32 highestBid;
        euint32 bidCount;
        bool isActive;
        bool isEnded;
        string itemName;
        string itemDescription;
        address auctioneer;
        uint256 startTime;
        uint256 endTime;
        address highestBidder;
    }
    
    struct Bid {
        euint32 bidId;
        euint32 amount;
        address bidder;
        uint256 timestamp;
        bool isRevealed;
    }
    
    struct BidderReputation {
        euint32 reputationScore;
        euint32 totalBids;
        euint32 successfulBids;
        bool isVerified;
    }
    
    mapping(uint256 => Auction) public auctions;
    mapping(uint256 => Bid) public bids;
    mapping(address => BidderReputation) public bidderReputation;
    mapping(address => euint32) public bidderBalance;
    
    uint256 public auctionCounter;
    uint256 public bidCounter;
    
    address public owner;
    address public verifier;
    
    event AuctionCreated(uint256 indexed auctionId, address indexed auctioneer, string itemName);
    event BidPlaced(uint256 indexed bidId, uint256 indexed auctionId, address indexed bidder);
    event AuctionEnded(uint256 indexed auctionId, address indexed winner, uint32 winningBid);
    event ReputationUpdated(address indexed bidder, uint32 reputation);
    event FundsWithdrawn(address indexed bidder, uint32 amount);
    
    constructor(address _verifier) {
        owner = msg.sender;
        verifier = _verifier;
    }
    
    function createAuction(
        string memory _itemName,
        string memory _itemDescription,
        uint256 _reservePrice,
        uint256 _duration
    ) public returns (uint256) {
        require(bytes(_itemName).length > 0, "Item name cannot be empty");
        require(_duration > 0, "Duration must be positive");
        require(_reservePrice > 0, "Reserve price must be positive");
        
        uint256 auctionId = auctionCounter++;
        
        auctions[auctionId] = Auction({
            auctionId: FHE.asEuint32(0), // Will be set properly later
            reservePrice: FHE.asEuint32(0), // Will be set to actual value via FHE operations
            highestBid: FHE.asEuint32(0),
            bidCount: FHE.asEuint32(0),
            isActive: true,
            isEnded: false,
            itemName: _itemName,
            itemDescription: _itemDescription,
            auctioneer: msg.sender,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration,
            highestBidder: address(0)
        });
        
        emit AuctionCreated(auctionId, msg.sender, _itemName);
        return auctionId;
    }
    
    function placeBid(
        uint256 auctionId,
        externalEuint32 bidAmount,
        bytes calldata inputProof
    ) public payable returns (uint256) {
        require(auctions[auctionId].auctioneer != address(0), "Auction does not exist");
        require(auctions[auctionId].isActive, "Auction is not active");
        require(block.timestamp <= auctions[auctionId].endTime, "Auction has ended");
        require(msg.value > 0, "Must send ETH with bid");
        
        uint256 bidId = bidCounter++;
        
        // Convert externalEuint32 to euint32 using FHE.fromExternal
        euint32 internalBidAmount = FHE.fromExternal(bidAmount, inputProof);
        
        bids[bidId] = Bid({
            bidId: FHE.asEuint32(0), // Will be set properly later
            amount: internalBidAmount,
            bidder: msg.sender,
            timestamp: block.timestamp,
            isRevealed: false
        });
        
        // Update auction totals
        auctions[auctionId].bidCount = FHE.add(auctions[auctionId].bidCount, FHE.asEuint32(1));
        
        // Check if this is the highest bid (this would need to be done off-chain in practice)
        // For now, we'll just store the bid
        
        emit BidPlaced(bidId, auctionId, msg.sender);
        return bidId;
    }
    
    function endAuction(uint256 auctionId) public {
        require(auctions[auctionId].auctioneer == msg.sender, "Only auctioneer can end auction");
        require(auctions[auctionId].isActive, "Auction is not active");
        require(block.timestamp > auctions[auctionId].endTime, "Auction has not ended yet");
        
        auctions[auctionId].isActive = false;
        auctions[auctionId].isEnded = true;
        
        // In a real implementation, the highest bid would be determined off-chain
        // and the winner would be set here
        
        emit AuctionEnded(auctionId, address(0), 0); // Winner and amount determined off-chain
    }
    
    function updateBidderReputation(
        address bidder,
        euint32 reputation,
        euint32 totalBids,
        euint32 successfulBids,
        bool isVerified
    ) public {
        require(msg.sender == verifier, "Only verifier can update reputation");
        require(bidder != address(0), "Invalid bidder address");
        
        bidderReputation[bidder] = BidderReputation({
            reputationScore: reputation,
            totalBids: totalBids,
            successfulBids: successfulBids,
            isVerified: isVerified
        });
        
        emit ReputationUpdated(bidder, 0); // FHE.decrypt(reputation) - will be decrypted off-chain
    }
    
    function withdrawFunds(uint256 amount) public {
        require(amount > 0, "Amount must be positive");
        require(address(this).balance >= amount, "Insufficient contract balance");
        
        // Use contract call instead of direct transfer for security
        (bool success, ) = payable(msg.sender).call{value: amount}("");
        require(success, "Transfer failed");
        
        emit FundsWithdrawn(msg.sender, uint32(amount));
    }
    
    function getAuctionInfo(uint256 auctionId) public view returns (
        string memory itemName,
        string memory itemDescription,
        uint8 reservePrice,
        uint8 highestBid,
        uint8 bidCount,
        bool isActive,
        bool isEnded,
        address auctioneer,
        address highestBidder,
        uint256 startTime,
        uint256 endTime
    ) {
        Auction storage auction = auctions[auctionId];
        return (
            auction.itemName,
            auction.itemDescription,
            0, // FHE.decrypt(auction.reservePrice) - will be decrypted off-chain
            0, // FHE.decrypt(auction.highestBid) - will be decrypted off-chain
            0, // FHE.decrypt(auction.bidCount) - will be decrypted off-chain
            auction.isActive,
            auction.isEnded,
            auction.auctioneer,
            auction.highestBidder,
            auction.startTime,
            auction.endTime
        );
    }
    
    function getBidInfo(uint256 bidId) public view returns (
        uint8 amount,
        address bidder,
        uint256 timestamp,
        bool isRevealed
    ) {
        Bid storage bid = bids[bidId];
        return (
            0, // FHE.decrypt(bid.amount) - will be decrypted off-chain
            bid.bidder,
            bid.timestamp,
            bid.isRevealed
        );
    }
    
    function getBidderReputation(address bidder) public view returns (
        uint8 reputationScore,
        uint8 totalBids,
        uint8 successfulBids,
        bool isVerified
    ) {
        BidderReputation storage reputation = bidderReputation[bidder];
        return (
            0, // FHE.decrypt(reputation.reputationScore) - will be decrypted off-chain
            0, // FHE.decrypt(reputation.totalBids) - will be decrypted off-chain
            0, // FHE.decrypt(reputation.successfulBids) - will be decrypted off-chain
            reputation.isVerified
        );
    }
    
    // Function to receive ETH
    receive() external payable {}
    
    // Function to withdraw contract balance (owner only)
    function withdrawContractBalance() public {
        require(msg.sender == owner, "Only owner can withdraw contract balance");
        
        // Use contract call instead of direct transfer for security
        (bool success, ) = payable(owner).call{value: address(this).balance}("");
        require(success, "Transfer failed");
    }
}

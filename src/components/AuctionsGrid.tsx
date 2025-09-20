import { EncryptedBidCard } from './EncryptedBidCard';
import { Badge } from '@/components/ui/badge';

const mockAuctions = [
  {
    auctionId: 'AUC001',
    tokenPair: 'ETH/USDC',
    minBid: '0x7f9a2b...e4c1',
    maxBid: '0xa3d8f2...b9e7',
    timeRemaining: '2h 34m',
    totalBids: 127,
    status: 'active' as const
  },
  {
    auctionId: 'AUC002', 
    tokenPair: 'BTC/DAI',
    minBid: '0x4e8c1a...d2f5',
    maxBid: '0xb7f3e9...a8c4',
    timeRemaining: '45m',
    totalBids: 89,
    status: 'active' as const
  },
  {
    auctionId: 'AUC003',
    tokenPair: 'AVAX/USDT', 
    minBid: '0x9d2f7b...e1a3',
    maxBid: '0xc5e8a4...f7b2',
    timeRemaining: '4h 12m',
    totalBids: 203,
    status: 'active' as const
  },
  {
    auctionId: 'AUC004',
    tokenPair: 'SOL/USDC',
    minBid: '0x1a5e9f...c8d2',
    maxBid: '0xf3b7c1...e4a9',
    timeRemaining: '6h 55m',
    totalBids: 156,
    status: 'upcoming' as const
  },
  {
    auctionId: 'AUC005',
    tokenPair: 'MATIC/ETH',
    minBid: '0x8f3a2d...b5e7',
    maxBid: '0xe2d9f8...a1c6',
    timeRemaining: 'Ended',
    totalBids: 342,
    status: 'ended' as const
  },
  {
    auctionId: 'AUC006',
    tokenPair: 'DOT/USDC',
    minBid: '0x6c8e1b...f4a2',
    maxBid: '0xd7f2a9...e8c3',
    timeRemaining: '1h 18m',
    totalBids: 78,
    status: 'active' as const
  }
];

export const AuctionsGrid = () => {
  const activeAuctions = mockAuctions.filter(auction => auction.status === 'active');
  const upcomingAuctions = mockAuctions.filter(auction => auction.status === 'upcoming');
  const endedAuctions = mockAuctions.filter(auction => auction.status === 'ended');

  return (
    <section id="auctions" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            Live Auction Floor
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Participate in encrypted liquidity auctions with complete privacy and fairness
          </p>
        </div>

        {/* Active Auctions */}
        <div className="space-y-8">
          <div className="flex items-center space-x-3">
            <h3 className="text-2xl font-semibold text-foreground">Active Auctions</h3>
            <Badge variant="default" className="auction-gradient text-background">
              {activeAuctions.length} Live
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeAuctions.map((auction) => (
              <EncryptedBidCard key={auction.auctionId} {...auction} />
            ))}
          </div>
        </div>

        {/* Upcoming Auctions */}
        <div className="space-y-8 mt-16">
          <div className="flex items-center space-x-3">
            <h3 className="text-2xl font-semibold text-foreground">Upcoming Auctions</h3>
            <Badge variant="secondary">
              {upcomingAuctions.length} Scheduled
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingAuctions.map((auction) => (
              <EncryptedBidCard key={auction.auctionId} {...auction} />
            ))}
          </div>
        </div>

        {/* Recent Results */}
        <div className="space-y-8 mt-16">
          <div className="flex items-center space-x-3">
            <h3 className="text-2xl font-semibold text-foreground">Recent Results</h3>
            <Badge variant="outline">
              {endedAuctions.length} Completed
            </Badge>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {endedAuctions.map((auction) => (
              <EncryptedBidCard key={auction.auctionId} {...auction} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
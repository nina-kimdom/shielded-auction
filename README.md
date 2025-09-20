# Shielded Auction Platform

A privacy-preserving auction platform built with Fully Homomorphic Encryption (FHE) technology, enabling confidential bidding while maintaining transparency and fairness.

## Features

- **Confidential Bidding**: All bids are encrypted using FHE, ensuring complete privacy
- **Transparent Results**: Auction outcomes are verifiable without revealing individual bid amounts
- **Real-time Updates**: Live auction status and encrypted bid tracking
- **Secure Wallet Integration**: Connect with popular Web3 wallets
- **FHE-Powered**: Built on Zama's FHE technology for maximum privacy

## Technology Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Tailwind CSS
- **Wallet Integration**: Rainbow Kit, Wagmi, Viem
- **FHE Technology**: Zama FHEVM
- **Blockchain**: Ethereum Sepolia Testnet

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/nina-kimdom/shielded-auction.git
cd shielded-auction
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

Update the `.env` file with your configuration:
```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## How It Works

### 1. Encrypted Bidding
- Users place bids that are immediately encrypted using FHE
- Bid amounts remain confidential throughout the auction
- Only the auction winner's bid is revealed at the end

### 2. Privacy-Preserving Verification
- All bids are verifiable without revealing individual amounts
- Auction results are mathematically provable
- Complete transparency in the auction process

### 3. Secure Wallet Integration
- Connect with MetaMask, WalletConnect, and other popular wallets
- Secure transaction signing and verification
- Seamless Web3 integration

## Smart Contract Features

The platform includes a comprehensive smart contract system with:

- **Encrypted Bid Storage**: All bids stored as FHE-encrypted values
- **Auction Management**: Create, manage, and close auctions
- **Reputation System**: Track user reputation based on auction participation
- **Fund Management**: Secure handling of auction proceeds
- **Verification System**: Automated verification of auction results

## Deployment

### Vercel Deployment

1. Connect your GitHub repository to Vercel
2. Set up environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your preferred hosting service

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support and questions, please open an issue in the GitHub repository.

## Acknowledgments

- Built with [Zama FHEVM](https://docs.zama.ai/fhevm) for FHE capabilities
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Wallet integration powered by [Rainbow Kit](https://www.rainbowkit.com/)
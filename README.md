# Shielded Auction Platform

A next-generation auction platform leveraging Fully Homomorphic Encryption (FHE) to ensure complete bid privacy while maintaining auction integrity and transparency.

## 🚀 Key Features

- **🔒 Privacy-First Bidding**: All bids are encrypted using FHE technology
- **⚡ Real-Time Auctions**: Live auction updates with encrypted bid tracking
- **🔗 Web3 Integration**: Seamless wallet connection and blockchain interaction
- **🛡️ Secure Smart Contracts**: FHE-powered contract execution
- **📱 Responsive Design**: Optimized for all devices and screen sizes

## 🏗️ Architecture

### Frontend Stack
- **React 18** with TypeScript for type safety
- **Vite** for lightning-fast development and builds
- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for accessible component library

### Web3 Integration
- **Rainbow Kit** for multi-wallet support
- **Wagmi** for React hooks and state management
- **Viem** for Ethereum interactions
- **WalletConnect** for cross-platform compatibility

### Blockchain & Privacy
- **Ethereum Sepolia** testnet for development
- **Zama FHEVM** for homomorphic encryption
- **Solidity 0.8.24** for smart contract development
- **FHE-encrypted** data storage and processing

## 🛠️ Development Setup

### Prerequisites
- Node.js 18+ and npm
- Git
- Web3 wallet (MetaMask, WalletConnect, etc.)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/nina-kimdom/shielded-auction.git
cd shielded-auction
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
```bash
# Copy the example environment file
cp .env.example .env

# Update with your configuration
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=your_rpc_url_here
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here
```

4. **Start development server**
```bash
npm run dev
```

5. **Open in browser**
Navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏛️ Smart Contract Features

### Core Functionality
- **Encrypted Bid Storage**: All bids stored as FHE-encrypted values
- **Auction Management**: Create, manage, and close auctions
- **Reputation System**: Track user reputation based on participation
- **Fund Management**: Secure handling of auction proceeds
- **Verification System**: Automated verification of auction results

### Contract Methods
- `createAuction()` - Initialize new auction
- `placeBid()` - Submit encrypted bid
- `endAuction()` - Close auction and determine winner
- `updateReputation()` - Update user reputation scores
- `withdrawFunds()` - Secure fund withdrawal

## 🎨 UI/UX Features

- **Modern Design**: Clean, professional interface
- **Dark/Light Theme**: Automatic theme detection
- **Responsive Layout**: Mobile-first design approach
- **Accessibility**: WCAG 2.1 compliant components
- **Loading States**: Smooth user experience
- **Error Handling**: Comprehensive error management

## 🔐 Security Features

- **FHE Encryption**: All sensitive data encrypted
- **Wallet Security**: Secure transaction signing
- **Smart Contract Audits**: Comprehensive security reviews
- **HTTPS Enforcement**: Secure data transmission
- **Input Validation**: Client and server-side validation

## 📊 Performance Optimization

- **Code Splitting**: Lazy loading for optimal performance
- **Bundle Optimization**: Minimized JavaScript bundles
- **Caching Strategy**: Efficient resource caching
- **Image Optimization**: Compressed and responsive images
- **CDN Integration**: Global content delivery

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on every push

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write comprehensive tests
- Update documentation
- Follow the existing code style
- Ensure accessibility compliance

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT.md) - Detailed deployment instructions
- [Smart Contract API](./contracts/ShieldedAuction.sol) - Contract documentation
- [Component Library](./src/components/) - UI component documentation

## 🐛 Troubleshooting

### Common Issues

**Build Failures**
- Ensure Node.js 18+ is installed
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`
- Check for TypeScript errors

**Wallet Connection Issues**
- Verify network configuration
- Check RPC URL accessibility
- Ensure wallet is unlocked

**Contract Interaction Problems**
- Verify contract address
- Check network compatibility
- Ensure sufficient gas fees

## 📈 Roadmap

- [ ] Multi-chain support
- [ ] Advanced FHE features
- [ ] Mobile app development
- [ ] Analytics dashboard
- [ ] API documentation
- [ ] Performance monitoring

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Zama](https://zama.ai/) for FHEVM technology
- [Rainbow Kit](https://www.rainbowkit.com/) for wallet integration
- [shadcn/ui](https://ui.shadcn.com/) for component library
- [Vite](https://vitejs.dev/) for build tooling

## 📞 Support

For support and questions:
- Open an issue in the GitHub repository
- Check the documentation
- Review the troubleshooting guide

---

**Built with ❤️ for the future of private auctions**
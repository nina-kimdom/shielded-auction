# Vercel Deployment Guide for Shielded Auction Platform

This guide provides step-by-step instructions for deploying the Shielded Auction Platform to Vercel.

## Prerequisites

- GitHub account with access to the `nina-kimdom/shielded-auction` repository
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

## Step-by-Step Deployment Instructions

### 1. Create Vercel Account and Connect GitHub

1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and choose "Continue with GitHub"
3. Authorize Vercel to access your GitHub repositories
4. Complete the account setup process

### 2. Import Project from GitHub

1. In your Vercel dashboard, click "New Project"
2. Click "Import Git Repository"
3. Find and select `nina-kimdom/shielded-auction`
4. Click "Import"

### 3. Configure Project Settings

#### Build Settings
- **Framework Preset**: Vite
- **Root Directory**: `./` (default)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

#### Environment Variables
Add the following environment variables in the Vercel dashboard:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=https://sepolia.infura.io/v3/b18fb7e6ca7045ac83c41157ab93f990
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=2ec9743d0d0cd7fb94dee1a7e6d33475
NEXT_PUBLIC_INFURA_API_KEY=b18fb7e6ca7045ac83c41157ab93f990
```

**To add environment variables:**
1. Go to Project Settings → Environment Variables
2. Add each variable with the values above
3. Make sure to add them for all environments (Production, Preview, Development)

### 4. Deploy the Project

1. Click "Deploy" to start the deployment process
2. Wait for the build to complete (usually 2-3 minutes)
3. Once deployed, you'll get a live URL (e.g., `https://shielded-auction-xxx.vercel.app`)

### 5. Configure Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `shielded-auction.com`)
3. Follow Vercel's DNS configuration instructions
4. Wait for DNS propagation (up to 24 hours)

### 6. Set Up Automatic Deployments

The project is already configured for automatic deployments:
- **Production**: Deploys from the `main` branch
- **Preview**: Deploys from pull requests and other branches

### 7. Monitor and Manage

1. **Analytics**: View deployment analytics in the Vercel dashboard
2. **Logs**: Check build and function logs for debugging
3. **Performance**: Monitor Core Web Vitals and performance metrics

## Local Development Setup

To test the project locally before deployment:

```bash
# Clone the repository
git clone https://github.com/nina-kimdom/shielded-auction.git
cd shielded-auction

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm run dev
```

## Troubleshooting

### Common Issues

1. **Build Failures**
   - Check that all dependencies are properly installed
   - Verify environment variables are set correctly
   - Check the build logs in Vercel dashboard

2. **Environment Variables Not Working**
   - Ensure variables are prefixed with `NEXT_PUBLIC_` for client-side access
   - Redeploy after adding new environment variables

3. **Wallet Connection Issues**
   - Verify WalletConnect Project ID is correct
   - Check that the RPC URL is accessible
   - Ensure the chain ID matches your target network

### Performance Optimization

1. **Enable Vercel Analytics**
   - Go to Project Settings → Analytics
   - Enable Vercel Analytics for performance monitoring

2. **Configure Caching**
   - Static assets are automatically cached by Vercel
   - API routes can be configured with custom caching headers

## Security Considerations

1. **Environment Variables**
   - Never commit sensitive keys to the repository
   - Use Vercel's environment variable system for secrets

2. **Wallet Security**
   - Ensure users are connecting to the correct network (Sepolia testnet)
   - Implement proper error handling for wallet connection failures

## Monitoring and Maintenance

1. **Regular Updates**
   - Keep dependencies updated
   - Monitor for security vulnerabilities
   - Update smart contract addresses if needed

2. **Performance Monitoring**
   - Use Vercel Analytics to track performance
   - Monitor Core Web Vitals
   - Set up alerts for deployment failures

## Support

For deployment issues:
1. Check Vercel's documentation: [vercel.com/docs](https://vercel.com/docs)
2. Review build logs in the Vercel dashboard
3. Contact Vercel support for account-specific issues

## Project Structure

```
shielded-auction/
├── contracts/           # Smart contracts
├── public/             # Static assets
├── src/                # Source code
│   ├── components/     # React components
│   ├── lib/           # Utilities and configurations
│   └── pages/         # Page components
├── package.json       # Dependencies
└── vite.config.ts    # Vite configuration
```

## Next Steps After Deployment

1. **Test the Application**
   - Verify wallet connection works
   - Test all major features
   - Check responsive design on different devices

2. **Configure Monitoring**
   - Set up error tracking (e.g., Sentry)
   - Configure performance monitoring
   - Set up uptime monitoring

3. **Prepare for Production**
   - Update smart contract addresses
   - Configure production environment variables
   - Set up proper error handling and logging

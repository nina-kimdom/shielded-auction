# Deployment Guide

This guide provides step-by-step instructions for deploying the Shielded Auction Platform.

## Prerequisites

- GitHub account with repository access
- Vercel account (free tier available)
- Node.js 18+ installed locally (for testing)

## Quick Start

### 1. Vercel Deployment

1. Visit [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import the repository
4. Configure environment variables
5. Deploy automatically

### 2. Environment Variables

Configure these variables in your deployment platform:

```
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=your_rpc_endpoint_here
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_INFURA_API_KEY=your_infura_key_here
```

### 3. Build Configuration

- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## Detailed Setup

### Vercel Configuration

1. **Project Settings**
   - Framework Preset: Vite
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `dist`

2. **Environment Variables**
   - Add each variable in Project Settings
   - Configure for all environments
   - Use secure variable storage

3. **Domain Configuration**
   - Add custom domain (optional)
   - Configure DNS settings
   - Enable HTTPS

### Local Development

```bash
# Clone repository
git clone https://github.com/nina-kimdom/shielded-auction.git
cd shielded-auction

# Install dependencies
npm install

# Start development server
npm run dev
```

## Build Process

### Production Build
```bash
npm run build
```

### Development Build
```bash
npm run build:dev
```

### Preview Build
```bash
npm run preview
```

## Configuration Files

### vercel.json
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

### Environment Variables
Create `.env` file for local development:
```bash
NEXT_PUBLIC_CHAIN_ID=11155111
NEXT_PUBLIC_RPC_URL=your_rpc_url
NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_project_id
```

## Troubleshooting

### Build Issues
- Check Node.js version (18+ required)
- Verify all dependencies are installed
- Review build logs for errors

### Environment Issues
- Ensure all required variables are set
- Check variable naming (NEXT_PUBLIC_ prefix)
- Verify RPC endpoint accessibility

### Deployment Issues
- Check build logs in deployment platform
- Verify environment variables
- Ensure proper permissions

## Performance Optimization

### Build Optimization
- Enable Vercel Analytics
- Configure caching headers
- Optimize bundle size

### Runtime Optimization
- Enable compression
- Configure CDN
- Monitor performance metrics

## Security Considerations

### Environment Security
- Never commit sensitive keys
- Use secure variable storage
- Rotate keys regularly

### Application Security
- Enable HTTPS
- Configure security headers
- Implement proper CORS

## Monitoring

### Analytics
- Enable Vercel Analytics
- Monitor Core Web Vitals
- Track user interactions

### Error Tracking
- Set up error monitoring
- Configure alerts
- Review logs regularly

## Maintenance

### Regular Updates
- Keep dependencies updated
- Monitor security vulnerabilities
- Update smart contract addresses

### Performance Monitoring
- Track build times
- Monitor runtime performance
- Optimize based on metrics

## Support

For deployment issues:
1. Check platform documentation
2. Review build logs
3. Contact platform support
4. Open GitHub issue

## Next Steps

After successful deployment:
1. Test all functionality
2. Configure monitoring
3. Set up analytics
4. Prepare for production
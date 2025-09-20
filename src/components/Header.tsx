import { Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import logo from '@/assets/logo.png';

export const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-4">
          <img src={logo} alt="FHE Auctions Logo" className="w-10 h-10" />
          <div>
            <h1 className="text-xl font-bold auction-gradient bg-clip-text text-transparent">
              FHE Auctions
            </h1>
            <p className="text-sm text-muted-foreground">Fair Liquidity Access with FHE</p>
          </div>
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          <a href="/auctions" className="text-foreground hover:text-primary transition-colors">
            Live Auctions
          </a>
          <a href="/how-it-works" className="text-foreground hover:text-primary transition-colors">
            How It Works
          </a>
          <a href="/about-fhe" className="text-foreground hover:text-primary transition-colors">
            About FHE
          </a>
        </nav>

        <ConnectButton />
      </div>
    </header>
  );
};
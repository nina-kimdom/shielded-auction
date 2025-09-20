import { Github, Twitter, Linkedin, Hammer } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold auction-gradient bg-clip-text text-transparent">
              FHE Auctions
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              Revolutionary private liquidity auctions powered by Fully Homomorphic Encryption.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Platform</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-primary transition-colors">Live Auctions</a>
              <a href="#" className="block hover:text-primary transition-colors">Create Auction</a>
              <a href="#" className="block hover:text-primary transition-colors">Analytics</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Learn</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="#" className="block hover:text-primary transition-colors">How FHE Works</a>
              <a href="#" className="block hover:text-primary transition-colors">Documentation</a>
              <a href="#" className="block hover:text-primary transition-colors">Security</a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Community</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Hammer className="w-6 h-6 text-glow-primary hammer-strike" />
                <div className="absolute inset-0 w-6 h-6 rounded-full bg-glow-primary/20 animate-glow" />
              </div>
              <p className="text-sm text-muted-foreground">
                Secured by encrypted blocks
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <span>© 2024 FHE Auctions</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
import { ArrowRight, Shield, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-auction-floor.jpg';

export const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden auction-floor">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Encrypted Auction Floor"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="auction-gradient bg-clip-text text-transparent">
                Fair Liquidity Access
              </span>
              <br />
              <span className="text-foreground">with </span>
              <span className="liquidity-gradient bg-clip-text text-transparent">
                FHE
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Revolutionary private auctions where bids remain encrypted until closure, 
              preventing manipulation and ensuring fairness.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="auction"
              className="text-lg px-8 py-6"
            >
              Enter Auction Floor
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-glow-secondary/50 hover:bg-glow-secondary/10 text-lg px-8 py-6"
            >
              <Shield className="w-5 h-5 mr-2" />
              Learn About FHE
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="encrypted-card p-6 text-center space-y-3">
              <Lock className="w-8 h-8 mx-auto text-glow-primary" />
              <h3 className="font-semibold text-foreground">Encrypted Bids</h3>
              <p className="text-sm text-muted-foreground">
                All bids remain hidden until auction closes
              </p>
            </div>
            
            <div className="encrypted-card p-6 text-center space-y-3">
              <Shield className="w-8 h-8 mx-auto text-glow-secondary" />
              <h3 className="font-semibold text-foreground">Zero Manipulation</h3>
              <p className="text-sm text-muted-foreground">
                FHE technology prevents bid manipulation
              </p>
            </div>
            
            <div className="encrypted-card p-6 text-center space-y-3">
              <ArrowRight className="w-8 h-8 mx-auto text-success" />
              <h3 className="font-semibold text-foreground">Fair Discovery</h3>
              <p className="text-sm text-muted-foreground">
                True price discovery through private bidding
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating encrypted elements */}
      <div className="absolute top-20 left-10 encrypted-glow w-16 h-10 bg-glow-primary/20 rounded blur-sm animate-glow" />
      <div className="absolute bottom-32 right-20 encrypted-glow w-12 h-8 bg-glow-secondary/20 rounded blur-sm animate-glow" style={{animationDelay: '1s'}} />
      <div className="absolute top-40 right-32 encrypted-glow w-20 h-6 bg-glow-primary/15 rounded blur-sm animate-glow" style={{animationDelay: '2s'}} />
    </section>
  );
};
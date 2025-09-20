import { Lock, Users, Zap, Shield, Eye, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const steps = [
  {
    icon: Users,
    title: 'Submit Encrypted Bids',
    description: 'Traders submit their liquidity bids using FHE technology, keeping all bid amounts completely private until the auction closes.',
    color: 'text-glow-primary'
  },
  {
    icon: Lock,
    title: 'Sealed Bidding Period', 
    description: 'All bids remain encrypted and hidden during the auction period, preventing manipulation and front-running by other participants.',
    color: 'text-glow-secondary'
  },
  {
    icon: Zap,
    title: 'Automated Closure',
    description: 'When the auction timer expires, smart contracts automatically decrypt and process all bids simultaneously for fair settlement.',
    color: 'text-success'
  },
  {
    icon: TrendingUp,
    title: 'Fair Price Discovery',
    description: 'True market prices emerge through the encrypted bidding process, ensuring optimal liquidity allocation without bias.',
    color: 'text-primary'
  }
];

const features = [
  {
    icon: Shield,
    title: 'FHE Protection',
    description: 'Fully Homomorphic Encryption ensures complete privacy of bid amounts throughout the auction process.'
  },
  {
    icon: Eye,
    title: 'Zero Front-Running',
    description: 'Encrypted bids eliminate the possibility of front-running and other forms of market manipulation.'
  },
  {
    icon: Zap,
    title: 'Instant Settlement',
    description: 'Automated smart contract execution provides immediate and transparent settlement upon auction closure.'
  }
];

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-card/50">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground">
            How FHE Auctions Work
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary auction mechanism powered by Fully Homomorphic Encryption, 
            ensuring complete privacy and fairness in liquidity discovery
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="encrypted-card h-full">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-muted/30 flex items-center justify-center mb-4">
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full auction-gradient flex items-center justify-center text-sm font-bold text-background">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
              
              {/* Arrow connector */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-glow-primary to-glow-secondary" />
                  <div className="absolute -right-1 -top-1 w-0 h-0 border-l-4 border-l-glow-secondary border-y-2 border-y-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center text-foreground">
            Why Choose FHE Auctions?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="encrypted-card bid-card-hover">
                <CardHeader className="text-center">
                  <div className="mx-auto w-12 h-12 rounded-full liquidity-gradient flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-background" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Note */}
        <div className="mt-16 text-center">
          <div className="encrypted-card p-8 max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold mb-4 auction-gradient bg-clip-text text-transparent">
              Powered by Advanced Cryptography
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Our platform leverages Fully Homomorphic Encryption (FHE) to perform computations on encrypted data 
              without ever decrypting it. This groundbreaking technology ensures that bid amounts remain completely 
              private throughout the entire auction process, only being revealed upon closure for settlement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
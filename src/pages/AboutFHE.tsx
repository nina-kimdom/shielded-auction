import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, Lock, Eye, Zap, Users, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const AboutFHE = () => {
  const features = [
    {
      icon: Shield,
      title: "Complete Privacy",
      description: "Fully Homomorphic Encryption ensures your bid data remains completely private while still allowing computations."
    },
    {
      icon: Lock,
      title: "Cryptographic Security",
      description: "Advanced mathematical proofs guarantee that encrypted data cannot be decrypted without the proper keys."
    },
    {
      icon: Eye,
      title: "Transparent Results",
      description: "While bids remain private, auction results are fully transparent and verifiable by all participants."
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "FHE enables real-time auction processing without compromising on security or privacy."
    },
    {
      icon: Users,
      title: "Fair Access",
      description: "No participant can gain unfair advantage through bid manipulation or front-running."
    },
    {
      icon: CheckCircle,
      title: "Proven Technology",
      description: "Built on battle-tested cryptographic principles with academic research backing."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold auction-gradient bg-clip-text text-transparent mb-6">
              About FHE Technology
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Fully Homomorphic Encryption (FHE) is a revolutionary cryptographic technology that enables 
              computations on encrypted data without ever decrypting it. This breakthrough makes truly 
              private auctions possible.
            </p>
          </div>

          {/* What is FHE Section */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">What is Fully Homomorphic Encryption?</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    FHE is a form of encryption that allows arbitrary computations to be performed on 
                    encrypted data without decrypting it first. This means we can process your auction 
                    bids while keeping them completely private.
                  </p>
                  <p>
                    Traditional encryption requires data to be decrypted before processing, creating 
                    vulnerability windows. FHE eliminates this risk entirely by operating directly 
                    on encrypted data.
                  </p>
                  <p>
                    In our auction system, this enables fair price discovery while ensuring no 
                    participant can see others' bids until the auction concludes.
                  </p>
                </div>
              </div>
              <div className="encrypted-glow p-8 rounded-lg border border-primary/20">
                <div className="text-center">
                  <Lock className="w-16 h-16 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Encrypted Data Processing</h3>
                  <p className="text-sm text-muted-foreground">
                    Your bids are encrypted and remain encrypted throughout the entire auction process
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why FHE Matters for Auctions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="encrypted-glow border-primary/20 hover:border-primary/40 transition-colors">
                  <CardHeader className="text-center">
                    <feature.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Benefits */}
          <section className="mb-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 encrypted-glow p-8 rounded-lg border border-primary/20">
                <h3 className="text-2xl font-bold mb-4">Technical Advantages</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Zero-knowledge auction processing</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Cryptographically guaranteed privacy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Verifiable computation results</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>No trusted third parties required</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>Resistance to quantum attacks</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">The Future of Private Computing</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    FHE represents a paradigm shift in how we handle sensitive data. For the first time in history, 
                    we can perform complex computations while maintaining perfect privacy.
                  </p>
                  <p>
                    Our auction platform leverages this breakthrough to create a truly fair marketplace where 
                    participants can bid confidently, knowing their strategies remain private until results 
                    are revealed.
                  </p>
                  <p>
                    This technology opens up new possibilities for privacy-preserving applications across 
                    finance, healthcare, and beyond.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Private Auctions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join the revolution in fair liquidity access powered by cutting-edge cryptography.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/auctions" className="btn-primary px-8 py-3 rounded-lg font-semibold transition-all hover:scale-105">
                View Live Auctions
              </a>
              <a href="/how-it-works" className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-colors">
                Learn the Process
              </a>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutFHE;
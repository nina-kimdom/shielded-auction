import { Header } from '@/components/Header';
import { HowItWorks } from '@/components/HowItWorks';
import { Footer } from '@/components/Footer';

const HowItWorksPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold auction-gradient bg-clip-text text-transparent mb-6">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how our FHE-powered auction system ensures fair liquidity access 
              while maintaining complete bid privacy and preventing manipulation.
            </p>
          </div>
        </div>
        <HowItWorks />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorksPage;
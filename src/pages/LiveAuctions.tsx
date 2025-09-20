import { Header } from '@/components/Header';
import { AuctionsGrid } from '@/components/AuctionsGrid';
import { Footer } from '@/components/Footer';

const LiveAuctions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-8">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold auction-gradient bg-clip-text text-transparent mb-6">
              Live Auctions
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Participate in secure, transparent liquidity auctions powered by Fully Homomorphic Encryption. 
              Your bids remain private until the auction concludes.
            </p>
          </div>
          <AuctionsGrid />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LiveAuctions;
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { config } from './lib/wallet';
import ErrorBoundary from './components/ErrorBoundary';
import Index from "./pages/Index";
import LiveAuctions from "./pages/LiveAuctions";
import HowItWorksPage from "./pages/HowItWorksPage";
import AboutFHE from "./pages/AboutFHE";
import NotFound from "./pages/NotFound";
import '@rainbow-me/rainbowkit/styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
    mutations: {
      retry: 1,
    },
  },
});

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={config}>
        <RainbowKitProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auctions" element={<LiveAuctions />} />
                <Route path="/how-it-works" element={<HowItWorksPage />} />
                <Route path="/about-fhe" element={<AboutFHE />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </RainbowKitProvider>
      </WagmiProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;

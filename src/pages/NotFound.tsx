import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background auction-floor">
      <div className="text-center space-y-6 max-w-md mx-auto px-6">
        <div className="encrypted-card p-8 space-y-4">
          <AlertCircle className="w-16 h-16 mx-auto text-glow-primary animate-glow" />
          <h1 className="text-4xl font-bold auction-gradient bg-clip-text text-transparent">404</h1>
          <h2 className="text-xl font-semibold text-foreground">Auction Floor Not Found</h2>
          <p className="text-muted-foreground">
            The auction floor you're looking for seems to be encrypted or doesn't exist.
          </p>
          <Button 
            variant="auction" 
            className="mt-6"
            onClick={() => window.location.href = '/'}
          >
            <Home className="w-4 h-4 mr-2" />
            Return to Main Floor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
import { Clock, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface EncryptedBidCardProps {
  auctionId: string;
  tokenPair: string;
  minBid: string;
  maxBid: string;
  timeRemaining: string;
  totalBids: number;
  status: 'active' | 'upcoming' | 'ended';
}

export const EncryptedBidCard = ({
  auctionId,
  tokenPair,
  minBid,
  maxBid,
  timeRemaining,
  totalBids,
  status
}: EncryptedBidCardProps) => {
  return (
    <Card className="encrypted-card bid-card-hover relative overflow-hidden">
      <div className="absolute inset-0 encrypted-gradient opacity-10" />
      
      <CardHeader className="relative">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-bold text-foreground">
            {tokenPair}
          </CardTitle>
          <Badge 
            variant={status === 'active' ? 'default' : status === 'upcoming' ? 'secondary' : 'destructive'}
            className={status === 'active' ? 'auction-gradient text-background' : ''}
          >
            {status.toUpperCase()}
          </Badge>
        </div>
        <p className="text-sm text-muted-foreground">Auction #{auctionId}</p>
      </CardHeader>

      <CardContent className="relative space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground flex items-center">
              <Shield className="w-3 h-3 mr-1 text-glow-primary" />
              Min Encrypted Bid
            </p>
            <div className="encrypted-glow bg-muted/30 rounded px-2 py-1 font-mono text-sm blur-sm hover:blur-none transition-all">
              {minBid}
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-xs text-muted-foreground flex items-center">
              <Shield className="w-3 h-3 mr-1 text-glow-secondary" />
              Max Encrypted Bid
            </p>
            <div className="encrypted-glow bg-muted/30 rounded px-2 py-1 font-mono text-sm blur-sm hover:blur-none transition-all">
              {maxBid}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            {timeRemaining}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="w-4 h-4 mr-1" />
            {totalBids} bids
          </div>
        </div>
        
        {status === 'active' && (
          <div className="absolute top-2 right-2">
            <div className="w-2 h-2 rounded-full bg-success animate-pulse" />
          </div>
        )}
      </CardContent>
    </Card>
  );
};
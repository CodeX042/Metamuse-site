import { User, Clock, Users } from 'lucide-react';
import { useCountdown } from '@/hooks/useCoutdown';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from '@tanstack/react-router';



const AuctionCard = () => {
  const { hours, minutes, seconds } = useCountdown(new Date().setHours(new Date().getHours() + 10)); // Countdown example
  const { nftToBid } = useSelector((state: any) => state.canvas)
  const router = useRouter()
  
    const handleBuy = () => {
      // Define the purchase logic here
      // buyNFT("QmExampleIPFSCID", nftToBid?.price)
      toast.success("Your bid has been placed successfully")
      router.navigate({ to: "/" });
    };

  
  return (
    <div className="flex flex-col lg:flex-row bg-black text-white rounded-lg p-4">
      {/* Artwork Image */}
      <div className="w-full lg:w-2/3 p-2">
        <img src={nftToBid?.image} alt={nftToBid?.title} className="rounded-lg object-cover h-full max-h-screen" />
      </div>

      {/* Auction Details */}
      <div className="flex flex-col w-full lg:w-1/2 p-4 space-y-4">
        {/* Title and Artists/Bidders Info */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold">{nftToBid?.title}</h2>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                <User className="w-5 h-5" />
                <span>{nftToBid?.artists} Artists</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-5 h-5" />
                <span>{nftToBid?.bidders} Bidders</span>
              </div>
            </div>
          </div>
          <div className="text-red-500 flex items-center">
            <Clock className="w-5 h-5 mr-1" />
            <span>{`${hours} : ${minutes} : ${seconds}`}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300">{nftToBid?.description}</p>

        {/* Expected Price */}
        <div className="bg-gray-800 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-400">Expected Price</h3>
          <p className="text-2xl font-bold">{nftToBid?.price}</p>
          <div className="mt-4">
            <label className="text-sm text-gray-400" htmlFor="bidPrice">Max Price per listing</label>
            <div className="flex items-center mt-2">
              <input
                id="bidPrice"
                type="number"
                className="w-full p-2 rounded-l-lg border-2 border-r-0 border-gray-700 text-black"
                placeholder="1.000"
              />
              <span className="bg-gray-700 text-white p-2 rounded-r-lg">ETH</span>
            </div>
            <p className="text-xs text-gray-400 mt-1">Bid a higher price to beat other Buyers</p>
          </div>
        </div>

        {/* Buy Now Button */}
        <button
          onClick={handleBuy}
          className="mt-4 w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
          
        >
          Bid Now
        </button>
        
        {/* Note */}
        <p className="text-xs text-gray-500 mt-2">
          Note: The bidder with the highest amount will get the artwork.
        </p>
      </div>
    </div>
  );
};

export default AuctionCard;

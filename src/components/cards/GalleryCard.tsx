import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from '@tanstack/react-router';
import { useDispatch } from 'react-redux';
import { setNFTToBid } from '@/redux/slice/canvas-slice';

interface GalleryCardProps {
  image: string;
  title: string;
  creator: string;
  price: string;
  timeLeft: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, title, creator, price, timeLeft }) => {
const dispatch = useDispatch()

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg backdrop-blur-md bg-white/10 mb-4">
      {/* Image */}
      <img src={image} alt={title} className="w-full h-auto rounded-xl object-cover hover:scale-110 transition-all duration-500 ease-in-out" />

      {/* Overlay with Glassmorphism Effect */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/20 backdrop-blur-lg rounded-b-xl flex flex-col justify-between h-[204px]">
        {/* Card Content */}
        <div className='flex flex-col gap-4 w-[60%]'>
          <h3 className="text-[32px] font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-300">Owned By{creator}</p>
          <p className="text-md font-bold text-gray-100">{price}</p>
        </div>
        
        {/* Time Left */}
        <div className='flex flex-col items-start absolute bottom-[78px] right-2 gap-0'>
            <p className="font-semibold text-[#FF3F46]">Remaining Time</p>
            <p className="mb-2 text-lg text-white font-bold">{timeLeft}</p>
        </div>

        {/* Button */}
        <Link href="/auction-page" className="flex items-center justify-center mt-3 px-3 py-1.5 bg-[#9E090F] text-white rounded-ss-[35px] rounded-ee-[35px] text-sm absolute bottom-2 right-2 h-[77px] font-bold text-[16px]" onClick={() => {dispatch(setNFTToBid({
          image, title, creator, price, timeLeft
        }))}}>
          Start Bid <ArrowRight className="ml-1 w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default GalleryCard;

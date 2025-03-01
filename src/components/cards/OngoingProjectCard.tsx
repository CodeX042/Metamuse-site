import React from 'react';

type CardProps = {
  title: string;
  description: string;
  progress: string;
  update: string;
  activities: string[];
};

const Card: React.FC<CardProps> = ({ title, description, progress, update, activities }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg flex flex-col h-[363px] w-full p-8 bg-gray-500 gap-2 ">
      {/* Title Section */}
    <h3 className="text-md font-bold text-white text-flex-start w-full">Project Title: {title}</h3>
      
    <div className='flex gap-2 h-[50%]'>
        {/* Description Section */}
        <div className="flex flex-col bg-[#351A1A] text-white p-4 flex-grow w-[50%] rounded-md items-flex-start justify-flex-start">
        <h3 className="text-sm font-semibold text-white ">Description</h3>
        <p className="text-gray-300 text-xs mt-1">{description}</p>
        </div>
          
        {/* Artist Section */}
        <div className="flex flex-col bg-[#171717] text-white p-4 flex-grow w-[50%] rounded-md items-flex-start justify-flex-start">
        <h3 className="text-sm font-semibold">Artist Needed</h3>
        <li className='text-xs'>Total: (5)</li>
        <li className='text-xs'>Invites sent: (10)</li>
        <li className='text-xs'>Unaccepted Invites: (5)</li>
        </div>
     </div>
      
    <div className='flex gap-2 h-[50%]'>
      {/* Progress Section */}
      <div className="bg-[#171717] text-white p-2 flex  flex-col  text-xs w-[50%] rounded-md items-flex-start justify-flex-start">
        <span className="text-green-400 font-semibold">{progress}</span>
        <span className="text-gray-300">{update}</span>
      </div>

      {/* Recent Activities Section */}
      <div className="flex flex-col bg-[#161C29] text-gray-300 p-3 w-[50%] rounded-md items-flex-start justify-flex-start">
        <h4 className="text-sm font-semibold mb-2">Recent Activities</h4>
        <ul className="text-gray-400 text-xs space-y-1">
          {activities.map((activity, index) => (
            <li key={index}>• {activity}</li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Card;

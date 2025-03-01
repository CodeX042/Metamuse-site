import React, { useState } from 'react';

interface AddProjectButtonProps{
    setOpenJoinModal: any,
    setOpenCreateModal: any
}

const AddProjectButton: React.FC<AddProjectButtonProps> = ({setOpenJoinModal,setOpenCreateModal}) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const createCanvas = () => {
        setOpenCreateModal(true)
    };

    const joinCanvas = () => {
        setOpenJoinModal(true)
    };

    // const proceed = () => {
    //     alert("Proceed clicked!");
    // };


    return (
        <div className="relative w-full h-full" >
            {/* Absolute Button */}
            <button
                onClick={togglePopup}
                className="absolute right-5 top-1/2  w-[100px] h-10 text-xl flex items-center justify-center "
            >
                <img src="/asset/add-button-animated.gif" alt="button" className='w-[100px]'/>
            </button>

            {/* Popup */}
            {isOpen && (
                <div className="absolute right-28 top-1/2 transform -translate-y-1/2 bg-white rounded-lg shadow-lg p-4 space-y-2">
                    <button
                        onClick={createCanvas}
                        className="w-full border border-[#D42C2CB2] text-[#D42C2CB2] font-semibold py-2 rounded-lg"
                    >
                        Create Canvas
                    </button>
                    <button
                        onClick={joinCanvas}
                        className="w-full border border-[#D42C2CB2] text-[#D42C2CB2] font-semibold py-2 rounded-lg"
                    >
                        Join Canvas
                    </button>
                </div>
            )}
        </div>
    );
};

export default AddProjectButton;

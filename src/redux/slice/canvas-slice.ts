import { createSlice } from "@reduxjs/toolkit";

interface Canvas {
	canvasCode: string;
	nftDescription: string;
    nftName: string;
    
    nftToBid:any;
}

const initialState: Canvas = {
	canvasCode: "",
	nftDescription: "",
    nftName: "",
    
    nftToBid: {},
};

const CanvasSlice = createSlice({
    name: "Canvas",
    initialState,
    reducers: {
        setNFTToBid: (state, action) => {
            state.nftToBid = action.payload
        },
        getCanvasFormDetails: (state, action) => {
            return {
                ...state,
                [action?.payload?.name]: action?.payload?.value,
            }
        },
    }
});

export const { getCanvasFormDetails,setNFTToBid } = CanvasSlice.actions;

export default CanvasSlice.reducer;

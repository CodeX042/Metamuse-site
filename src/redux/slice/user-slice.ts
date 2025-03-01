import { createSlice } from "@reduxjs/toolkit";

interface User {
	name: string;
	email: string;
	connectWallet: string;
}

const initialState: User = {
	name: "",
	email: "",
	connectWallet: "",
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
		},
		setConnectedWallet: (state, action) => {
			state.connectWallet = action.payload
		}
	},
});

export const { setUser, setConnectedWallet } = userSlice.actions;

export default userSlice.reducer;

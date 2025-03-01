import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
	user: any;
	isAuthenticated: boolean;

	firstName: string;
	lastName: string;
	emailAddress: string;
	password: string;

	authenticating: boolean;
}

const initialState: AuthState = {
	user: null,
	isAuthenticated: false,

	firstName: "",
	lastName: "",
	emailAddress: "",
	password: "",

	authenticating: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login(state, action) {
			state.user = action.payload;
			state.isAuthenticated = true;
		},
		logout(state) {
			state.user = null;
			state.isAuthenticated = false;
		},
		setUser(state, action) {
			state.user = action.payload;
		},
		setAuthenticating(state, action) {
			state.authenticating = action.payload;
		},
		getAuthFormDetails: (state, action) => {
		return {
			...state,
			[action?.payload?.name]: action?.payload?.value,
		};
    },
	},
});

export const { login, logout, setUser, getAuthFormDetails,setAuthenticating } = authSlice.actions;
export default authSlice.reducer;

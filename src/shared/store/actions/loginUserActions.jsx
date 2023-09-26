import {
	LOGIN_USER_REQUEST,
	LOGIN_USER,
	LOGIN_USER_FAIL,
} from "../constants/nftsConstants"
import Axios from "../../../api/BaseUrl"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

//Login
export const logInUser = (account) => async (dispatch) => {
	try {
		dispatch({
			type: LOGIN_USER_REQUEST,
		})

		const { data } = await Axios.post("auth/login", {
			sWalletAddress: account,
		})
		dispatch({ type: LOGIN_USER, payload: data })
	} catch (error) {
		dispatch({
			type: LOGIN_USER_FAIL,
			payload: error,
		})
		toast.error(error?.response?.data?.message)
  }
}

import axios from "axios";
import type { PortfolioGet, PortfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandler";

const API_URL = import.meta.env.VITE_API_URL + "/api/portfolio";

export const portfolioAddAPI = async (symbol: string) => {
    try {
        const token = localStorage.getItem("token");

        const data = await axios.post<PortfolioPost>(
            API_URL + `?symbol=${symbol}`,
            {},
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        return data;
    } catch (error) {
        handleError(error)
    }
}

export const portfolioDeleteAPI = async (symbol: string) => {
    try {
        const token = localStorage.getItem("token");
        const data = await axios.delete<PortfolioPost>(
            API_URL + `?symbol=${symbol}`,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        return data;
    } catch (error) {
        handleError(error)
    }
}

export const portfolioGetAPI = async () => {
    try {
        const token = localStorage.getItem("token");
        const data = await axios.get<PortfolioGet[]>(
            API_URL,
            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        return data;
    } catch (error) {
        handleError(error)
    }
}
import axios from "../api/axios";
import type { PortfolioGet, PortfolioPost } from "../Models/Portfolio";
import { handleError } from "../Helpers/ErrorHandler";

const API_URL = "/api/portfolio";

export const portfolioAddAPI = async (symbol: string) => {
    try {
        const data = await axios.post<PortfolioPost>(API_URL + `?symbol=${symbol}`);
        return data;
    } catch (error) {
        handleError(error)
    }
}

export const portfolioDeleteAPI = async (symbol: string) => {
    try {
        const data = await axios.delete<PortfolioPost>(API_URL + `?symbol=${symbol}`);
        return data;
    } catch (error) {
        handleError(error)
    }
}

export const portfolioGetAPI = async () => {
    try {
        const data = await axios.get<PortfolioGet[]>(API_URL);
        return data;
    } catch (error) {
        handleError(error)
    }
}
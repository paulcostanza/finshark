import axios from "axios"
import type { CompanySearch } from "./company"

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        const response = await axios.get<SearchResponse>(
            // search by ticker
            `https://financialmodelingprep.com/stable/search-symbol?query=${query}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`
            // search by company name
            // `https://financialmodelingprep.com/stable/search-name?query=${query}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`
        );
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("error message foo: ", error.message)
            return error.message;
        } else {
            console.log("unexpected error: ", error);
            return "An unexpected error has occured";
        }

    }
}
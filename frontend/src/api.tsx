import axios from "axios"
import type { CompanyBalanceSheet, CompanyCashFlow, CompanyIncomeStatement, CompanyKeyMetrics, CompanyProfile, CompanySearch } from "./company"

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

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(
            `https://financialmodelingprep.com/stable/profile?symbol=${query}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`
        )
        return data;
    } catch (error: any) {
        console.log("error message from API foo: ", error.message)
    }
}

export const getKeyMetrics = async (query: string) => {
    try {
        const data = await axios.get<CompanyKeyMetrics[]>(
            `https://financialmodelingprep.com/stable/key-metrics-ttm?symbol=${query}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`
        )
        return data;
    } catch (error: any) {
        console.log("error message from API foo: ", error.message)
    }
}

// add limit? 
export const getIncomeStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyIncomeStatement[]>(
            `https://financialmodelingprep.com/stable/income-statement?symbol=${query}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`
        )
        return data;
    } catch (error: any) {
        console.log("error message from API foo: ", error.message)
    }
}

export const getBalanceSheet = async (query: string) => {
    try {
        const data = await axios.get<CompanyBalanceSheet[]>(
            `https://financialmodelingprep.com/stable/balance-sheet-statement?symbol=${query}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`
        )
        return data;
    } catch (error: any) {
        console.log("error message from API foo: ", error.message)
    }
}

export const getCashFlowStatement = async (query: string) => {
    try {
        const data = await axios.get<CompanyCashFlow[]>(
            `https://financialmodelingprep.com/stable/cash-flow-statement?symbol=${query}&apikey=${import.meta.env.VITE_REACT_APP_API_KEY}`
        )
        return data;
    } catch (error: any) {
        console.log("error message from API foo: ", error.message)
    }
}
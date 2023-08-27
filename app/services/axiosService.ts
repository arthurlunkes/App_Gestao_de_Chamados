import axios from "axios";

axios.defaults.baseURL = "http://192.168.18.65:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const request =  (method: string, url: string, data?: any, headers?: any) => {
    return axios({
        method,
        url,
        data,
        headers
    });
}

export const getClients = () => {
    return request("GET", "/client");
}

export const getModules = () => {
    return request("GET", "/module");
}

export const getTickets = (month?: number, year?: number) => {
    let headers = {};
    if (month && year) {
        headers = {
            "month": month,
            "year": year
        }
    }
    return request("GET", "/ticket", null, headers);
}

export const getTicket = (id: string) => {
    return request("GET", `/ticket/${id}`);
}

export const createTicket = (data: any) => {
    return request("POST", "/ticket", data);
}

export const updateTicket = ( data: any) => {
    return request("PUT", `/ticket`, data);
}

export const deleteTicket = (id: string) => {
    return request("DELETE", `/ticket/${id}`);
}
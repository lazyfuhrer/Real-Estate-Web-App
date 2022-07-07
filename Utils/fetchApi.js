import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '7507ea973fmshe291fcc7e43e58dp16a271jsn79f6aa8cc871',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    
    return data;
}
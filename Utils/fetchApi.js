import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {

    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '15e24392e6msh8273085aca8cfe5p1bc39ajsn44b963901f78',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        }
    });
    
    return data;
}

import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "579036b614msh8e9e6140aedf3d2p1b09dejsn4190c4a303de",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });


  return data;
};

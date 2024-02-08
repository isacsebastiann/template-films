import axios from 'axios'

export const films = "localhost:8080/films"

export const getFilms = async(url:String) => {
    const response = await axios.get(url);
    console.log(response.data);
    return response.data;
}
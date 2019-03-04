import axios from 'axios';

const SKY_API_URL = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/CA/USD/en-USD/'
var SKY_API_KEY = 'ae26af5873msh2e66fec7b4b2261p18cd99jsn807ccf554efe'
// TODO: Add locale and currency urls, based on user location

export const SKY_API = axios.create({
  baseURL: SKY_API_URL,
  headers: {
    'X-RapidAPI-Key': SKY_API_KEY
  }
})

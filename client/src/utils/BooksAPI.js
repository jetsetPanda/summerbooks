import axios from "axios";

// Variables set in Heroku

const API_KEY = process.env.REACT_APP_API_KEY || "AIzaSyABr4cwMggXevTIVAf9UUMbbBArhBO4sfE";
//  process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL || "https://www.googleapis.com/books/v1/volumes?q="
// ;

export default {
  // Use Google API to get results
  searchBook: function(title) {
    title = title.trim().replace(/\s/g, '+');
    return axios.get(`${API_URL}${title}&key=${API_KEY}`);
  }
};

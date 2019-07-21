import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=search+%27;";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  searchBook: function(query) {
    return axios.get(`${BASEURL} ${query}`);
  }, 
  saveBook: function(data){
    return axios.post('/API/books', data)
  }
};


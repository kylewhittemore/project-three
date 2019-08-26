import axios from "axios";

export const isAuth = () => {
  let token = localStorage.getItem('p3aajjkw-jwt')
  if (token) {
    // Add authorization token to http header
    axios.defaults.headers.common["Authorization"] = token;
  } else { 
    // Delete auth header
    delete axios.defaults.headers.common["Authorization"];
  }
};
export default isAuth;
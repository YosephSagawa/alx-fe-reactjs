import axios from "axios";

const fetchUserData = async (username) => {
  return axios
    .get(`https://api.github.com/users/${username}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.error(error);
    });
};

export default fetchUserData;

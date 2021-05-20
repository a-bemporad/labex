import axios from "axios";
import { BASE_URL, token } from "../constants/requestsData";

export const signUp = (body) => {
  axios
    .post(`${BASE_URL}/signup`, body)
    .then((response) => {
      console.log("signupthen", response.data);
    })
    .catch((error) => {
      console.log("signuperror", error.message);
    });
};

export const logIn = (body) => {
  axios
    .post(`${BASE_URL}/login`, body)
    .then((response) => {
      console.log("loginthen", response.data);
    })
    .catch((error) => {
      console.log("loginerror", error.message);
    });
};

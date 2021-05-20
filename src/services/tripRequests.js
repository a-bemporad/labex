import axios from "axios";
import { BASE_URL, token } from "../constants/requestsData";

export const getTrips = (setTrips, trips, toast) => {
  axios
    .get(`${BASE_URL}/trips`)
    .then((response) => {
      setTrips(response.data.trips);
    })
    .catch((error) => {
      toast({
        title: "Ooops, there was a problem!",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};

export const getTripDetail = (tripId, toast) => {
  axios
    .get(`${BASE_URL}/trip/${tripId}`, { headers: { auth: token } })
    .then((response) => {
      console.log("getTripDetailsthen", response.data);
    })
    .catch((error) => {
      toast({
        title: "Ooops, there was a problem!",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};

export const createTrip = (body, toast) => {
  axios
    .post(`${BASE_URL}/trips`, body, { headers: { auth: token } })
    .then((response) => {
      console.log("createTripthen", response.data);
    })
    .catch((error) => {
      toast({
        title: "Ooops, there was a problem!",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};

export const applyToTrip = (body, tripId, toast) => {
  axios
    .post(`${BASE_URL}/trips/${tripId}/apply`, body, {
      headers: { auth: token },
    })
    .then((response) => {
      console.log("applyToTripthen", response.data);
    })
    .catch((error) => {
      toast({
        title: "Ooops, there was a problem!",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};

export const decideCandidate = (tripId, candidateId, body, toast) => {
  axios
    .put(`${BASE_URL}/trips/${tripId}/candidates/${candidateId}/decide`, body, {
      headers: { auth: token },
    })
    .then((response) => {
      console.log("decideCandidatethen", response.data);
    })
    .catch((error) => {
      toast({
        title: "Ooops, there was a problem!",
        description: error.message,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    });
};

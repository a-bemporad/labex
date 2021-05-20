export const goToHomePage = (history) => {
  history.push("/");
};

export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToApplicationFormPage = (history, tripId) => {
  history.push(`/application-form/${tripId}`);
};

export const goToCreateTrip = (history) => {
  history.push("trips/create");
};

export const goToTripsPage = (history) => {
  history.push("/trips");
};

export const goToTripDetails = (history) => {
  history.push("trips/details");
};

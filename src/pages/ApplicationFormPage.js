import React, { useEffect, useState } from "react";
import { Center, Input, Select, Button, Flex } from "@chakra-ui/react";
import useForm from "../hooks/useForm";
import { applyToTrip, getTrips } from "../services/tripRequests";
import { useToast } from "@chakra-ui/toast";
import { useParams } from "react-router";

const ApplicationFormPage = () => {
  const [trips, setTrips] = useState([]);
  const pathParams = useParams();

  useEffect(() => {
    getTrips(setTrips, trips);
  }, []);

  const toast = useToast();
  const [form, onChange, clear] = useForm({
    name: "",
    age: "",
    applicationText: "",
    profession: "",
    country: "",
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
    console.log(form);
    applyToTrip(form, toast);
  };

  return (
    <Center h="90vh">
      <Flex bg="lightBlue" justify="center" align="center" w="100vw" p="2em">
        <form w="40%" p="1em" onSubmit={onSubmitForm}>
          <Flex w="100%">
            <Input
              w="70%"
              name="name"
              value={form.name}
              onChange={onChange}
              isRequired
              variant="filled"
              placeholder="Full Name"
              _placeholder={{ color: "#333333" }}
              type="text"
            />
            <Input
              w="30%"
              name="age"
              value={form.age}
              onChange={onChange}
              isRequired
              variant="filled"
              placeholder="Age"
              _placeholder={{ color: "#333333" }}
              type="number"
            />
          </Flex>
          <Input
            name="profession"
            value={form.profession}
            onChange={onChange}
            variant="filled"
            isRequired
            placeholder="Occupation"
            _placeholder={{ color: "#333333" }}
            type="text"
          />
          <Input
            name="country"
            value={form.country}
            onChange={onChange}
            variant="filled"
            isRequired
            placeholder="Country"
            _placeholder={{ color: "#333333" }}
            type="text"
          />
          <Select
            variant="filled"
            isRequired
            placeholder="Trip of interest"
            _placeholder={{ color: "#333333" }}
          >
            {trips &&
              trips.map((trip) => {
                if (pathParams.tripId === trip.id) {
                  return (
                    <option selected="selected" key={trip.id}>
                      {trip.name}
                    </option>
                  );
                } else {
                  return <option key={trip.id}>{trip.name}</option>;
                }
              })}
          </Select>
          <Input
            name="applicationText"
            value={form.applicationText}
            onChange={onChange}
            variant="filled"
            isRequired
            placeholder="Application Message"
            _placeholder={{ color: "#333333" }}
            type="text"
          />
          <Button w="100%" type="submit">
            Apply!
          </Button>
        </form>
      </Flex>
    </Center>
  );
};

export default ApplicationFormPage;

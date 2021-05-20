import React, { useEffect, useState } from "react";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { getTrips } from "../services/tripRequests";
import { goToApplicationFormPage } from "../router/Coordinator";
import { useHistory, useParams } from "react-router";

const TripsPage = () => {
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTrips(setTrips, trips);
  }, []);

  return (
    <Flex w="100%" wrap="wrap">
      {/* BOTAR UM LOADING PORQUE A REQUISICAO DEMORA UM CADIN */}
      {trips &&
        trips.map((trip) => {
          return (
            <Flex
              direction="column"
              p="1.5em"
              bg="lightBlue"
              color="violet"
              m="1em"
              w="45%"
              key={trip.id}
            >
              <Flex direction="column" grow="1">
                <Heading as="h4" fontSize="md">
                  {trip.name}
                </Heading>
                <Text>
                  <i>{trip.planet}</i>
                </Text>
                <Flex
                  direction="column"
                  marginTop="0.3em"
                  borderTop="1px solid lightgray"
                  borderBottom="1px solid lightgray"
                >
                  <Text textAlign="justify">{trip.description}</Text>
                  <Text fontSize="sm" paddingTop="0.2em" px="0.2em">
                    <strong>departing on {trip.date}</strong>
                  </Text>
                  <Text fontSize="sm" paddingBottom="0.3em" px="0.2em">
                    <i> {trip.durationInDays} days </i>
                  </Text>
                </Flex>
              </Flex>
              <Flex justify="center" h="3em">
                <Button
                  w="100%"
                  m="0.5em"
                  onClick={() => goToApplicationFormPage(history, trip.id)}
                >
                  APPLY
                </Button>
              </Flex>
            </Flex>
          );
        })}
    </Flex>
  );
};

export default TripsPage;

import React, { useEffect, useState } from "react";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import orion from "../images/orion.jpg";
import { Button } from "@chakra-ui/button";
import { getTrips } from "../services/tripRequests";
import { goToApplicationFormPage } from "../router/Coordinator";
import { useHistory } from "react-router";

const HomePage = () => {
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTrips(setTrips, trips);
  }, []);

  return (
    <Flex w="100%" h="91vh" direction="column">
      <Flex
        w="100%"
        h="91vh"
        backgroundImage={`url(${orion})`}
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Flex p="4em" direction="column" justify="center">
          <Heading as="h1" fontSize="6xl">
            Space Trips
          </Heading>
          <Text alignSelf="flex-end" fontSize="lg" color="lightBlue">
            <i>you can be the next one</i>
          </Text>
        </Flex>
      </Flex>
      <Flex justify="space-around" m="2em" p="0.5em">
        {trips &&
          trips.map((trip, index) => {
            if (index <= 2) {
              return (
                <Flex
                  direction="column"
                  p="1.5em"
                  bg="lightBlue"
                  color="violet"
                  m="1em"
                  w="25%"
                  h="17em"
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
                      onClick={() => goToApplicationFormPage(history)}
                    >
                      APPLY
                    </Button>
                  </Flex>
                </Flex>
              );
            }
          })}
      </Flex>
    </Flex>
  );
};

export default HomePage;

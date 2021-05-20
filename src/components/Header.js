import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import {
  goToLoginPage,
  goToApplicationFormPage,
  goToHomePage,
  goToTripsPage,
} from "../router/Coordinator";

const Header = () => {
  const history = useHistory();
  const removeToken = (history, token) => {
    localStorage.removeItem("token");
  };
  return (
    <Flex
      p="10px"
      h="9vh"
      bgColor="violet"
      opacity="0.8"
      position="sticky"
      top="0"
    >
      <Flex w="50%" justify="center">
        <Button variant="outline" onClick={() => goToHomePage(history)}>
          Home
        </Button>
        <Button variant="outline" onClick={() => goToTripsPage(history)}>
          Trips
        </Button>
        <Button variant="outline">OUTRO BOTÃO</Button>
      </Flex>
      <Flex w="50%" justify="flex-end">
        <Button
          mx="8px"
          variant="solid"
          onClick={() => goToApplicationFormPage(history, false)}
        >
          Apply for a trip
        </Button>
        <Button mx="8px" variant="solid" onClick={() => goToLoginPage(history)}>
          Log In
        </Button>
        {/* Falta integrar com a auth, pra ele renderizar só quando estiver logado  */}
        <Button mx="8px" variant="solid" onClick={removeToken}>
          Log Out
        </Button>
      </Flex>
    </Flex>
  );
};

export default Header;

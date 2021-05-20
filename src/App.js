import React from "react";
import Router from "./router/Router";
import { ChakraProvider } from "@chakra-ui/react";
import labeXtheme from "./style/labeXtheme";

function App() {
  return (
    <ChakraProvider theme={labeXtheme}>
      <Router />
    </ChakraProvider>
  );
}

export default App;

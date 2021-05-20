import { extendTheme } from "@chakra-ui/react";
import Button from "./Button";

const labeXtheme = extendTheme({
  styles: {
    global: {
      "html, body": {
        padding: 0,
        margin: 0,
        fontFamily: "Raleway, sans-serif",
        h: "100%",
        bgGradient: "linear(to-b, black, violet, midnightBlue)",
        bgSize: "100% 100%",
        boxSizing: "borderBox",
      },
      h1: {
        color: "lightBlue",
      },
    },
  },
  colors: {
    //option 1
    darkPurple: "#1C0221",
    lightPurple: "#7B5E7B",
    darkGreen: "#07393C",
    grey: "#828E82",
    lightGray: "#F0F0C9",

    //option2
    black: "#000000",
    violet: "#0D0628",
    midnightBlue: "#22116A",
    brightBlue: "#00A6FB",
    mediumBlue: "#0582CA",
    grayBlue: "#006494",
    lightBlue: "#E0ECF5",
    lightBlue2: "#C1D9EB",
  },
  components: {
    Button,
  },
});

export default labeXtheme;

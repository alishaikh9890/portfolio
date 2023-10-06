import React from "react"

import ReactDOM from "react-dom"
import App from "./App";
import "./index.css"
import { ChakraProvider, ChaktraProvider } from "@chakra-ui/react"
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <ChakraProvider> */}
    <App />
    {/* </ChakraProvider> */}
  </React.StrictMode>
);

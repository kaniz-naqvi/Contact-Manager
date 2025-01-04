import React from "react";
import ContactManager from "./ContactManager";
import { BrowserRouter } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <ContactManager />
    </BrowserRouter>
  );
};

export default App;

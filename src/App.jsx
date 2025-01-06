import { Routes, Route } from "react-router-dom";
import ContactManager from "./ContactManager";
import ContactContext from "./Context/ContactContext";

const App = () => {
  return (
    <ContactContext>
      <Routes>
        <Route path="/*" element={<ContactManager />} />
      </Routes>
    </ContactContext>
  );
};

export default App;

import { Routes, Route } from "react-router-dom"; // Correct import
import ContactManager from "./ContactManager"; // Correct import
import ContactContext from "./Context/ContactContext"; // Correct import

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

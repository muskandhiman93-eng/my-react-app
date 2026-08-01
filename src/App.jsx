import { useState } from "react";
import "./App.css";
import Sidebar from "./assets/components/Sidebar";
import Navbar from "./assets/components/Navbar";
import Main from "./assets/page/Main";
import About from "./assets/page/About";
import Stack from "./assets/page/Stack";
import Work from "./assets/page/Work";
import Contact from "./assets/page/Contact";


function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  return (

    <div>
    <div className="d-flex">
      {showSidebar && <Sidebar />}

      <div className="flex-grow-1">

        <Navbar
          toggleSidebar={() => setShowSidebar(!showSidebar)}
        />
        <Main />
        <About/>
        <Stack/>
        <Work/>
        <Contact/>
      </div>
</div>



</div>

  );
}

export default App;

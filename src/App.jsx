import "./App.css";
import React from "react";
import { useRoutes } from "react-router-dom";
import ReadCrewmates from "./pages/ReadCrewmates";
import CreateCrewmate from "./pages/CreateCrewmate";
import EditCrewmate from "./pages/EditCrewmate"; 
import { Link } from "react-router-dom";
import CrewmateInfo from "./pages/CrewmateInfo";

const App = () => {
 

  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadCrewmates/>,
    },
    {
      path: "/edit/:id",
      element: <EditCrewmate/>,
    },
    {
      path: "/new",
      element: <CreateCrewmate />,
    },
    {
      path: "/more-info/:id",
      element: <CrewmateInfo />
    }
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>👍 Crewmates 1.0</h1>
        <Link to="/">
          <button className="headerBtn"> Explore Crewmates 🔍 </button>
        </Link>
        <Link to="/new">
          <button className="headerBtn"> Create Crewmate 🏆 </button>
        </Link>
      </div>
      {element}
    </div>
  );
};

export default App;

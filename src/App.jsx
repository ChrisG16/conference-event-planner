import React, { useState } from "react";
import "./App.css";
import ConferenceEvent from "./ConferenceEvent";
import AboutUs from "./AboutUs";

function App() {
  const [showVenue, setShowVenue] = useState(false);

  const handleGetStarted = () => {
    setShowVenue(true);
  };

  return (
    <>
      <header className="first_page">
        <div className="main_event">
          <div className="first_page_name_btn">
            <h1 className="budget_heading">Planificador de Gastos de Conferencia</h1>
            <p className="budget_sentence">¡Empiece a planificar con nosotros!</p>
            <div className="getstarted_btn">
              <button onClick={() => handleGetStarted()} className="get-started-btn">
                Empezar
              </button>
            </div>
          </div>
          <div className="aboutus_main">
            <AboutUs />
          </div>
        </div>
      </header>

      <div className={`event-list-container ${showVenue ? 'visible' : ''}`}>
        <ConferenceEvent />
      </div>
    </>
  );
}

export default App;

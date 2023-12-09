import React, { useState } from 'react';
import EventForm from "./Projects/EventForm/EventForm";
import CountdownTimer from './Projects/EventForm/CountdownTimer';

const App = () => {
  const [eventData, setEventData] = useState(null);

  const handleStartClick = (eventName, eventDateTime) => {
    setEventData({ eventName, eventDateTime });
  };

  return (
    <div className="App">
      {!eventData ? (
        <EventForm onStartClick={handleStartClick} />
      ) : (
        <CountdownTimer eventName={eventData.eventName} eventDateTime={eventData.eventDateTime} />
      )}
    </div>
  );
};

export default App;


// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Home from "./JsComponents/Home";
// import TaskForm from "./JsComponents/AddTask";

// import HeroSection from "./JsComponents/HeroSection";
// import Task from "./JsComponents/ListTask";
// import Navbar from "./JsComponents/Navbar";

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Navbar />
//         <HeroSection />
//         <TaskForm />
//         <Task />
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

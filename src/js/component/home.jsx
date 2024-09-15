import React from "react";
import TrafficLight from "./trafficLight";
import '../../styles/index.css';

const Home = () => {
  return (
    <div className="container">
       <h1>¡Be careful on the road!</h1>
      <TrafficLight /> 
	 <img
        src="https://cdn-icons-png.flaticon.com/512/564/564619.png"
        alt="Cuidado Sign"
        width="100"
        height="100"
      />
    </div>
  );
};

export default Home;

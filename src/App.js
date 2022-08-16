import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./style.css";
import katie from "./images/katie.png";
import wedding from "./images/wedding-photography.png";
import biking from "./images/mountain-bike.png";
import data from "./components/data";

const App = () => {

  const cards = data.map((item) => {  
    return (
      <Card
        key={item.id}
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
        openSpots = {item.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <section className="card-list">
        {cards}
      </section>
      
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Nav from "./component/Nav.js";
import Card from "./component/Card.jsx";
import data from "./data.js";
import Footer from "./component/Footer.jsx";
import pic from "./darks.png";

function App() {
  const [bg, setBg] = useState("white");
  const [bg1, setBg1] = useState("white");
  const [fcolor, setFcolor] = useState("black");
  function modeChange() {
    if (bg === "white") {
      setBg("#887070");
      setBg1("#282121");
      setFcolor("white");
    } else {
      setBg("white");
      setBg1("white");
      setFcolor("black");
    }
  }
  const cards = data.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        ratings={item.stats.ratings}
        reviewCount={item.stats.reviewCount}
        country={item.country}
        title={item.title}
        price={item.price}
        spot={item.openSpots}
        background={bg1}
        Color={fcolor}
      />
    );
  });
  return (
    <>
      <Nav background={bg1} />
      <section className="card--set" style={{ backgroundColor: bg }}>
        <img
          src={pic}
          className="mode--change"
          alt="mode"
          title="dark mode/ light mode"
          onClick={modeChange}
        />
        {cards}
      </section>
      <Footer />
    </>
  );
}

export default App;

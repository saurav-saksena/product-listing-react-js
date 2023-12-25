import React from "react";
import Header from "./newComp/Header";
import Main from "./newComp/Main";
import data from "./newData";

export default function App2() {
  const cards = data.map((item) => {
    return (
      <Main
        key={item.id}
        img={item.img}
        location={item.location}
        map={item.map}
        title={item.title}
        description={item.description}
      />
    );
  });
  return (
    <>
      <Header />
      {cards}
    </>
  );
}

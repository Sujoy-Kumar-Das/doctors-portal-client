import React, { useState } from "react";
import AppoinmentBanner from "../AppoinmentBanner";
import AvaileableAppoinment from "../AvaileableAppoinment";

const AppoinmentSection = () => {
  const [selected, setSelected] = useState(new Date());
  return (
    <div>
      <AppoinmentBanner
        selected={selected}
        setSelected={setSelected}
      ></AppoinmentBanner>
      <AvaileableAppoinment selected={selected}></AvaileableAppoinment>
    </div>
  );
};

export default AppoinmentSection;

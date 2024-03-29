import React from "react";
import Person from "./Person";
import { admin } from "../constants/images";

export default function Title({darkTheme}) {
  return (
    <div className="titleMain">
      <div>
        <span className="titleHead" style={{ fontWeight: 'bold', color: darkTheme?'white':'black' }}>INC</span><br />
        <span className="titleHead" style={{ fontWeight: 'bold', color: darkTheme?'white':'black' }}>InnovativeHub</span>
      </div>
      <div className="titleImage">
        <Person personUrl={admin}/>     
      </div>
    </div>
  );
}

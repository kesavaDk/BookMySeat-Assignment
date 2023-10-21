import React from "react";
import "./index.css";
import { MdOutlineChair } from "react-icons/md";

const Seats = () => {
  return (
    <div className="positionHandle">
    <div className="bottom-container">
      <div>
       
        <ul>
          <li>
            <MdOutlineChair className="available seat" />
            <p>Available</p>
          </li>

          <li>
            <MdOutlineChair className="unavailable size" />
            <p>Sold</p>
          </li>

          <li>
            <MdOutlineChair className="yourselection size" />
            <p>Selected</p>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default Seats;
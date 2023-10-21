import "./App.css";
import { useState } from "react";
import Seats from "./components/Seats";
import Home from "./components/Home";

function App() {
  const [ticketType, setTicketType] = useState("Standard");
  const [quanityOfTicker, setQuantityOfTicker] = useState("");

  const ticketTypeHandler = (event) => {
    setTicketType(event.target.value);
  };

  const quantityHandler = (event) => {
    setQuantityOfTicker(event.target.value);
  };

  return (
    <div className="outer_container">
      
      <div className="main_container">
        <div className="main_container_inner">
          <div className="App">
            <div className="dropdown">
              <label htmlFor="tickettype">Ticket </label>
              <select
                id="tickettype"
                value={ticketType}
                onChange={ticketTypeHandler}
              >
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>

              <label htmlFor="Quantity">How Many Seats? :</label>
              <select
                id="Quantity"
                value={quanityOfTicker}
                onChange={quantityHandler}
              >
                <option value="">QTY</option>
                {[...Array(100).keys()].map((x,i) => {
              return <option key={x} value={i + 1}>{i + 1}</option>
            })}
              </select>
            </div>
            <hr style={{border:"2px solid black"}}/>
            <div className="left">
              <Home
                type={ticketType}
                quanityOfTicker={quanityOfTicker}
                resetTicker={setQuantityOfTicker}
              />
            </div>
            <Seats />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
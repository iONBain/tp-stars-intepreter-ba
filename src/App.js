import { useState } from "react";
import "./styles.css";
var headingText = "Stars Interpreter";
var color = "lightblue";

// this is an object
const starDictionary = {
  "♒": "Aquarius",
  "♍": "Virgo",
  "♌": "Leo",
  "♎": "Libra",
  "♏": "Scorpio",
  "♐️": "Sagittarius",
  "♑": "Capricorn",
  "♓": "Pisces",
  "♈": "Aries",
  "♉": "Taurus"
};
var stars = Object.keys(starDictionary);
export default function App() {
  const [means, setMeans] = useState("");
  function starInputHandler(event) {
    var userInput = event.target.value;

    var meaning = starDictionary[userInput];
    // console.log(meaning);

    if (meaning === undefined) {
      meaning = "we don't have this in our dictionary";
    }
    setMeans(meaning);
  }

  // from list of stars
  function starClickHandler(emote) {
    // var inputEmote = emote.target.value;
    var meaning1 = starDictionary[emote];
    setMeans(meaning1);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{headingText}</h1>
      <input onChange={starInputHandler} />
      <p style={{ fontWeight: "bold" }}>
        meaning:
        {/* actual output  */}
        <span style={{ fontWeight: "lighter" }}>{means}</span>
      </p>
      <h2>stars to select </h2>
      {stars.map((item) => {
        return (
          <span
            onClick={() => starClickHandler(item)}
            style={{ fontSize: "2rem", padding: "0.2rem", cursor: "pointer" }}
          >
            {item}{" "}
          </span>
        );
      })}
    </div>
  );
}

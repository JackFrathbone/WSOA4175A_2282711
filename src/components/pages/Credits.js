import React, { Component } from "react";
import "../../styles/Credits.css";

export default class Credits extends Component {
  render() {
    return (
      <div className="credits">
        <h1>CREDITS</h1>
        <p>
          VT323 Font by Peter Hull licensed under SIL Open Font License(OFL)
        </p>
        <p>Tank exploding GIF from Giphy.com</p>
        <p>
          Text excerpt from Imperialism, the Highest Stage of Capitalism by
          Vladimir Lenin (1916)
        </p>
        <p>
          Text excerpts from the Operation Condor page on Wikipedia.com [
          <a
            href="https://en.wikipedia.org/wiki/Operation_Condor"
            target="_blank"
          >
            https://en.wikipedia.org/wiki/Operation_Condor
          </a>
          ]
        </p>
      </div>
    );
  }
}

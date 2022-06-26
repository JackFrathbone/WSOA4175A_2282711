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
          Text excerpts from the National Endowment For Democracy 2020 Annual
          Report [
          <a
            href="https://www.ned.org/annual-report/2020-annual-report/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.ned.org/annual-report/2020-annual-report/
          </a>
          ]
        </p>
      </div>
    );
  }
}

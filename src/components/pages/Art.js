import React, { Component } from "react";
import "../../styles/Art.css";

export default class Art extends Component {
  constructor(props){
    super();
    this.state = { 
      textClicked : false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle(){
    this.setState({ textClicked : true })
  };


  render() {
    return (
      <div className="art">
        <h1>Imperialism, the Highest Stage of Capitalism [Page 79]</h1>
        <h2>by Vladimir Lenin</h2>
        <p>
          Colonial policy and imperialism existed before the latest stage of
          capitalism, and even before capitalism. Rome, founded on slavery,
          pursued a colonial policy and practised imperialism. But “general”
          disquisitions on imperialism, which ignore, or put into the
          background,
          <mark  className={ this.state.textClicked ? "unmarked" : "marked"}
            onClick={this.toggle}
          >
            the fundamental difference between socio-economic formations
          </mark>
          , inevitably turn into the most vapid banality or bragging, like the
          comparison: “Greater Rome and Greater Britain.” [5] Even the
          capitalist colonial policy of previous stages of capitalism is
          essentially different from the colonial policy of finance capital.
        </p>
        <p>
          The principal feature of the latest stage of capitalism is the
          domination of monopolist associations of big employers. These
          monopolies are most firmly established when all the sources of raw
          materials are captured by one group, and we have seen with what zeal
          the international capitalist associations exert every effort to
          deprive their rivals of all opportunity of competing, to buy up, for
          example, ironfields, oilfields, etc. Colonial possession alone gives
          the monopolies complete guarantee against all contingencies in the
          struggle against competitors, including the case of the adversary
          wanting to be protected by a law establishing a state monopoly. The
          more capitalism is developed, the more strongly the shortage of raw
          materials is felt, the more intense the competition and the hunt for
          sources of raw materials throughout the whole world, the more
          desperate the struggle for the acquisition of colonies.
        </p>
      </div>
    );
  }
}

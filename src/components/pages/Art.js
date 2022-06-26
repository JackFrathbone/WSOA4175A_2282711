import React, { Component } from "react";
import "../../styles/Art.css";

export default class Art extends Component {
  constructor(props) {
    super();
    this.state = {
      textClicked: false,
      randomNum: Math.floor(Math.random() * 5) + 0,
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ textClicked: true });
  }

  GetRandomText() {
    if (this.state.randomNum === 0) {
      return (
        <div className="art">
          <h1>Imperialism, the Highest Stage of Capitalism [Excerpt 1]</h1>
          <h2>by Vladimir Lenin</h2>
          <p>
            It is not without interest to observe that even then these leading
            British bourgeois politicians saw the connection between what might
            be called the purely economic and the socio-political roots of
            modern imperialism. Chamberlain advocated imperialism as a “true,
            wise and economical policy,” and pointed particularly to the German,
            American and Belgian competition which Great Britain was
            encountering in the world market. Salvation lies in monopoly, said
            the capitalists as they formed cartels, syndicates and trusts.
            Salvation lies in monopoly, echoed the political leaders of the
            bourgeoisie, hastening to appropriate the parts of the world not yet
            shared out. And Cecil Rhodes, we are informed by his intimate
            friend, the journalist Stead, expressed his imperialist views to him
            in 1895 in the following terms:{" "}
            <mark
              className={this.state.textClicked ? "unmarked" : "marked"}
              onClick={this.toggle}
            >
              {" "}
              Though NED had a difficult beginning when it was a new and
              controversial idea, it is now an established and respected
              institution, filling a critical need with broad bipartisan support
              from the U.S. Congress
            </mark>{" "}
            we colonial statesmen must acquire new lands to settle the surplus
            population, to provide new markets for the goods produced in the
            factories and mines. The Empire, as I have always said, is a bread
            and butter question. If you want to avoid civil war, you must become
            imperialists.[4]
          </p>
        </div>
      );
    } else if (this.state.randomNum === 1) {
      return (
        <div className="art">
          <h1>Imperialism, the Highest Stage of Capitalism [Excerpt 2]</h1>
          <h2>by Vladimir Lenin</h2>
          <p>
            One of the special features of imperialism connected with the facts
            I am describing, is the decline in emigration from imperialist
            countries and the increase in immigration into these countries from
            the more backward countries where lower wages are paid. As Hobson
            observes, emigration from Great Britain has been declining since
            1884. In that year the number of emigrants was 242,000, while in
            1900, the number was 169,000. Emigration from Germany reached the
            highest point between 1881 and 1890, with a total of 1,453,000
            emigrants. In the course of the following two decades, it fell to
            544,000 and to 341,000. On the other hand, there was an increase in
            the number of workers entering Germany from Austria, Italy, Russia
            and other countries. According to the 1907 census, there were
            1,342,294 foreigners in Germany, of whom 440,800 were industrial
            workers and 257,329 agricultural workers.[10]{" "}
            <mark
              className={this.state.textClicked ? "unmarked" : "marked"}
              onClick={this.toggle}
            >
              an institution for American democracy—not programmatically, but
              symbolically, and in the values it upholds
            </mark>{" "}
            In the United States, immigrants from Eastern and Southern Europe
            are engaged in the most poorly paid jobs, while American workers
            provide the highest percentage of overseers or of the better-paid
            workers.[12] Imperialism has the tendency to create privileged
            sections also among the workers, and to detach them from the broad
            masses of the proletariat.
          </p>
        </div>
      );
    } else if (this.state.randomNum === 2) {
      return (
        <div className="art">
          <h1>Imperialism, the Highest Stage of Capitalism [Excerpt 3]</h1>
          <h2>by Vladimir Lenin</h2>
          <p>
            These simple figures show perhaps better than lengthy disquisitions
            how the concentration of capital and the growth of bank turnover are
            radically changing the significance of the banks. Scattered
            capitalists{" "}
            <mark
              className={this.state.textClicked ? "unmarked" : "marked"}
              onClick={this.toggle}
            >
              interconnected economic and financial system, ubiquitous
              communication networks, international norms and institutions, and
              global media and culture
            </mark>{" "}
            a handful of monopolists subordinate to their will all the
            operations, both commercial and industrial, of the whole of
            capitalist society; for they are enabled by means of their banking
            connections, their current accounts and other financial
            operations—first, to ascertain exactly the financial position of the
            various capitalists, then to control them, to influence them by
            restricting or enlarging, facilitating or hindering credits, and
            finally to entirely determine their fate, determine their income,
            deprive them of capital, or permit them to increase their capital
            rapidly and to enormous dimensions, etc.
          </p>
        </div>
      );
    } else if (this.state.randomNum === 3) {
      return (
        <div className="art">
          <h1>Imperialism, the Highest Stage of Capitalism [Excerpt 4]</h1>
          <h2>by Vladimir Lenin</h2>
          <p>
            Monopolies, oligarchy, the striving for domination and not for
            freedom, the exploitation of an increasing number of small or weak
            nations by a handful of the richest or most powerful nations—all
            these have given birth to those distinctive characteristics of
            imperialism which compel us to define it as parasitic or decaying
            capitalism. More and more prominently there emerges, as one of the
            tendencies of imperialism, the creation of{" "}
            <mark
              className={this.state.textClicked ? "unmarked" : "marked"}
              onClick={this.toggle}
            >
              In the region’s conflict countries, NED maintained a modest
              presence with the aim of contributing to post-conflict political
              transitions
            </mark>{" "}
            be a mistake to believe that this tendency to decay precludes the
            rapid growth of capitalism. It does not. In the epoch of
            imperialism, certain branches of industry, certain strata of the
            bourgeoisie and certain countries betray, to a greater or lesser
            degree, now one and now another of these tendencies. On the whole,
            capitalism is growing far more rapidly than before; but this growth
            is not only becoming more and more uneven in general, its unevenness
            also manifests itself, in particular, in the decay of the countries
            which are richest in capital (Britain).
          </p>
        </div>
      );
    } else if (this.state.randomNum === 4) {
      return (
        <div className="art">
          <h1>Imperialism, the Highest Stage of Capitalism [Excerpt 5]</h1>
          <h2>by Vladimir Lenin</h2>
          <p>
            To this must be added that it is not only in newly opened-up
            countries, but also in the old, that imperialism is leading to
            annexation, to increased national oppression, and, consequently,
            also to increasing resistance. While objecting to the
            intensification of political reaction by imperialism, Kautsky leaves
            in the shade a question that has become particularly urgent,{" "}
            <mark
              className={this.state.textClicked ? "unmarked" : "marked"}
              onClick={this.toggle}
            >
              NED reaffirmed commitments to the largest countries of the region,
              Brazil and Mexico, that are currently facing the menaces of right-
              and left-wing populist governments, respectively
            </mark>{" "}
            In order to appraise this “mental aberration” of Kautsky’s I shall
            take the following example. Let us suppose that a Japanese condemns
            the annexation of the Philippines by the Americans. The question is:
            will many believe that he does so because he has a horror of
            annexations as such, and not because he himself has a desire to
            annex the Philippines? And shall we not be constrained to admit that
            the “fight” the Japanese is waging against annexations can be
            regarded as being sincere and politically honest only if he fights
            against the annexation of Korea by Japan, and urges freedom for
            Korea to secede from Japan?
          </p>
        </div>
      );
    }
  }

  render() {
    return this.GetRandomText();
  }
}

import React, { Component } from "react";
import "../../../styles/Blog.css";

export default class Blog1 extends Component {
  render() {
    return (
      <div className="blog">
        <h1>Blog 1: A Critical Analysis of StarryNight</h1>
        <p>
          Among the various curated artworks on the Rhizome ‘Net Art Anthology’
          is one titled StarryNight, made back in 1999 as an interactive website
          (Galloway et al, 1999). The piece is a black background featuring
          various stars, each of which represents an email shared between
          members of the Rhizome discussion boards, the emails being on a
          variety of topics or even sharing actual artworks themselves. So the
          piece contains an archive of many important discussions on net art
          from the time, all of which can be read, and alongside these
          discussions is a system that identifies keywords for each email/star.
          These keywords can be selected which will then create lines between
          stars which share the keyword, creating an effect that resembles
          constellations and ties together emails covering the same topics.
        </p>
        <p>
          Writing on what he perceived to be the value of art, Walter Benjamin
          stated that “even the most perfect reproduction of a work of art is
          lacking in one element: its presence in time and space” (Benjamin,
          1999: 214). With StarryNight, because the browser, operating system,
          and web standards it uses are all deprecated, the artwork is run
          through an online emulation of Windows 2000, so the experience of it
          now is different to its original form in terms of accessibility and
          access. This in some ways make the currently available version of the
          artwork a reproduction, though it is functionally identical in code it
          is not the same experience to access and see as it would have been in
          1999. This is an issue that arises with a lot of older digital
          artworks which must be recreated or emulated to run on modern computer
          systems. There is a layer of separation between how they were and how
          they are now.
        </p>
        <p>
          In the article The Work of Art in the Age of the Internet David
          Carrier discusses how modern art has become increasingly digital and
          online, with the internet pages that store and show art being
          themselves a type or evolution of the art gallery (Carrier, 2020). In
          the case of StarryNight it is part of a collection of curated works,
          like a gallery, and the webpage containing the artwork also has
          snippets of information from a variety of sources which give context
          about the art and help show its place in the history of net art. The
          Rhizome anthology isn't just a page containing reproductions of the
          original artworks, but hosts the actual code itself, being as ‘real’
          as it would have been in 1999, existing in a permanent gallery purely
          online. In general net art presents an interesting perspective on the
          overall future of artworks being hosted online, as the source, or real
          artifact, becomes less important than its accessible reproduction:
          becoming only “a thing of value for specialists but not the general
          public” (Carrier, 2020).
        </p>
        <h2>References</h2>
        <p>
          Benjamin, W (1999). "The Work of Art in the Age of Mechanical
          Reproduction." Illuminations. Ed. H. Arendt. London, Pimlico. 211–235.
        </p>
        <p>
          Carrier, D. (2020). The Work of Art in the Age of the Internet.
          Hyperallergic. Available at:
          https://hyperallergic.com/563938/the-work-of-art-in-the-age-of-the-internet/
          (Accessed: 09 March 2022).
        </p>
        <p>
          Galloway, A., Tribe, M., Wattenberg, M. (1999). Rhizome Net Art
          Anthology. Available at: https://anthology.rhizome.org/starrynight
          (Accessed: 09 March 2022).
        </p>
      </div>
    );
  }
}

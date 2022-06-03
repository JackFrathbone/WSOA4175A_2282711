import React, { Component } from "react";
import "../../../styles/Blog.css";

export default class Blog4 extends Component {
  render() {
    return (
      <div className="blog">
        <h1>Blog 6: Internet Artwork Prototype Discussion</h1>
        <p>
          From the overall plan to building the first prototype of my internet
          artwork, unexpected issues played a large role in shifting the scope
          of the project and how I’ll approach the next section. To start, the
          actual artwork itself overall is supposed to be a blend of two texts
          that are displayed on the website, with a base text that is visible,
          and the secondary text being underlined/redacted, appearing at first
          as part of the original text. Clicking on redacted text reveals it,
          showing the other text and creating a contradiction between the
          contents of both texts. This is the overall plan that will be followed
          for the final version, including a plan to randomise the text that is
          being blended, mixing paragraphs and trying to ensure that each viewer
          sees a different mix of text.
        </p>
        <p>
          The prototype features a static text, with the redacted sections being
          done by hand. Clicking on a redacted piece of text removes the
          redaction from all the text at once, instead of the individual text.
          The primary text which will be used for both versions is Imperialism,
          the Highest Stage of Capitalism by Vladimir Lenin. For just this
          prototype the secondary text will be from the wikipedia article on
          Operation Condor, in order to easily show how the contradictions
          between the two texts are supposed to work.
        </p>
        <p>
          The meaning of the artwork draws ideas from Madianou’s article on
          ‘technocolonialism’ which explores digital inequality between the
          global north and global south (Madianou, 2019). My goal is to explore
          how despite the free access to information that the internet provides,
          both corporate and state control of major online spaces filters how
          people find and interact with information and learn about the world.
          The primary example of this I am looking at is the role of US
          Imperialism in controlling the flow of information across the web in
          their favour, including the promotion of US and other major western
          media sources over sources from the global south that might provide
          alternate views. This has led to younger generations in the global
          south viewing US based viewpoints on politics and history as the
          global norm, based on their consumption of US media.
        </p>
        <p>
          My artwork aims to explore how the South African view of the cold war
          is deeply shaped by the perspective of the US and not our own
          historical one, because of how we are constantly faced with US media
          and opinions due to the sheer power of North American culture on the
          internet. Not only aiming to highlight the hegemony that US culture
          and media holds globally, but also the fact that billions of dollars
          are spent by the US government for their various agencies to
          deliberately promote their agenda across the world and undermine
          voices that speak out against imperialism or highlight the culpability
          of the United States in committing war crimes, propping up
          dictatorships and undermining democracy in “enemy countries”.
        </p>
        <p>
          The use of the secondary text about Operation Condor is just to
          explicitly state how the US has in the past directly supported mass
          killings and right wing dictatorships using government branches like
          the Central Intelligence Agency(CIA) to hunt down any opponents to US
          foreign policy or economic power. By combining this text with Lenin's
          Imperialism, the Highest Stage of Capitalism I try to show how our
          true understanding of the systems of power across this world are
          directly undermined by US narratives which seek to downplay its own
          dominance and abuses, and paint a picture of history that puts them as
          heroes for democracy and freedom.
        </p>
        <p>
          For future versions I plan to replace the secondary text with more
          varied excerpts from modern foreign policy institutions in the United
          States such as the National Endowment for Democracy which uses
          government money to support opposition parties in countries viewed as
          enemies of the US. While the current text is much more explicit, I
          would like to highlight the more subtle way that US foreign policy is
          pushed and especially how much time and money is dedicated to online
          propaganda and control.
        </p>
        <h2>References</h2>
        <p>
          Madianou, M. (2019). Technocolonialism: Digital Innovation and Data
          Practices in the Humanitarian Response to Refugee Crises. Social Media
          + Society. 1(13).
        </p>
      </div>
    );
  }
}

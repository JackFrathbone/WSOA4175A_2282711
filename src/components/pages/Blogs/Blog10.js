import React, { Component } from "react";
import "../../../styles/Blog.css";

export default class Blog10 extends Component {
  render() {
    return (
      <div className="blog">
        <h1>Blog 10: Internet Artwork Rationale and Critical Reflection</h1>
        <p>
          My final artwork differs in quite a few ways from the first prototype
          I developed, and differs even more from what I originally envisioned.
          The artwork currently exists as a page on the website which is
          navigated to via an ‘art’ button on the header. The page is a text
          excerpt from Vladimir Lenin's Imperialism, the Highest Stage of
          Capitalism, with there being five separate excerpts all listed from
          one to five. Each excerpt is a full paragraph of text taken from
          various different chapters in the book, and all having slightly
          different themes.
        </p>
        <p>
          Each excerpt also has a section in it which has been censored in
          white, with a sentence being marked out. When the sentence is clicked,
          the censorship is removed and new text is shown in its place. These
          new bits of texts are excerpts from the National Endowments for
          Democracies 2020 Annual Report (Gershman, 2020). Each excerpt from the
          report has been selected to match thematically with the text from
          Lenin, to create a contradiction and counterpoint. The specific Lenin
          excerpt is chosen randomly from the five when the page is loaded so
          viewers do not get a choice in which one they will see.
        </p>
        <p>
          While, as mentioned before, this was not exactly how I originally
          envisioned the art work functioning, its purpose remains the same and
          I think it still works. The primary purpose of this piece is to raise
          the point about how the cultural, military and political hegemony of
          the United States destroys the fundamental freedom of information on
          the internet. US perceptions of history, and the dominance of their
          own narrative on the cold war and communism means that a piece like
          Lenin’s Imperialism becomes less accessible because layers of
          propaganda and anti-communism must be dealt with before engaging with
          one of the most important works of the 20th century.
        </p>
        <p>
          The National Endowment for Democracy(NED) was an institution founded
          and supported by the US government under Ronald Reagan as a tool for
          pushing US foreign policy (Krader, 2017). It is a prime example of how
          the United States uses ‘soft power’ through financing, training and
          social media to push its economic and political ideas in countries
          hostile to the United States, and how the economic goals of US
          imperialism are achieved through cultural and political means. By
          contrasting Lenin with a report from the NED I show how Lenin's
          warnings about the growth of Imperialism and its effects across the
          world still exist in the modern world, and how through the internet
          information itself is easily corrupted by vast networks that seek to
          shift and guide online discourse globally.
        </p>
        <p>
          So through the artwork I hope to show viewers a glimpse of what
          Madianou terms ‘technocolonialism’ and the ways in which the
          supposedly free and open internet is shaped by imperialist powers to
          guide specific viewpoints of the world and history (Madianou, 2019).
          Lenin’s works are thus censored directly, and trying to uncover or
          understand more presents walls of propaganda and discourse that only
          further censors and confuses the true meaning of the text.
        </p>
        <p>
          So now looking at the work, and especially its final form, it is
          important to acknowledge that I wanted to do more but was heavily
          limited by technical constraints. The original plan was to actually
          have the paragraph from Imperialism and from the sentence from the NED
          report be randomly chosen, then combined and censored randomly. This
          would also be linked to a site cookie which meant that a user would
          only ever get one random combination of the texts. Working with
          React.js made this very difficult as I understood how to do this in
          vanilla javascript but getting it done in react proved to be a step
          too difficult for me. At this point I decided to move to using premade
          paragraphs, but still wanted it to select from a list of five randomly
          based on a cookie. This also proved difficult and as time was running
          out I was forced to simply make it random only on loading the page.
        </p>
        <p>
          This meant that the whole idea of forcing a user to have one set text
          would no longer work, but I think looking at how it works now I think
          the overall message and general feel of the artwork still stands.
          Despite the fact I had to put limitations into the plan of the
          artwork, the core bit, the mixing of texts and censorship are still
          there and they are the key parts. Otherwise I am generally happy but
          do realise that the artwork comes from a very specific place, my own
          knowledge and understanding of Marxism, imperialism and specifically
          the work of organisations like the NED that might not be clear to
          other people. The artwork is something that is meant to be understood
          but does not explain itself or teach anything, which could be seen as
          a limitation. But working within the time and academic constraints of
          this project I don't think I had the room to make it more educational.
          But the blogs do suffice to help clarify the thought process.
        </p>
        <h2>References</h2>
        <p>
          Krader, S. (2017) Template Revolutions: Marketing U.S. Regime Change
          in Eastern Europe, Westminster Papers in Communication and Culture
          5(3), p.91-112.
        </p>
        <p>
          Lenin, V. (1961). Imperialism, the Highest Stage of Capitalism.
          Progress Publishers.
        </p>
        <p>
          Madianou, M. (2019). Technocolonialism: Digital Innovation and Data
          Practices in the Humanitarian Response to Refugee Crises. Social Media
          + Society. 1(13).
        </p>
        <p>
          Gershman, C. (2020). 2020 Annual Report. National Endowment for
          Democracy [https://www.ned.org/annual-report/2020-annual-report/]
        </p>
      </div>
    );
  }
}

import React, { Component } from "react";
import "../../../styles/Blog.css";

export default class Blog7 extends Component {
  render() {
    return (
      <div className="blog">
        <h1>Blog 7: Self Reflection 2</h1>
        <p>
          With a more complete website it is great to look at the progress made
          since my last reflection. I had left a lot of the more technical work
          for now, and while it did take longer than expected I am happy with
          the progress made and how my scripts are working. The main challenge
          overall has been adjusting to working with JSX and React.js compared
          to vanilla javascript, with some ideas being easier to implement and
          other features being a lot more challenging to add in. The hardest
          part has been the implementation of the button system that lets the
          user select top, or bottom, which then disabled one set of buttons and
          enables another. This was an important part of the interactivity and
          needed to be in for this version, but figuring out the best approach,
          method and implementation with JSX took multiple attempts and more
          time than expected.
        </p>
        <p>
          This led to less time being devoted to the scripting of my net art
          piece, which I had to cut down a bit for the prototype compared to
          what I originally wanted. Currently clicking any redacted text reveals
          all redacted text, while the plan was for the text to become
          un-redacted individually. This still works fine for now and gives the
          general idea of the artwork for the prototype, but will need to be
          fixed for the final version. Aside from those two technical hurdles
          there hasn't been any issue with implementation.
        </p>
        <p>
          I think for my writing I did leave some of the work a bit late and
          thus did not reach the depth I would have wanted. Partially this was
          due to focusing on the technical work first, but also I think because
          I had a very clear vision of the art work in my mind I only
          retroactively explained the idea in depth, instead of planning and
          explaining it as I was making it. I think that while my approach was
          fine, proper planning would have made it easier to prototype the work
          and would have created a better and more in-depth writeup.
        </p>
        <p>
          Overall though I am happy with how the website it going, and how I
          managed to focus the idea from a relatively vague one at the start(US
          militarism, internet something) into a more coherent and directed
          point about the dangers of online US hegemony and its effects on
          politics and discourses via the internet. Visually I think it all ties
          together nicely, and the tactile nature of the site with its use of
          buttons to switch content helps push the idea of a militarised space.
        </p>
      </div>
    );
  }
}

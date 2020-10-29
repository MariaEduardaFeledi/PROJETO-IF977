import React from "react";
import "./TextPage.css";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <div className="text-page">
      <h1>Learning from human feedback</h1>

      <p>
        We offer a real-time data crowdsourcing platform, With the goal to
        improve the efficiency of how we can learn from human preferences, and
        expand the range of tasks to which it can be applied.
      </p>

      <h2>Reinforcement learning</h2>

      <p>
        Reinforcement learning is an area of machine learning concerned with how
        machine-learning algorithms can take actions in a simulated environment
        to maximize some reward.
      </p>

      <p>
        Typically these environments provide a reward function, this is used to
        get a reward given the state of the simulation; in the video game{" "}
        <Link
          to={"//en.wikipedia.org/wiki/Pong"}
          target="_blank"
          aria-label="Pong"
          rel="noreferrer"
        >
          Pong
        </Link>
        , this would be how many balls you can hit into the opponent's side of
        the screen. In the real world, however, such an oracle of truth is not
        available.
      </p>

      <h2>Supervised Learning</h2>

      <ol>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ol>

      <blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
          molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis
          mollis, tellus est malesuada tellus, at luctus turpis elit sit amet
          quam. Vivamus pretium ornare est.
        </p>
      </blockquote>

      <h3>Header Level 3</h3>

      <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ul>
      <p>
        <strong>Pellentesque habitant morbi tristique</strong> senectus et netus
        et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
        vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet
        quam egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris
        placerat eleifend leo. Quisque sit amet est et sapien ullamcorper
        pharetra. Vestibulum erat wisi, condimentum sed,{" "}
        <code>commodo vitae</code>, ornare sit amet, wisi. Aenean fermentum,
        elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus
        lacus enim ac dui. <a href="/">Donec non enim</a> in turpis pulvinar
        facilisis. Ut felis.
      </p>

      <h2>Header Level 2</h2>

      <ol>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ol>

      <blockquote>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          magna. Cras in mi at felis aliquet congue. Ut a est eget ligula
          molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis
          mollis, tellus est malesuada tellus, at luctus turpis elit sit amet
          quam. Vivamus pretium ornare est.
        </p>
      </blockquote>

      <h3>Header Level 3</h3>

      <ul>
        <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
        <li>Aliquam tincidunt mauris eu risus.</li>
      </ul>
    </div>
  );
}

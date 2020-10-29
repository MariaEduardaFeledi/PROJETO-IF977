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
    </div>
  );
}

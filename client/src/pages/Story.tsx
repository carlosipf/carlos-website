import React from "react";
import SocialIcons from "../components/SocialIcons";
import "./Story.css"
import Layout from "../components/Layout";
import Timeline from "../components/Timeline/Timeline"
import { timelineData } from "../components/Timeline/experienceData";

const Story: React.FC = () => {
  return (
    <Layout>
      <div className="story-container">
        <h1>My Story</h1>
        <p>hey there! i appreciate you checking out my page and
          wanting to get to know more about me! in short, i was
          born in manila and immigrated from the philippines to
          the united states when i was seven years old with my
          mother and brother to join my father in illinois! i
          grew up about an hour norhwest of chicago in a town
          called buffalo grove and attended adlai e. stevenson
          highschool where i played basketball, ran track & field,
          was the founder of the filipino-american student
          association, public relations officer of our classboard,
          among other involvements with our student body. upon
          gradutating, i started my undergrad in computer science
          at the university of illinois at urbana-champaign and i feel
          blessed to say that i am currently completing my senior year.
          outside of building cool things, i find purpose in improving
          myself mentally, physically, and spiritually. i love to
          workout, play basketball, travel, eat, read, and fashion. </p>
        <h2>My Journey</h2>
        <Timeline data={timelineData} />
      </div>
    </Layout >

  );
};

export default Story;

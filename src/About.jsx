import React from "react";
import "./styles/About.css"; // Ensure you create a corresponding CSS file for styling

const About = () => {
  return (
    <div className="about">
      <header className="about-header">
        <h1>About TaskTide</h1>
        <p>Elevate Your Productivity with TaskTide</p>
      </header>
      <section className="about-content">
        <h2>Key Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Advanced Task Scheduling</h3>
            <p>
              Plan your tasks ahead of time with ease. TaskTide allows you to
              set tasks for future dates and times, ensuring nothing falls
              through the cracks.
            </p>
          </div>
          <div className="feature-item">
            <h3>Dynamic Reminders</h3>
            <p>
              Stay on track with multiple reminders. Choose from 30-minute or
              5-minute reminders to keep you focused and prompt you before
              deadlines.
            </p>
          </div>
          <div className="feature-item">
            <h3>Smart Task Generation</h3>
            <p>
              Benefit from our intelligent task generation system. Tasks can be
              auto-generated based on your history or frequency of similar
              tasks, streamlining your workflow and minimizing manual input.
            </p>
          </div>
          <div className="feature-item">
            <h3>AI Integration (Coming Soon)</h3>
            <p>
              We are continually evolving TaskTide to include AI capabilities
              that will further enhance task management and personalized
              productivity insights. Stay tuned for future updates!
            </p>
          </div>
        </div>
      </section>
      <section className="about-why">
        <h2>Why TaskTide?</h2>
        <p>
          TaskTide is more than just a to-do list app; it's a sophisticated
          productivity tool designed to keep you organized and motivated. Its
          clean, intuitive interface ensures that managing tasks is a seamless
          experience, while its advanced features provide a professional edge to
          your personal and work tasks.
        </p>
        <p>
          Is TaskTide portfolio-worthy? Absolutely. This app is designed to
          stand out with its forward-thinking approach and dynamic features,
          making it an impressive addition to any developer’s portfolio. Whether
          you're showcasing it as a completed project or a work-in-progress with
          exciting future features, TaskTide demonstrates innovation, technical
          expertise, and a commitment to enhancing productivity.
        </p>
      </section>
    </div>
  );
};

export default About;

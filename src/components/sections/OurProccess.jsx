import React from "react";

const processSteps = [
  {
    title: "Step 1: Discover",
    description:
      "We work closely to understand your needs, goals, and challenges, laying the foundation for a tailored solution.",
  },
  {
    title: "Step 2: Plan",
    description:
      "Our expert team crafts a strategy focused on efficiency, innovation, and measurable results.",
  },
  {
    title: "Step 3: Execute",
    description:
      "Bringing the plan to life, we develop and deliver with transparent communication and agile methodology.",
  },
  {
    title: "Step 4: Deliver",
    description:
      "We deploy your solution and ensure you have all the support you need for long-term success.",
  },
];

const OurProccess = () => {
  return (
    <section className="our-process-section">
      <div className="container">
        <h2 className="section-title">Our Process</h2>
        <div className="process-steps">
          {processSteps.map((step, idx) => (
            <div className="process-step" key={idx}>
              <div className="process-step-number">{idx + 1}</div>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProccess;

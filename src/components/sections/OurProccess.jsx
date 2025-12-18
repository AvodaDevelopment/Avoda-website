import React from "react";
import { FaSearch, FaPencilAlt, FaCode, FaRocket } from "react-icons/fa";
import { FaClipboardList, FaDraftingCompass, FaHandshake } from "react-icons/fa";
import { useState } from "react";
import './OurProcess.css'
import { motion } from "framer-motion";
const processSteps = [
  {
    title: "Step 1: Fill the form",
    icon: <FaClipboardList />,
    description:
      "Start by filling out our detailed form to share your project requirements, goals, and vision. This helps us understand your needs and lay the foundation for a tailored solution.",
    color: 'blue'
    },
  
  {
    title: "Step 2: Prototype",
    icon: <FaDraftingCompass />,

    description:
      "Based on your requirements, we create a comprehensive prototype that visualizes your software or app. This interactive mockup allows you to see and experience the design before development begins.",
    color: 'green'
  },
  {
    title: "Step 3: Pitch",
    icon: <FaHandshake />,

    description:
      "We present our design and strategy, working closely with you as partners. Through collaborative discussion, we refine the solution to perfectly align with your business objectives and user needs.",
    color: 'red'
  },
  {
    title: "Step 4: Build",
    icon: <FaCode />,

    description:
      "With your approval, we bring the plan to life using modern technologies and agile methodology. You'll receive regular updates and transparent communication throughout the development process.",
    color: 'blue'
  },
  {
    title: "Step 5: Deploy",
    icon: <FaRocket />,

    description:
      "We deploy your solution to production and provide comprehensive support to ensure smooth launch and long-term success. Your success is our priority, and we're here to help every step of the way.",
    color: 'green'
  }
];

const OurProccess = () => {
  const [selectedStep, setSelectedStep] = useState(0);
  const handleStepClick = (step) => {
    setSelectedStep(step);
  }
  return (
    <section className="our-process-section">

      <div className="container">

        <h2 className="section-title">Our Process</h2>
        
        <div className="content-container">
        {processSteps.map((step, idx) => (
          <div className="content" key={idx} data-selected={selectedStep === idx}>
            <h3 className="content-title">{step.title}</h3>
            <p className="content-description">{step.description}</p>
          </div>
        ))}
          
        </div>
        <div className="process-steps">
          {processSteps.map((step, idx) => (
            <React.Fragment key={idx}>
            <button className={`process-step ${step.color}`} data-selected={selectedStep === idx} onClick={() => handleStepClick(idx)}>
              <span className="process-step-icon">{step.icon}</span>
            </button>
            {idx < processSteps.length - 1 && <div className="line-gap"></div>}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProccess;

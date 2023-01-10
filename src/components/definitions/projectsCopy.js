import { hatchProject, portfolioScreenshot, pulsarShop } from '../../../public';

const projects = [
  {
    title: `Latest Project`,
    name: `This portfolio site!`,
    description: `I began this portfolio before the holidays in 2022, in order to finally have my own website where I could share my projects with everyone. I wanted to both have fun with a project and challenge myself in building this site. I built it using React, and vanilla CSS with flexbox. In order to have a consistent deployment process I used Netlify and a consistent Git feature branch workflow based on team practices I picked up during my time at Twilio.`,
    techUsed: `Technologies Used:`,
    techUsedList: [`React`, `Flexbox`, `Netlify`, `Webpack`],
    source: portfolioScreenshot,
    screenShotAlt: `Screenshot of portfolio website`,
  },
  {
    title: `Twilio Hatch Apprenticeship`,
    name: `Hatch Evaluations`,
    description: `As part of a team of 4 engineers, we were tasked with building a tool with which to manage all of the apprentices' evaluations progress. While I was a key contributor throughout the project, my main responsiblility was the 'User Maintenance' component, which allowed the user (admin only) to either elevate or demote certain user roles-- from manager to interviewer or vice-versa. Additionally, the user could manage the relationships between a manager and an apprentice, assign an apprentice to a manager, or an interviewer to an apprentice.`,
    techUsed: `Technologies Used:`,
    techUsedList: [`React`, `TypeScript`, `Twilio Paste`, `Node`, `Webpack`],
    source: hatchProject,
    screenShotAlt: `Screenshot of Hatch Apprenticship project`,
  },
  {
    title: `Bootcamp Project`,
    name: `Pulsar Shop`,
    description: `For my capstone bootcamp project, I worked as part of a team of 3 engineers to modernize a retail web-portal within a 2-week deadline. I was in charge of the 'Ratings and Review' component where I was able to implement React with Redux to manage state effectively, centralize API calls, and manage information flow with multiple components. I also engineered a data sorting and filtering interface that allowed users to customize the way reviews were rendered and developed graphical representation for product characteristics and ratings breakdown.`,
    techUsed: `Technologies Used:`,
    techUsedList: [`React`, `Redux`, `Bootstrap`, `Node`, `Express`, `Webpack`],
    source: pulsarShop,
    screenShotAlt: `Screenshot of PulsarShop project`,
  },
];

export default projects;

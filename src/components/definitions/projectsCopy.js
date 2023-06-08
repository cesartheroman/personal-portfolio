import {
  hatchProject,
  portfolioScreenshot,
  pulsarShop,
  productsAPI,
} from '../../../public';

const projects = [
  {
    title: `Latest Project`,
    name: `Products-API Microservice`,
    description: `The goal of this project was to work with an inherited legacy front-end e-commerce web portal, and build out a specific API micro-service to be used by the front-end client. The micro-service was to be a RESTful API that would need to handle web-scale traffic and was containerized using Docker and deployed to an Amazon EC2 instance. After employing optimization strategies such as SQL query optimizations, indexing, caching, and load balancing, I was able to crush the minimum requirements of 100 requests/second and sucessfully scale my service to handle 200-750 requests/second at less than 2000ms of latency and a less than 1% error rate.`,
    techUsed: `Technologies Used:`,
    techUsedList: [
      `TypeScript`,
      `Node`,
      `Express`,
      `Postgres`,
      `Docker`,
      `Redis`,
      `Nginx`,
      `AWS EC2`,
      `Artillery`,
      `Swagger UI`,
    ],
    source: productsAPI,
    liveURL: `https://github.com/cesartheroman/Products-API`,
    screenShotAlt: `Screenshot of Products-API`,
  },
  {
    title: `Personal Portfolio`,
    name: `This portfolio site!`,
    description: `I began this portfolio around the holidays in 2022, to finally have my own website where I could share my projects with everyone. I wanted to both have fun with a project and challenge myself in building this site. I built it using React and vanilla CSS Flexbox + Grid. In order to have a consistent deployment process I used Netlify and utilized a Git feature branch workflow based on team practices I picked up during my time at Twilio.`,
    techUsed: `Technologies Used:`,
    techUsedList: [`React`, `Flexbox + Grid`, `Netlify`, `Webpack`],
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

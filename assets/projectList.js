import images from "./img/image";

const {
  calculatorapp,
  jumpgame,
  softcompage,
  todolist,
  portfolio,
  jsonplaceholderposts,
  covidStats,
  revealbot,
  ddlabs,
  cyhermes,
  firstTemplate,
  receiptGenerator,
  decideForMe,
  ecommerce,
  starwars,
  drugstoc,
  bejamas,
  githubtrends,
  beatchain,
  bincom,
  weatherapp,
  email,
} = images;

export default [
  {
    name: "Weather App",
    image: weatherapp,
    summary:
      "A weather app that shows the next 5 days weather forecast of a city",
    tools: "vue, typescript, composition api",

    link: "https://ios-weatherapp.netlify.app/",
  },
  {
    name: "Github Trends",
    image: githubtrends,
    summary:
      "A replica of github trends page built using typescript react and tailwind",
    tools: "typescript, react, tailwind",
    link: "https://ios-githubtrends.vercel.app",
  },
  {
    name: "Beat chain",
    image: beatchain,
    summary:
      "A simple landing page that has a video which can be played by either clicking play or hovering on it.",
    tools: "react, scss, javascript",
    link: "https://ios-githubtrends.vercel.app",
  },
  {
    name: "Covid Stats",
    image: covidStats,
    summary: "A web app for keeping track of covid stats in Nigeria",
    tools: "vue, tailwind ",
    link: "https://ios-covidstats.netlify.app/",
  },

  {
    name: "Bejamas",
    image: bejamas,
    summary:
      "A products landing page created with react and pictures gotten from pexels. products can be sorted and filtered",
    tools: "react, sass, javascript",
    link: "https://ios-bejamas.netlify.app",
  },
  {
    name: "ecommerce",
    image: ecommerce,
    summary:
      "An ecommerce web app created using vue, tailwind and pictures gotten from pexels api, and firebase user authentication added to it",
    tools: "vue, composition api, tailwind",
    link: "https://ios-bejamas.netlify.app",
  },
  {
    name: "Star Wars Movie",
    image: starwars,
    summary:
      "A web application created using starwars api and 15 pictures that shows the characters, planets and starships",
    tools: "Javascript, vue, starwars api, vuex, sass",
    link: "https://ios-starwars.netlify.app",
  },

  {
    name: "Fake Blog Posts",
    image: jsonplaceholderposts,
    summary:
      "A fake blog post with Vue.js using the fetched data from jsonplaceholder website",
    tools: "Javascript, Vue, Bootstrap",
    link: "https://jsonplaceholderposts.netlify.app",
  },

  {
    name: "Todo List",
    image: todolist,
    summary:
      "A todo list that keeps track of your daily activities, when it started and when completed",
    tools: "Html, css, Javascript",
    link: "https://ios-todolist.netlify.app",
  },
  {
    name: "Lists Page",
    image: drugstoc,
    summary:
      "A List landing page where new lists can be added, filtered by price, sorted alphabetically and by price and items can be deleted from the list",
    tools: "Vue, vuex",
    link: "https://drugstoc.netlify.app",
  },
  {
    name: "Weather App",
    image: weatherapp,
    summary:
      "A weather app that shows the next 5 days weather forecast of a city",
    tools: "vue, typescript, composition api",
    link: "https://ios-weatherapp.netlify.app/",
  },

  {
    name: "Ddlabs",
    image: ddlabs,
    summary: "replicated a landing page design using react",
    tools: "bootstrap, Javascript, react",
    link: "https://ddlabs.netlify.app",
  },

  {
    name: "A React Todo",
    image: decideForMe,
    summary: "Created a todo using react and added the random selection option",
    tools: "react, scss",
    link: "https://ios-decideforme.netlify.app",
  },
  {
    name: "Calculator",
    image: calculatorapp,
    summary:
      "Created a simple web app calculator using css grid and vanilla js",
    tools: "html, css grid, javscript",
    link: "https://ios-calculatorapp.netlify.app",
  },
  {
    name: "Softcom Landing Page (2020)",
    image: softcompage,
    summary: "Created a replica of https://softcom.ng landing page",
    tools: "Html, css, Javascript",
    link: "https://ios-softcompage.netlify.app",
  },
  {
    name: "Receipt Generator",
    image: receiptGenerator,
    summary:
      "A receipt generator web app created for generating receipts for transactions made",
    tools: "Html, css, Javascript",
    link: "https://ios-receiptGenerator.netlify.app",
  },
  {
    name: "Jump game",
    image: jumpgame,
    summary: "Created a jump game with css animations and vanilla javascript",
    tools: "Html, css, Javascript",
    link: "https://ios-jumpgame.netlify.app",
  },
];

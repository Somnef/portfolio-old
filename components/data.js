export const items = [
  {
    id: 1,
    title: "Self-learning Snake agents",
    description:
      "In this project, I worked on writing my own version of the snake game, where I have control over all of what's happening,\
      which then enabled me to write self-learning snake agents on top of it, the algorithm I used for these agents is called NEAT \
      (Neuro-Evolution of Augmenting Topologies), which is quite popular when writing self-learning game-agents. The way this\
      algorithm works is by evolving very basic neural networks through an evolutionary approach.",
    repo: "/qsdsqdsq",
    type:"Data Science",
    image: "images/projects/snake/snake.gif",
    image2: "images/projects/snake/snake2.gif",
    tech: "Python, Pygame, Python-Neat",
  },

  // Photo by Dennis Brendel on Unsplash
  {
    id: 2,
    title: "Wildfire spread prediction",
    description:
      "Along my team mates, we developed a solution which uses Google Earth's satellite imagery in order to reproduce real-life\
      3D landscapes in Unity game engine (taking into account height, wind and vegetation data), and then predicts how wildfire\
      would spread giving an initial ignite position.",
    repo: "/qsdsqdsq",
    type:"Data Science",
    image: "images/projects/wildfire/wildfire.gif",
    image2: "images/projects/wildfire/wildfire2.gif",
    tech: "Google Earth Engine's API, Unity, Python, Scikit-learn",
  },
  // Photo by Alessandra Caretto on Unsplash
  {
    id: 3,
    title: "Focus monitor",
    type:"Data Science",
    description:
      "During the Google DevFest hackathon, me and my team worked on developing a focus monitor which follows the computer users'\
      movements and facial features in order to determine whether they are focused or not, and produce a reliable data storage and\
      monitoring tool regarding that person, but that I think about it, if we were to use that in corporations, it would be kinda\
      scary, right ?!",
    repo: "/qsdsqdsq",
    image: "images/projects/focus/focus.gif",
    image2: "images/projects/focus/focus2.gif",
    tech: ["python", "sklearn", "Keras"],
  },
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };

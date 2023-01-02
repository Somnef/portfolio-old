export const items = [
	{
		id: 1,
		title: "Self-learning Snake agents",
		description:
			"In this project, I worked on writing my own version of the snake game, where I have control over all of what's happening,\
      		which then enabled me to write self-learning snake agents on top of it, the algorithm I used for these agents is called NEAT \
      		(Neuro-Evolution of Augmenting Topologies), which is quite popular when writing self-learning game-agents. The way this\
      		algorithm works is by mutating and combining very basic neural networks through an evolutionary approach.",
		repo: "https://github.com/Somnef/snake_neat_ai",
		type: "Data Science",
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
      		would spread given an initial ignite position. By the end of the project, we were able to get a working simulation and\
			publish our work on ResearchGate!",
		repo: "https://github.com/Somnef/semi-empirical-wildfire-simulation",
		researchgate: "https://www.researchgate.net/publication/354678516_Applying_semi-empirical_simulation_of_wildfire_on_real_world_satellite_imagery_data",
		type: "Data Science",
		image: "images/projects/wildfire/wildfire.gif",
		image2: "images/projects/wildfire/wildfire2.gif",
		tech: "Google Earth Engine's API, Unity, Python, Scikit-learn",
	},
	// Photo by Alessandra Caretto on Unsplash
	{
		id: 3,
		title: "Focus monitor",
		type: "Data Science",
		description:
			"During the Google DevFest hackathon, me and my team worked on developing a focus monitor which follows the computer users'\
      		movements and facial features in order to determine whether they are focused or not, and produce a reliable data storage and\
      		monitoring tool regarding that person, but that I think about it, if we were to use that in corporations, it would be kinda\
      		scary, right ?!",
		repo: "https://github.com/Somnef/focus-monitor-ai",
		image: "images/projects/focus/focus.gif",
		image2: "images/projects/focus/focus2.gif",
		tech: "Python, Mediapipe, OpenCV",
	},

	{
		id: 4,
		title: "Algeria Told By Data",
		type: "Data Science",
		description:
			"This side project I undertook with a group of friends consists of looking for Algerian data (historical, \
			societal, economical... etc.), mining it through automatic tools (web scraping) and then try and put it in the best \
			visual shape possible, which resulted in animations and visualizations which were quite explanatory.",
		repo: "https://github.com/annis-souames/Algeria-told-by-data#contributing",
		image: "images/projects/atbd/atbd.gif",
		image2: "images/projects/atbd/atbd2.gif",
		tech: "Python, Pandas, Requests, Selenium, Matplotlib",
	},

	{
		id: 5,
		title: "Convolutional autoencoder",
		type: "Data Science",
		description:
			"This is a project I developed in the context of my Ericsson internship, it consisted of designing the structure\
			of a convolutional neural network that acts as an autoencoder at the same time, and the decoder part is also trained on\
			removing noise from input data.",
		repo: "https://github.com/Somnef/denoising_convolutional_autoencoder",
		image: "images/projects/denoiser/denoiser.webp",
		image2: "images/projects/denoiser/denoiser.webp",
		tech: "Python, Pytorch, Matplotlib",
	},

	{
		id: 6,
		title: "Dynamic market simulation",
		type: "Data Science",
		description:
			"This is a project I developed in the context of my Ericsson internship, it consisted of designing the structure\
			of a convolutional neural network that acts as an autoencoder at the same time, and the decoder part is also trained on\
			removing noise from input data.",
		repo: "https://github.com/annis-souames/bg-app/tree/new",
		image: "images/projects/bg/bg.webp",
		image2: "images/projects/bg/bg2.webp",
		tech: "Laravel, VueJs, SocketIO",
	},
];

export const openSpring = { type: "spring", stiffness: 200, damping: 30 };

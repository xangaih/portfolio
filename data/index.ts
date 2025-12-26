import { Span } from "next/dist/trace";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#workExperience" },

  ];
  
  export const gridItems = [
    {
      ///I prioritize client collaboration, fostering open communication 
      id: 1,
      title: "",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/13.jpeg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for both front and back-end development",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Recently, I've been focusing my efforts on back-end development, using popular technologies like Node.js, Express.js, and EJS for server-side rendering",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-86 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Contact Me!",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Toxic Comment Classification ML",
      des: "Developed a machine learning model using TensorFlow, Bidirectional LSTM, and Embedding layers to classify toxic comments across six categories, leveraging TextVectorization and the TensorFlow Dataset API for efficient training, achieving 93% Precision, 92% Recall, and 90% Accuracy, and deploying with Gradio for real-time toxicity detection",
      img: "/Machine.png",
      iconLists: ["/tensorflow-svgrepo-com.svg", "/pandas-svgrepo-com.svg", "/numpy-svgrepo-com.svg", "/scikit-learn.svg"],
      link: "https://github.com/xangaih/Toxic-Comment-Classification.git",
    },
    {
      id: 2,
      title: "Ticket Management",
      des: "Developed a backend system using Node.js and Express, incorporating authentication, real-time notifications, and analytics by integrating JWT, MongoDB, and WebSockets for secure login and updates, while deploying with Docker to ensure scalability and efficient service management for 100+ users",
      img: "/ticket.png",
      iconLists: ["/mongo.svg", "/docker.svg", "/graphql.svg", "/nodejs.svg", "/websock.svg"],
      link: "https://github.com/xangaih/-BACK-END-MICROSERVICE.git",
    },
    {
      id: 3,
      title: "Weather App",
      des: "Cross-platform mobile app built with Flutter for real-time weather updates. Displays temperature, weather conditions, and sunrise/sunset times using the Weather API. Utilizes Flutter Bloc, Equatable, Geolocator, and Intl for state management, location services, and date/time formatting. Features a modern UI with Material Design components",
      img: "/Weather.png",
      iconLists: ["/flutter.svg", "/dart.svg", "/api.svg"],
      link: "https://github.com/xangaih/WeatherApp-IOS-Android.git",
    },
    {
      id: 4,
      title: "Color Detector",
      des: "Developed an image processing application using Python and OpenCV to detect the color yellow in real-time through a webcam feed. The program captures video frames, converts them to the HSV color space, and applies a mask to isolate and identify yellow regions, utilizing technologies such as NumPy and Pillow for numerical operations and additional image manipulation.",
      img: "/small.png",
      iconLists: ["/opencv.svg", "/python.svg", "/pycharm.svg"],
      link: "https://github.com/xangaih/Color_Detection-OpenCV.git",
    },
    {
      id: 5,
      title: "Simon Game",
      des: "Browser-based game where players replicate increasingly complex color and sound sequences, featuring dynamic sequence generation, interactive buttons, and feedback. The game starts with a key press and supports restarting after a game over",
      img: "/Simon.png",
      iconLists: ["/html.svg", "/css.svg", "/javascript.svg", "/jquery.svg"],
      link: "https://github.com/xangaih/SImon-Game.git",
    },
    {
      id: 6,
      title: "Expense Tracker ",
      des: "Flutter app for managing and tracking expenses. Features include adding, viewing, and categorizing expenses with input validation, date picker, and category icons. Utilizes Flutter, Dart, Intl for date formatting, and UUID for unique IDs, with a modern UI",
      img: "/expense.png",
      iconLists: ["/flutter.svg", "/dart.svg"],
      link: "https://github.com/xangaih/Expense-Tracker-IOS-Android.git",
    },
  ];

  
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  ////techpoint.png
  export const workExperience = [

    {
      id: 1,
      title: "- Software Engineer Intern / Rayca Precision",
      desc: "Integrated OpenAI models (GPT-4, text embeddings) with RAG, using Redis for fast lookups and Weaviate for scalable embedding storage, improving response accuracy by 25%; enhanced data retrieval efficiency by 15% by configuring user context with MongoDB, DataHub, and AWS S3 for seamless data access; and accelerated query speeds by 40% with dynamic embedding storage, leveraging Redis for quick access and Weaviate for persistent storage.",
      className: "md:col-span-2",
      thumbnail: "/rayca5.png",
    },

    {
      id: 2,
      title: "- Xplore Program: JPMorgan Chase, Accenture / Techpoint",
      desc: "JPMorgan Chase Software Engineering Simulation, Completed an engineering ticket for the credit card rewards system by creating a new class and writing a test suite. JPMorgan Chase Cybersecurity Simulation, Conducted projects on email security fundamentals and access control, with a focus on application security hygiene, exploratory data analysis, and text-based ML models. Accenture Data Analytics Simulation: Analyzed 7 datasets for content trends, creating a PowerPoint and video presentation to advise a social media client.",
      className: "md:col-span-2",
      thumbnail: "/techpoint.png",
    },
    {
      id: 3,
      title: "- Software Engineer Intern / Digital Consulting LLC",
      desc: "Resolved 10 login issues using Next.js and JavaScript, reducing user login errors by 15% and boosting satisfaction. Optimized JavaScript code, increasing maintainability and team productivity by 3%, accelerating delivery by 1 week/project. Implemented 5 best practices with a mentor, improving efficiency by 20% and enhancing deliverable quality",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp1.svg",
    },
    {
      id: 4,
      title: "- Social Media Content Creator / MAAD Magazine",
      desc: "Created posts from the ground up, designing and writing captions about alarming news and trends which increased the total number of followers by 2.5%. Contributed ideas during strategic and conceptual brainstorming sessions, which made our posts more interesting. Conducted research to obtain factual information and authentic detail using newspaper accounts and diaries which made our posts more authentic",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/maad.png",
    },
    //{
     // id: 4,
      //title: "Lead Frontend Developer",
      //desc: "Developed and maintained user-facing features using modern frontend technologies.",
      //className: "md:col-span-2",
      //thumbnail: "/exp4.svg",
    //},
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];
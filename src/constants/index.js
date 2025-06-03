export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Projects', 
      href: '#projects',
    },
    {
      id: 4,
      name: 'What I DO',
      href: '#work',
    },
    {
      id: 5,
      name: 'Hobbies',
      href: '#Hobbies',
    },
    {
      id: 6,
      name: 'Contact',
      href: '#contact',
    },
    
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Palak Parihar ',
      position: 'Software Developer and Junior HR',
      img: 'assets/review1.png',
      review:
        'Working with Mohit was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Pranav Krishna',
      position: 'IITK CSE STUDENT',
      img: 'assets/review1.png',
      review:
        'Mohit’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'Sai Disha J',
      position: 'Full Stack Developer',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Mohit. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'SK Rehman',
      position: 'IITK CSE Student and web developer',
      img: 'assets/review3.png',
      review:
        'Mohit was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in frontend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'CubeMaster : Rubik’s Cube Solver and Simulator',
      desc: 'CubeMaster is a next-generation, web-based Rubik’s Cube simulator and solver that brings the cube experience to life in your browser. Featuring smooth, real-time 3D rendering powered by Three.js and an integrated Python-backed Two-Phase solving algorithm, CubeMaster allows users to twist, turn, and scramble a virtual cube with lifelike physics.',

      subdesc:
        'Instantly compute optimal solution sequences from any scramble and visualize each move with animated transitions, making it perfect for speedcubers, educators, and enthusiasts alike. Whether you want to practice algorithms, test new solving methods, or simply enjoy a responsive, interactive cube environment, CubeMaster delivers an all-in-one, AI-accelerated cubing experience.',
      href: 'https://github.com',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/speedcubingiitk.png',
      logoStyle: {
        backgroundColor: 'grey',
        border: '1.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px black',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Python',
          path: 'assets/python.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.png',
        },
        {
          id: 4,
          name: 'Github ',
          path: '/assets/github.png',
        },
      ],
    },
    {
      title: 'LMS : Library Management System',
      desc: 'LMS is a comprehensive terminal-based Library Management System designed for authenticated multi-user access. Built with C++ and driven by OOP principles, it streamlines user management, book inventory, and fine tracking through an interactive menu-driven interface.',
      subdesc: 'With LMS, students, faculty, and librarians access role-specific features using keyboard navigation and secure login. The system offers robust functionality like borrowing history, fine payments, and user/book management—all inside a terminal-friendly GUI powered by arrow-key selection and class-based design.',
      href: 'https://github.com/Manyruumpus/LMSassignment',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'C++',
          path: '/assets/cpp.png',
        },
        {
          id: 2,
          name: 'Programming',
          path: 'assets/coding.png',
        },
        {
          id: 3,
          name: 'Terminal',
          path: '/assets/terminal-icon.png',
        },
        {
          id: 4,
          name: 'Github',
          path: '/assets/github.png',
        },
      ],
    },
    {
      title: 'Eventrix: Event Management System Exclusive for IIT Kanpur',
      desc: 'Eventrix is a tailored event management platform built to centralize and streamline the organization of campus activities at IIT Kanpur. It simplifies event creation, registration, approvals, and participation tracking for both clubs and attendees, ensuring smooth coordination and transparency.',
      subdesc: 'Developed as a team project, Eventrix leverages modern tools like Next.js, Cloudinary, and Expressjs to deliver real-time updates, automated approvals, and personalized event notifications—all in one unified dashboard. I contributed as the frontend developer, focusing on building intuitive interfaces and responsive user flows.',
      href: 'https://github.com/Manyruumpus/Eventrix',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/eventrixlogo.png',
      logoStyle: {
        backgroundColor: 'grey',
        // background:
        //   'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.0px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.png',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongodb.png',
        },
      ],
    },
    {
      title: 'IITK Mini MIPS',
      desc: 'IITK Mini MIPS is a custom-built simulation environment that replicates the behavior of a simplified MIPS processor. Designed for educational use, it enables students to understand instruction-level execution and processor architecture through hands-on experimentation.',
      subdesc: 'Developed using Verilog, this project implements core MIPS functionalities such as instruction fetch, decode, execute, memory access, and write-back. It showcases pipelining and control signal logic, providing a practical introduction to hardware design and computer architecture.',
      href: 'https://github.com/Manyruumpus/CS220-IITK-MINI-MIPS-',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'MIPS',
          path: '/assets/mips.png',
        },
        {
          id: 2,
          name: 'Verilog',
          path: 'assets/terminal-icon.png',
        },
      
      ],
    },
    
    {
      title: 'Cubeorithm',
      desc: 'Cubeorithm is a dynamic web platform built for the global Rubik’s Cube community. It caters to beginners and speedcubers alike—helping users learn, practice, and share cube-solving strategies and techniques.',
      subdesc: 'Built using Bootstrap and JavaScript, Cubeorithm features a responsive design with intuitive navigation. With features like scramble visualization, solve tracking, and algorithm training in development, it’s constantly evolving to become the ultimate toolkit for cubers.',
      href: 'https://github.com/Manyruumpus/Cuborithm',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/cubeorithm.png',
      logoStyle: {
        backgroundColor: 'orange',
        border: '0.px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'Bootstrap',
          path: 'assets/bootstrap.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: '/assets/javascript.png',
        },
        {
          id: 4,
          name: 'HTML',
          path: '/assets/html.png',
        },
      ],
    },
  ];
  
  const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.2 : isMobile ? 0.3 : 0.32,
      deskPosition: isMobile ? [0.05, -6, -5] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'C++ programmer',
      pos: 'Competitive Programming',
      duration: '2024 - Present',
      title: "As a C++ programmer, I focus on developing efficient algorithms and optimizing code performance. I participate in competitive programming contests to enhance problem-solving skills and algorithmic thinking.",
      icon: '/assets/cpp.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Full Stack Development',
      pos: 'Front end Development',
      duration: '2024 - Present',
      title: "As a Frontend Developer, I specialize in crafting engaging and responsive user interfaces. I leverage modern frameworks like React and styling solutions like Tailwind CSS to build pixel-perfect, accessible web experiences with smooth animations and intuitive interactions. My focus is on creating delightful user experiences through clean, maintainable frontend code.",
      icon: '/assets/react.svg',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Mentor : Cube Simulator',
      pos: 'Cordinator Speedcubing Club',
      duration: '2025 - Present',
      title: "As a mentor for the Cube Simulation project at IIT Kanpur, I guide 10 students in developing advanced Rubik's cube applications. Teaching them VPython for 3D visualization, React for frontend development, and OpenCV for cube detection and tracking. This hands-on mentorship helps students bridge theoretical knowledge with practical implementation in computer graphics and web development.",
      icon: '/assets/speedcubingiitk.png',
      animation: 'salute',
    },
  ];

export default calculateSizes; 

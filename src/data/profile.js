export const profile = {
  name: 'MD Sahil',
  title: 'Full Stack Web Developer | C++ DSA Enthusiast',
  tagline:
    'I build scalable web applications and solve complex problems with efficient algorithms.',
  location: 'India',
  photo: '/profile.jpg',
  email: 'mdsahil947034@gmail.com',
  githubUsername: 'Mdsahil134',
  socials: {
    github: 'https://github.com/Mdsahil134',
    linkedin: 'https://www.linkedin.com/in/md-sahil94',
    email: 'mailto:mdsahil947034@gmail.com',
    mobile: '+91 9470347372',
  },
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'journey', label: 'Training' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'resume', label: 'Resume' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  headline: 'College student passionate about building impactful software.',
  bullets: [
    'Skilled in Full Stack Development with React, Node.js, and modern web technologies.',
    'Strong proficiency in Data Structures & Algorithms with hands-on C++ implementations.',
    'Experience building AI/ML-powered applications, REST APIs, and secure authentication systems.',
  ],
  quickFacts: [
    { label: 'Location', value: 'India' },
    { label: 'Education', value: 'College student (Computer Science)' },
    { label: 'Focus', value: 'Full Stack + DSA (C++)' },
  ],
  journey: [
    `Hello! I'm MD Sahil, a passionate full stack developer who enjoys turning ideas into polished, scalable web applications.`,
    `My journey started with curiosity for how software works, and it quickly grew into consistent practice in full stack development (React, Node.js, databases) and problem solving with Data Structures & Algorithms in C++.`,
    `I love building end-to-end systems—from designing clean, responsive UIs to implementing secure REST APIs, authentication, and efficient data models.`,
  ],
  approach: [
    `I believe great software is a blend of clean architecture, smooth user experience, and strong fundamentals.`,
    `I focus on writing maintainable code, keeping components reusable, and validating flows end-to-end while continuously learning and improving.`,
  ],
  whenNotCoding: ['Surfing web', 'Reading', 'Music'],
}

export const skills = [
  {
    category: 'Languages',
    items: ['C++', 'Python', 'Java'],
  },
  {
    category: 'Web Technologies',
    items: ['HTML & CSS', 'JavaScript', 'React.js', 'Node.js', 'Express.js'],
  },
  {
    category: 'Database & Tools',
    items: ['MongoDB', 'MySQL', 'Git', 'GitHub', 'Docker'],
  },
  {
    category: 'Core Concepts',
    items: [
      'Data Structures & Algorithms',
      'OOPS',
      'DBMS',
      'REST APIs',
      'JWT Authentication',
    ],
  },
  {
    category: 'Soft Skills',
    items: ['Problem-Solving', 'Team Player', 'Adaptability'],
  },
]

export const projects = [
  {
    title: 'Government Complaint Intelligence System',
    start: 'Sept 2025',
    completed: "Jan '26",
    image: '/gcis-hero.jpg',
    description:
      'An AI-powered platform for automatic complaint classification and urgency detection using NLP models. Features a secure full-stack dashboard with real-time analytics.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs', 'JWT Auth', 'Python', 'Docker', 'NLP'],
    github: 'https://github.com/Mdsahil134/AI-Based-Government-Complaint-Intelligence-System',
  },
  {
    title: 'Bookstore Management System',
    start: "Mar '25",
    completed: "Oct '25",
    image: '/book.png',
    description:
      'A full-stack bookstore application featuring user authentication, dynamic data management, and RESTful APIs with MongoDB integration.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs'],
    github: 'https://github.com/tyagiananatt/bookstore',
  },
  {
    title: 'Health and Diet Tracker',
    completed: "Dec '24",
    image: '/health-tracker-hero.png',
    description:
      'A responsive fitness recommendation web app providing personalized health, diet, and trackable goals based on user metrics.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    github: 'https://github.com/your-github-username/health-diet-tracker',
  },
]

export const journey = [
  {
    title: 'Data Structure & Algorithm with C++',
    institution: 'Splen Technologies & Education Pvt. Ltd',
    type: 'Training',
    duration: "Jun '25 – Jul '25",
    link: 'https://drive.google.com/file/d/1k7tfL4vyB6D2T5B46vrXhPuU1QoAKd0Y/view',
    subtitle:
      'Gained strong proficiency in core data structures including Arrays, Linked Lists, Stacks, Queues, Trees, Heaps, Graphs, and Hash Tables through hands-on C++ implementations.',
    details: [
      'Strengthened understanding of memory management, STL usage, and performance optimization.',
      'Solved 100+ curated coding problems to strengthen logical reasoning and algorithmic thinking.',
      'Built solid foundations in problem-solving ability and efficient algorithm design.',
    ],
  },
]

export const certificates = [
  {
    title: 'MongoDB Development Skill',
    issuer: 'MongoDB',
    date: "Oct '25",
    link: '/udemy_certificate.pdf',
    image: '/mongodb.png',
    description: 'Learned core MongoDB concepts, including CRUD operations, indexing, and aggregation.',
  },
  {
    title: 'Redwood Application Certified Developer Associate',
    issuer: 'Oracle',
    date: "Sept '25",
    link: 'https://drive.google.com/file/d/1tuTl7WoD5fUr1_hy60DWPt68u1NGqSnQ/view',
    image: '/oracle.png',
    description: 'Demonstrated extensive knowledge of Redwood Application development.',
  },
  {
    title: 'Privacy and Security in online Social Media',
    issuer: 'NPTEL',
    date: "Mar '25",
    link: 'https://drive.google.com/file/d/1TcgphfSrP1qLZLjA-4Qp66ZNOmfWZU6q/view',
    image: '/nptel.png',
    description: 'Understood core concepts regarding privacy and security on various social media platforms.',
  },
  {
    title: 'AI Essential',
    issuer: 'Udemy',
    date: "Mar '25",
    link: '/udemy_certificate.pdf',
    image: '/udemy.png',
    description: 'Gained an understanding of fundamental AI concepts and their practical applications.',
  },
]

export const achievements = [
  {
    title: 'Achieved 5-Star rating in Problem Solving on HackerRank.',
    icon: 'hackerrank',
    link: '#',
    date: "Nov '25",
  },
  {
    title: '50-Day Coding Streak Badge on LeetCode.',
    icon: 'leetcode',
    link: '#',
    date: "Jan '26",
  },
  {
    title: 'Solved 250+ DSA problems across multiple coding platforms.',
    icon: 'codility',
    link: '#',
    date: "Jan '26",
  },
]

export const education = [
  {
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology Computer Science and Engineering',
    score: 'CGPA: 7.5',
    date: "Aug '23 – Present",
  },
  {
    institution: 'Inter Science College',
    location: 'Hazaribagh, Jharkhand',
    degree: 'Intermediate',
    score: 'Percentage: 71%',
    date: "Mar '22 – May '23",
  },
  {
    institution: 'Gulmohar Public School',
    location: 'Hazaribagh, Jharkhand',
    degree: 'Matriculation',
    score: 'Percentage: 71%',
    date: "Mar '20 – May '21",
  },
]

const dataPie = [
  {
    projectName: 'Website Redesign',
    tasks: [
      {
        name: 'Wireframe Creation',
        value: 70,
        fill: '#ffc658',
      },
      {
        name: 'UI Design',
        value: 85,
        fill: '#d0ed57',
      },
      {
        name: 'Frontend Development',
        value: 40,
        fill: '#a4de6c',
      },
      {
        name: 'Backend Integration',
        value: 60,
        fill: '#82ca9d',
      },
      {
        name: 'Testing and QA',
        value: 30,
        fill: '#8dd1e1',
      },
    ],
  },
  {
    projectName: 'Mobile App Development',
    tasks: [
      {
        name: 'User Research',
        value: 50,
        fill: '#f4a261',
      },
      {
        name: 'Prototyping',
        value: 75,
        fill: '#e76f51',
      },
      {
        name: 'App Architecture',
        value: 65,
        fill: '#2a9d8f',
      },
      {
        name: 'API Development',
        value: 80,
        fill: '#264653',
      },
      {
        name: 'Deployment',
        value: 90,
        fill: '#e9c46a',
      },
    ],
  },
  {
    projectName: 'E-commerce Platform',
    tasks: [
      {
        name: 'Product Listing Setup',
        value: 60,
        fill: '#ef476f',
      },
      {
        name: 'Payment Gateway Integration',
        value: 55,
        fill: '#ffd166',
      },
      {
        name: 'Shopping Cart Feature',
        value: 35,
        fill: '#06d6a0',
      },
      {
        name: 'User Authentication',
        value: 45,
        fill: '#118ab2',
      },
      {
        name: 'Customer Support Setup',
        value: 50,
        fill: '#073b4c',
      },
    ],
  },
  {
    projectName: 'Data Migration Project',
    tasks: [
      {
        name: 'Data Mapping',
        value: 65,
        fill: '#f94144',
      },
      {
        name: 'Data Cleansing',
        value: 45,
        fill: '#f3722c',
      },
      {
        name: 'Database Migration',
        value: 55,
        fill: '#f8961e',
      },
      {
        name: 'Validation and Testing',
        value: 80,
        fill: '#f9c74f',
      },
      {
        name: 'Post-migration Support',
        value: 40,
        fill: '#90be6d',
      },
    ],
  },
  {
    projectName: 'Marketing Campaign Launch',
    tasks: [
      {
        name: 'Audience Research',
        value: 85,
        fill: '#577590',
      },
      {
        name: 'Content Creation',
        value: 75,
        fill: '#4d908e',
      },
      {
        name: 'Ad Campaign Setup',
        value: 65,
        fill: '#43aa8b',
      },
      {
        name: 'Social Media Strategy',
        value: 60,
        fill: '#90be6d',
      },
      {
        name: 'Performance Tracking',
        value: 50,
        fill: '#f9c74f',
      },
    ],
  },
];


const dataLog = [
  {
    name: 'Project 1',
    value: 90,
    fill: '#ffc658'
  },
  {
    name: 'Project 2',
    value: 20,
    fill: '#d0ed57'
  },

  {
    name: 'Project 3',
    value: 33,
    fill: '#a4dr6c'
  },

  {
    name: 'Project 4',
    value: 0,
    fill: '#82ca9d'
  },
  {
    name: 'Project 5',
    value: 69,
    fill: '#8dd1e1'
  },
]

const dataPer = [
  {
    projectName: 'Website Redesign',
    tasks: [
      { month: 'January', tasksCompleted: 10, hoursSpent: 40 },
      { month: 'February', tasksCompleted: 20, hoursSpent: 50 },
      { month: 'March', tasksCompleted: 35, hoursSpent: 60 },
      { month: 'April', tasksCompleted: 50, hoursSpent: 70 },
      { month: 'May', tasksCompleted: 65, hoursSpent: 80 },
      { month: 'June', tasksCompleted: 80, hoursSpent: 100 }
    ]
  },
  {
    projectName: 'Mobile App Development',
    tasks: [
      { month: 'January', tasksCompleted: 5, hoursSpent: 30 },
      { month: 'February', tasksCompleted: 10, hoursSpent: 40 },
      { month: 'March', tasksCompleted: 20, hoursSpent: 50 },
      { month: 'April', tasksCompleted: 30, hoursSpent: 60 },
      { month: 'May', tasksCompleted: 45, hoursSpent: 80 },
      { month: 'June', tasksCompleted: 60, hoursSpent: 90 }
    ]
  },
  {
    projectName: 'E-commerce Platform',
    tasks: [
      { month: 'January', tasksCompleted: 15, hoursSpent: 50 },
      { month: 'February', tasksCompleted: 25, hoursSpent: 60 },
      { month: 'March', tasksCompleted: 40, hoursSpent: 70 },
      { month: 'April', tasksCompleted: 55, hoursSpent: 80 },
      { month: 'May', tasksCompleted: 70, hoursSpent: 90 },
      { month: 'June', tasksCompleted: 85, hoursSpent: 110 }
    ]
  }
];

export { dataPie, dataLog, dataPer }

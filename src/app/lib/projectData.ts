import { ProjectData , Task, Team} from "./definition";
import DP from '@/public/evil-rabbit.png'

const projects: ProjectData[] = [
  {
    projectId: '100',
    projectName: "New Website Redesign",
    status: "Incomplete",
    description: `This project involves a complete redesign of the client's website, focusing on modern aesthetics and enhanced usability.`,
    deadline: "30 September 2024",
    teamMembers: [
      DP,
      DP,
      DP,
      DP,
      DP,
      DP
    ],
    issues: 14,
    assignedToYou: false
  },
  {
    projectId: '101',
    projectName: "Mobile App Development",
    status: "In Progress",
    description: `Develop a cross-platform mobile application that integrates with the client's existing CRM system and provides real-time data synchronization.`,
    deadline: "15 October 2024",
    teamMembers: [
      DP,
      DP,
      DP,
      DP,
      DP
    ],
    issues: 8,
    assignedToYou: false
  },
  {
    projectId: '102',
    projectName: "SEO and Content Strategy",
    status: "Completed",
    description: `Implement a comprehensive SEO strategy and content marketing plan to improve organic traffic and search engine rankings.`,
    deadline: "01 August 2024",
    teamMembers: [
      DP,
      DP,
      DP,
      DP
    ],
    issues: 3,
    assignedToYou: true
  },
  {
    projectId: '103',
    projectName: "E-commerce Platform Upgrade",
    status: "Incomplete",
    description: `Upgrade the existing e-commerce platform to enhance security, add new payment options, and improve the user experience.`,
    deadline: "22 December 2024",
    teamMembers: [
      DP,
      DP,
      DP,
      DP,
      DP,
      DP
    ],
    issues: 20,
    assignedToYou: false
  },
  {
    projectId: '104',
    projectName: "Corporate Branding Refresh",
    status: "In Progress",
    description: `Revamp the company's brand identity, including logo, color scheme, and marketing materials, to align with its new market positioning.`,
    deadline: "05 November 2024",
    teamMembers: [
      DP,
      DP,
      DP,
      DP,
      DP
    ],
    issues: 5,
    assignedToYou: true
  },
  {
    projectId: '105',
    projectName: "Social Media Marketing Campaign",
    status: "In Progress",
    description: "Develop and execute a comprehensive social media marketing campaign to increase brand awareness and engagement.",
    deadline: "25 December 2024",
    teamMembers: [
      DP,
      DP,
      DP,
      DP
    ],
    issues: 7,
    assignedToYou: false
  },
  {
    projectId: '106',
    projectName: "Customer Relationship Management (CRM) Implementation",
    status: "Incomplete",
    description: "Implement a new CRM system to streamline sales, marketing, and customer support processes.",
    deadline: "15 March 2025",
    teamMembers: [
      DP,
      DP,
      DP,
      DP,
      DP
    ],
    issues: 12,
    assignedToYou: true
  },
  {
    projectId: '107',
    projectName: "Data Analytics and Reporting",
    status: "Completed",
    description: "Develop data-driven insights and reports to inform business decisions and identify growth opportunities.",
    deadline: "31 July 2024",
    teamMembers: [
      DP,
      DP,
      DP
    ],
    issues: 2,
    assignedToYou: false
  },
  {
    projectId: '108',
    projectName: "Product Launch Campaign",
    status: "Planning",
    description: "Develop and execute a marketing campaign for the launch of a new product.",
    deadline: "10 February 2025",
    teamMembers: [
      DP,
      DP,
      DP,
      DP,
      DP
    ],
    issues: 0,
    assignedToYou: true
  }
];

const mockTasks: Task[] = [
  {
    taskName: 'Develop Login Module',
    taskId: '#00001',
    createdDate: '2024-09-01',
    createdBy: 'Alice',
    statuses: 'Canceled',
    priority: 'High',
    timer: '01 : 45 : 30',
    userImage: '/images/alice.png',
    hasMessages: true,
  },
  {
    taskName: 'Design Dashboard UI',
    taskId: '#00002',
    createdDate: '2024-09-02',
    createdBy: 'Bob',
    statuses: 'Started',
    priority: 'Medium',
    timer: '02 : 00 : 00',
    userImage: '/images/bob.png',
    hasMessages: false,
  },
  {
    taskName: 'API Integration',
    taskId: '#00003',
    createdDate: '2024-09-03',
    createdBy: 'Charlie',
    statuses: 'Canceled',
    timer: '00 : 20 : 15',
    priority: 'Medium',
    userImage: '/images/charlie.png',
    hasMessages: true,
  },
  {
    taskName: 'Fix Bugs in Auth Service',
    taskId: '#00004',
    createdDate: '2024-09-04',
    createdBy: 'David',
    statuses: 'Started',
    timer: '00 : 15 : 00',
    priority: 'Medium',
    userImage: '/images/david.png',
    hasMessages: true,
  },
  {
    taskName: 'Database Schema Design',
    taskId: '#00005',
    createdDate: '2024-09-05',
    createdBy: 'Eve',
    statuses: 'Canceled',
    timer: '02 : 30 : 00',
    priority: 'Medium',
    userImage: '/images/eve.png',
    hasMessages: false,
  },
  {
    taskName: 'Setup CI/CD Pipeline',
    taskId: '#00006',
    createdDate: '2024-09-06',
    createdBy: 'Frank',
    statuses: 'Started',
    timer: '01 : 00 : 00',
    priority: 'Medium',
    userImage: '/images/frank.png',
    hasMessages: false,
  },
  {
    taskName: 'Write Unit Tests',
    taskId: '#00007',
    createdDate: '2024-09-07',
    createdBy: 'Grace',
    statuses: 'Canceled',
    timer: '03 : 15 : 45',
    priority: 'Medium',
    userImage: '/images/grace.png',
    hasMessages: true,
  },
  {
    taskName: 'Optimize Database Queries',
    taskId: '#00008',
    createdDate: '2024-09-08',
    createdBy: 'Henry',
    statuses: 'Completed',
    timer: '00 : 50 : 30',
    priority: 'Medium',
    userImage: '/images/henry.png',
    hasMessages: true,
  },
  {
    taskName: 'Create Landing Page',
    taskId: '#00009',
    createdDate: '2024-09-09',
    createdBy: 'Ivy',
    statuses: 'Pending',
    timer: '01 : 25 : 00',
    priority: 'Medium',
    userImage: '/images/ivy.png',
    hasMessages: false,
  },
  {
    taskName: 'Deploy Application to Production',
    taskId: '#00010',
    createdDate: '2024-09-10',
    createdBy: 'Jack',
    statuses: 'Pending',
    priority: 'Medium',
    timer: '02 : 40 : 00',
    userImage: '/images/jack.png',
    hasMessages: true,
  },
];


export {projects, mockTasks,};

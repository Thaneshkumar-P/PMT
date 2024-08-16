import { ProjectData , Team} from "./definition";
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


export const TeamData: Team[] = [
  {
    teamId: '101',
    teamName: 'Team 1',
    teamMembers: [
      {
        icon: DP,
        name: 'Member Name'
      },
      {
        icon: DP,
        name: 'Member Name'
      },
      {
        icon: DP,
        name: 'Member Name'
      }
    ]
  },
  {
    teamId: '102',
    teamName: 'Team 2',
    teamMembers: [
      {
        icon: DP,
        name: 'Member Name'
      },
      {
        icon: DP,
        name: 'Member Name'
      }
    ]
  },
]

export {projects};

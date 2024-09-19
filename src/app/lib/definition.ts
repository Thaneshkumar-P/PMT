import { StaticImageData } from "next/image";

export type TaskStruct = {
  name: string;
  value: number;
  fill: string;
};

export type LogStruct = {
  name: string;
  value: number;
  fill: string;
}

export type PerStruct = {
  name: string;
  uv: number;
  pv: number
  amt: number;
}

export interface ProjectData {
  projectId: string;
  projectName: string;
  status: 'Completed' | 'Incomplete' | 'In Progress' | 'Planning';
  description: string;
  deadline: string;
  teamMembers: StaticImageData[];
  issues: number;
  assignedToYou: boolean;
}

export type ProjectField = {
  fieldId: string;
  fieldName: string;
  fieldType: string;
}

export type User = {
  _id?: string;
  fullName: string;
  email: string;
  password: string;
  fatherName: string
  resetToken: string;
  phoneNo: number
  country: string
  state: string
  city: string
  address: string
  pincode: string
  access: 1 | 2 | 3
  role: string
  loggedIn: boolean
  locked: boolean
  teams: []
  projects: []
  additional?: any
}

export type UserRes = Omit<User, User["password"]>

export type Team = {
  _id: string;
  teamName: string;
  users: string[];
  projects: string[]
}

type TaskStatus = 'Pending' | 'Completed' | 'Started' | 'Canceled';

export type Task = {
  taskName: string;
  taskId: string;
  createdDate: string;
  createdBy: string;
  statuses: TaskStatus;
  priority: 'High' | 'Low' | 'Medium'
  timer: string;
  userImage: string;
  hasMessages: boolean;
}



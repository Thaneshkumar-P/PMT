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

export type Team = {
  teamId: string;
  teamName: string;
  teamMembers:  {
    icon: StaticImageData;
    name: string
  }[]
}

export type User = {
  userId: string;
  username: string;
  type: 'User' | 'Admin';
  email: string;
  status: 'Active' | 'In Active';
  role: string
}
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
  month: string,
  tasksCompleted: number
  hoursSpent: number
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

// export type Task = {
//   taskName: string;
//   taskId: string;
//   createdDate: string;
//   createdBy: string;
//   statuses: TaskStatus;
//   priority: 'High' | 'Low' | 'Medium'
//   timer: string;
//   userImage: string;
//   hasMessages: boolean;
// }

export type Project = {
  _id?: string
  name: string;
  type: string;
  startDate: Date;
  endDate: Date;
  description: string;
  status: 'Completed' | 'Drafted' | 'On-Progress' | 'Incomplete'
  priority: string
  team: string
  settings: Settings
  approved: number
  completed: number
  additional?: [] | undefined
}

export type Settings =  {
  assigned: boolean
  mentioned: boolean
  isDue: boolean
  access: {
    user: string,
    type: number
    duration: string
  }[]
}

export type Task = {
  timer: string;
  createdDate: Date;
  _id?: string; 
  taskId: string;
  taskName: string;
  startDate: Date;
  endDate: Date;
  description: string;
  priority: string;
  actualStartDate?: Date;
  actualEndDate?: Date;
  createdBy: string;
  status: string; 
  completionPercentage: number; 
  assignedTo: string
};

export type Phase = {
  _id?: string; 
  phaseName: string;
  startDate: Date;
  endDate: Date;
  description: string;
  priority: string;
  actualStartDate?: Date;
  actualEndDate?: Date;
  completed: number;
  status: string; 
  completionPercentage: number; 
  tasks: Task[];
};



'use client'
import dynamic from "next/dynamic";
import { PieChart, Pie, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from "recharts";

// const PieChart = dynamic(() => import("recharts").then(rechrts => rechrts.PieChart), { ssr: false })
// const Pie = dynamic(() => import("recharts").then(rechrts => rechrts.Pie) as any, { ssr: false })
// const Legend = dynamic(() => import("recharts").then(rechrts => rechrts.Legend) as any, { ssr: false })
// const XAxis = dynamic(() => import("recharts").then(rechrts => rechrts.XAxis) as any, { ssr: false })
// const YAxis = dynamic(() => import("recharts").then(rechrts => rechrts.YAxis) as any, { ssr: false })
// const CartesianGrid = dynamic(() => import("recharts").then(rechrts => rechrts.CartesianGrid) as any, { ssr: false })
// const Tooltip = dynamic(() => import("recharts").then(rechrts => rechrts.Tooltip) as any, { ssr: false })
// const Area = dynamic(() => import("recharts").then(rechrts => rechrts.Area) as any, { ssr: false })
// const Are = dynamic(() => import("recharts").then(rechrts => rechrts.Legend) as any, { ssr: false })


import { TaskStruct, LogStruct, PerStruct } from "@/src/app/lib/definition";
import { Select, SelectContent, SelectGroup, SelectValue, SelectItem, SelectTrigger } from "@/src/components/ui/select";
import React, { useState } from "react";

export function TaskChart({ data }: 
  { data: {
    projectName: string
    tasks: TaskStruct[]
    }[] 
  }) {
    const [project, setProject] = useState<TaskStruct[]>(data[0].tasks)

  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h4 className="font-medium bold text-[20px]">Tasks</h4>
        <div>
          <ChartRange setProject={setProject} items={data}/>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <PieChart width={500} height={250}>
          <Pie data={project} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#8884d8" outerRadius={80} label={item => `${item.value}%`} />
          <Legend layout="vertical" align="right" verticalAlign="middle"/>
        </PieChart>
      </div>
    </div>
  )
}

export function LogChart({ data }: {data: LogStruct[]}) {
  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h4 className="font-medium bold text-[20px]">Logs</h4>
        <div>
          {/* <ChartRange /> */}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <PieChart width={500} height={250}>
          <Pie data={[{value: 100, name: 'empty'}]} dataKey="value" cx="50%" cy="50%" fill="#fff" innerRadius={50} />
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#8884d8" label={item => `${item.value}%`} innerRadius={60} outerRadius={80} />
          <Legend layout="vertical" align="right" verticalAlign="middle"/>
        </PieChart>
      </div>
    </div>
  )
}

export function PerformanceChart({ data }: 
  { data: {
    projectName: string
    tasks: PerStruct[]
    }[] 
  }) {
  const [project, setProject] = useState<PerStruct[]>(data[0].tasks)
  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h4 className="font-medium bold text-[20px]">Performance</h4>
        <div>
          <ChartRange1 items={data} setProject={setProject} />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <AreaChart width={475} height={250} data={project} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}> 
          <defs> 
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1"> 
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/> 
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/> 
          </linearGradient> 
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1"> 
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/> 
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/> 
          </linearGradient> 
          </defs> 
          <XAxis dataKey="month" /> 
          <YAxis /> 
          <CartesianGrid strokeDasharray="3 3" /> 
          <Tooltip /> 
          <Area type="monotone" dataKey="tasksCompleted" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> 
          <Area type="monotone" dataKey="hoursSpent" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> 
        </AreaChart>
      </div>
    </div>
  )
}


function ChartRange({ items, setProject }: { items: { projectName: string; tasks: TaskStruct[] }[], setProject: React.Dispatch<React.SetStateAction<TaskStruct[]>> }) {
  return (
    <Select onValueChange={(projectName) => {
      const selectedProject = items.find(item => item.projectName === projectName);
      if (selectedProject) {
        setProject(selectedProject.tasks);
      }
    }}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={items[0].projectName} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map(item => (
            <SelectItem
              value={item.projectName}
              key={item.projectName}
            >
              {item.projectName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}


function ChartRange1({ items, setProject }: { items:  { projectName: string; tasks: PerStruct[] }[], setProject: React.Dispatch<React.SetStateAction<PerStruct[]>> }) {
  return (
    <Select onValueChange={(projectName) => {
      const selectedProject = items.find(item => item.projectName === projectName);
      if (selectedProject) {
        setProject(selectedProject.tasks);
      }
    }}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={items[0].projectName} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {items.map(item => (
            <SelectItem
              value={item.projectName}
              key={item.projectName}
            >
              {item.projectName}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

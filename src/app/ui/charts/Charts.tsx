'use client'

import { PieChart, Pie, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from "recharts";
import { TaskStruct, LogStruct, PerStruct } from "@/src/app/lib/definition";
import { Select, SelectContent, SelectGroup, SelectValue, SelectItem, SelectTrigger } from "@/src/components/ui/select";

export function TaskChart({ data }: {data: TaskStruct[]}) {
  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h4 className="font-medium bold text-[20px]">Tasks</h4>
        <div>
          <ChartRange />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <PieChart width={500} height={250}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" fill="#8884d8" outerRadius={80} label={item => `${item.value}%`} />
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
          <ChartRange />
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

export function PerformanceChart({ data }: { data: PerStruct[]}) {
  return (
    <div>
      <div className="flex flex-row justify-between mb-4">
        <h4 className="font-medium bold text-[20px]">Performance</h4>
        <div>
          <ChartRange />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <AreaChart width={475} height={250} data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}> 
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
          <XAxis dataKey="name" /> 
          <YAxis /> 
          <CartesianGrid strokeDasharray="3 3" /> 
          <Tooltip /> 
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" /> 
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" /> 
        </AreaChart>
      </div>
    </div>
  )
}


function ChartRange() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] bg-green-100">
        <SelectValue placeholder="Choose Range" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="This Week">This week</SelectItem>
          <SelectItem value="Last Week">Last week</SelectItem>
          <SelectItem value="This Month">This month</SelectItem>
          <SelectItem value="This Year">This year</SelectItem>
          <SelectItem value="All time">All time</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

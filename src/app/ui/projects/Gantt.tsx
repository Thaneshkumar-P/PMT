'use client'

import { FC } from "react";
import { motion } from "framer-motion";
import { differenceInCalendarDays, format } from "date-fns";

interface Phases {
  name: string;
  status: string;
  startDate: Date;
  endDate: Date;
}

interface GanttChartProps {
  phases: Phases[];
  projectStartDate: Date;
  projectEndDate: Date;
}

const GanttChart: FC<GanttChartProps> = ({ phases, projectStartDate, projectEndDate }) => {
  const totalDays = differenceInCalendarDays(projectEndDate, projectStartDate);

  const calculateLeft = (startDate: Date) => {
    const daysFromStart = differenceInCalendarDays(startDate, projectStartDate);
    return (daysFromStart / totalDays) * 100;
  };

  const calculateDuration = (startDate: Date, endDate: Date) => {
    const taskDuration = differenceInCalendarDays(endDate, startDate);
    return (taskDuration / totalDays) * 100;
  };

  return (
    <div className="p-4">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">
          <h4 className="font-medium text-lg">Task Name</h4>
        </div>
        <div className="col-span-9">
          <h4 className="font-medium text-lg">Timeline</h4>
        </div>
      </div>

      {phases.map((task, index) => (
        <div key={index} className="grid grid-cols-12 gap-4 mt-4 items-center">
          {/* Task name */}
          <div className="col-span-3">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="font-medium text-md"
            >
              {task.name}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="font-light text-sm text-gray-500"
            >
              {task.status}
            </motion.div>
            <div className="text-xs text-gray-400">
              {format(task.startDate, 'PPPP')} - {format(task.endDate, 'PPPP')}
            </div>
          </div>

          {/* Gantt Bar (Task Duration) */}
          <div className="col-span-9 relative">
            <motion.div
              className="relative left-0 h-10 bg-blue-500 rounded"
              style={{
                width: `${calculateDuration(task.startDate, task.endDate)}%`,
                left: `${calculateLeft(task.startDate)}%`,
              }}
              whileHover={{ scale: 1.05 }}
              initial={{ width: 0 }}
              animate={{ width: `${calculateDuration(task.startDate, task.endDate)}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default GanttChart;

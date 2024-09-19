'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import '@/src/app/slider.css';
import { ChevronDown, ChevronUp, Lightbulb, MessageSquare, Timer } from 'lucide-react';
import { mockTasks } from '@/src/app/lib/projectData';
import Image from 'next/image';
import DP from '@/public/evil-rabbit.png';

export default function TaskSlider() {

  const filteredTasks = mockTasks.filter((task) => task.statuses === 'Pending' || task.statuses === 'Started');

  return (
    <>
      <div className="relative h-[250px]"> {/* Set a fixed height for the Swiper container */}
        <Swiper
          direction={'vertical'}
          // navigation={{
          //   nextEl: '.custom-next-task',
          //   prevEl: '.custom-prev-task',
          // }}
          spaceBetween={15}
          slidesPerView={3}
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
          }}
          className="h-full"  
        >
          {filteredTasks.map((task) => (
            <SwiperSlide key={task.taskId} className="flex items-center h-full"> {/* Ensure each slide takes full height */}
              <div className="flex flex-row gap-3 items-center custom-box-shadow py-3 rounded-2xl px-4 w-full">
                <Lightbulb />
                <div className="flex flex-col">
                  <h4 className="font-medium text-md">{task.taskName}</h4>
                  <h4 className="font-medium text-sm text-gray-500 flex gap-3 flex-row">
                    {task.taskId} {task.createdDate}
                    <span className="text-md text-black">{' '}{task.createdBy}{' '}</span>
                    {task.statuses.includes('Canceled') ? (
                      <span className="text-md text-black p-0.5 bg-[#ff050578] rounded-md pl-2 pe-2">Canceled</span>
                    ) :
                      !task.statuses.includes('Completed') &&
                        <span className="text-md text-black p-0.5 bg-green-100 rounded-md pl-2 pe-2">{task.statuses}</span>
                      
                    }
                    <span className="text-md text-black p-0.5 bg-green-100 rounded-md pl-2 pe-2">{task.priority}</span>
                  </h4>
                </div>
                <div className="ml-auto">
                  <div className="flex flex-row gap-10 items-center">
                    <div className="flex flex-row gap-2 items-center bg-green-100 rounded-md p-2">
                      <Timer />
                      <h4 className="font-medium text-sm text-gray-500">{task.timer}</h4>
                    </div>
                    <div className="verflow-clip ml-[-8px] clip-box border-[2px] border-white rounded-full">
                      <Image src={DP} alt="DP" width={30} className="rounded-full" />
                    </div>
                    <div className="verflow-clip ml-[-8px] clip-box border-[2px] border-white rounded-full">
                      <MessageSquare />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* <button className="custom-prev-task z-50 absolute top-0 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <ChevronUp color="black" />
          </button>
          <button className="custom-next-task absolute top-0 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
            <ChevronDown color="black" />
          </button> */}
        </Swiper>
      </div>
    </>
  );
}

'use client';

import { projects } from "@/src/app/lib/projectData"
import { ProjectData } from "@/src/app/lib/definition"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Mousewheel, Autoplay, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Card from './Card';
import '@/src/app/slider.css';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Slider() {
  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation, A11y, Mousewheel, Autoplay]}
        autoplay={{
          delay: 2500
        }}
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        spaceBetween={50}
        slidesPerView={1}
      >
        {projects.map(project => (
          <SwiperSlide className='p-2 h-full' key={project.projectId}> {/* Ensure each slide can grow */}
            <Card project={project} />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="custom-prev absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <ChevronLeft color='black' />
      </button>
      <button className="custom-next absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        <ChevronRight color='black' />
      </button>
    </div>
  );
}

'use client';

import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const HomeSection = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12">
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h4 className="text-4xl font-bold">AI-Powered Notes. <br />
        Organize and <br /> Summarize in Seconds</h4>
        <p className="text-gray-400 mt-4">
        Let AI organize & summarize your notes, <br /> 
saving you time and boosting productivity
        </p>
        <button 
          className="text-gray-700 px-6 py-4 mt-4 mx-auto md:mx-0 flex items-center rounded-2xl bg-[#44E5E7] hover:shadow-[0_0_20px_5px_rgba(68,229,231,0.8)] transition-all duration-300"
        >
          Get started <FiArrowRight size={14} className='ml-2' />
        </button>
        <div className="mt-6">
          <Image
            src="/social proof.png"
            alt="Small AI Preview"
            width={1240}
            height={100}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Right Images Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-end relative mt-8 md:mt-0">
        <Image
          src="/Right Column.png"
          alt="AI Notes Preview"
          width={529}
          height={480}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default HomeSection;





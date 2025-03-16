


'use client';

import Image from 'next/image';

const FeaturesSection = () => {
  return (
    <section className="px-6 md:px-16 py-12 flex flex-col items-center gap-12">
      
      {/* Centered Header */}
      <h2 className="text-4xl font-bold text-center">
        All The Tools You Need to <br /><span className='text-[#44E5E7]'> Supercharge</span> Your Note Taking

      </h2>

      {/* Smart Organization - Text & Image */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-semibold mb-4">Smart Organization</h3>
          <p className="text-gray-400 mt-2">
            Automatically categorize and tag your notes using <br /> AI-driven analysis. 
            NoteFlow intelligently identifies <br /> key topics and organizes your content, 
            making it <br /> easy to find and retrieve your notes when you need <br />
             them most.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/smart organization.png"
            alt="Smart Organization"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Contextual Reminders - Text & Image */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/contextual reminders.png"
            alt="Contextual Reminders"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h3 className="text-3xl font-semibold">Contextual Reminders</h3>
          <p className="text-gray-400 mt-2">
            Stay on top of important tasks with AI-powered <br /> reminders that adapt to 
            the context of your notes. <br /> NoteFlow recognizes deadlines, follow-ups, 
            and key  <br />actions from your notes and sends timely alerts to <br /> ensure 
            nothing slips through the cracks.
          </p>
        </div>
      </div>

    </section>
  );
};

export default FeaturesSection;


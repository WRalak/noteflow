"use client";

import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

// Testimonial Data
const testimonials = [
  {
    name: "Sarah Johnson",
    department: "Product Manager",
    image: "/test1.png",
    review:
      "NoteFlow has completely transformed the way I manage my work notes. The AI-powered organization feature makes it so easy to find what I need, even weeks after the fact.",
  },
  {
    name: "James Smith",
    department: "Software Engineer",
    image: "/test2.png",
    review:
      "As a designer, I need a tool that helps me keep track of brainstorming sessions and project notes. NoteFlow’s voice-to-text transcription is a game-changer, allowing me to capture ideas while on the go. It has boosted my productivity tenfold!",
  },
  {
    name: "Emily Davis",
    department: "Marketing Specialist",
    image: "/test3.png",
    review:
      "I love how NoteFlow integrates with tools like Google Drive and Slack. It makes collaboration with my team so much smoother. The contextual reminders have helped me stay on top of critical deadlines.",
  },
  {
    name: "Michael Brown",
    department: "Data Analyst",
    image: "/test4.png",
    review:
      "The smart organization of my notes is impressive. I used to waste time searching for information, but now NoteFlow does the heavy lifting.",
  },
  {
    name: "Sophia Wilson",
    department: "UX Designer",
    image: "/test5.png",
    review:
      "NoteFlow has made managing multiple projects so much easier. I can quickly access and organize my notes, and the contextual reminders keep me on track. It’s the best tool I’ve found for staying organized.",
  },
  {
    name: "Daniel Lee",
    department: "Project Coordinator",
    image: "/test5.png",
    review:
      "As a startup founder, my days are packed with meetings and ideas. NoteFlow’s voice-to-text feature lets me capture thoughts while I’m on the move. ",
  },
  {
    name: "Olivia Martin",
    department: "HR Manager",
    image: "/test6.png",
    review:
      "The AI-generated summaries help me recall meeting notes effortlessly. A must-have tool!",
  },
  {
    name: "Ethan White",
    department: "Business Analyst",
    image: "/test1.png",
    review:
      "The best AI-driven note-taking app I’ve ever used! Makes knowledge management seamless.",
  },
  {
    name: "Liam Harris",
    department: "Sales Executive",
    image: "/test2.png",
    review:
      "NoteFlow’s AI search is so accurate that I can find notes within seconds!",
  },
  {
    name: "Ava Thomas",
    department: "Graphic Designer",
    image: "/test3.png",
    review:
      "Keeping track of my creative ideas has never been easier. Highly recommend!",
  },
  {
    name: "Mason Scott",
    department: "Financial Consultant",
    image: "/test4.png",
    review:
      "The organization and search capabilities of NoteFlow make my job 10x easier!",
  },
  {
    name: "Isabella Martinez",
    department: "Operations Manager",
    image: "/test3.png",
    review:
      "A true productivity booster! I can’t imagine my workflow without NoteFlow anymore.",
  },
];

const TestimonialSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedTestimonials = showAll ? testimonials : testimonials.slice(0, 6);
  const [maxHeight, setMaxHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const heights = Array.from(document.querySelectorAll(".testimonial-card")).map(
        (el) => el.clientHeight
      );
      setMaxHeight(Math.max(...heights));
    }, 500);
  }, [showAll]);

  return (
    <section className="py-16 flex flex-col items-center">
      {/* Header Section */}
      <button className="px-7 py-2 bg-[#44E5E7] text-sm text-gray-800 rounded-2xl ">
        Testimonials
      </button>

      <h2 className="text-5xl font-bold text-center mt-4 text-white">
        What our AI-powered  <br />notetakers have to say
      </h2>

      <p className="text-gray-400 text-[16px] leading-[40px] tracking-[0%] font-light  text-center max-w-2xl mt-8">
  NoteFlow has helped 1000’s supercharge their productivity <br /> with cutting-edge AI note-taking tools.
</p>


      {/* Testimonial Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4 lg:px-0">
        {displayedTestimonials.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-card bg-[#0E2E2E] text-white p-8 rounded-lg flex flex-col shadow-md w-full"
            style={{ minHeight: maxHeight || "auto" }}
          >
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-[#44E5E7]" />
              ))}
            </div>

            <p className="text-gray-200 text-[18px] leading-[36px] tracking-[0%] font-light font-poppins flex-grow">
  {testimonial.review}
</p>


            <div className="flex items-center mt-6">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full object-cover mr-4"
              />
              <div>
                <p className="text-lg text-[#44E5E7] font-semibold">{testimonial.name}</p>
                <p className="text-gray-400">{testimonial.department}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="mt-6 px-6 py-2 bg-transparent text-white rounded-2xl border-[0.5px] text-sm"
      >
        {showAll ? "Show Less" : "Show More"}
      </button>
    </section>
  );
};

export default TestimonialSection;

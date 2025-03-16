


'use client';

import { JSX, use, useState } from 'react';
import { FaChevronDown, FaChevronUp, FaRegStickyNote, FaUsers, FaDollarSign, FaPlug, FaShieldAlt } from 'react-icons/fa';

type FaqCategory = 'General' | 'Features' | 'Pricing' | 'Integrations';

interface FaqItem {
  icon: JSX.Element;
  question: string;
  answer: string;
}

const faqData: Record<FaqCategory, FaqItem[]> = {
  General: [
    { icon: <FaRegStickyNote className="text-gray-500 text-xl" />, question: 'What is NoteFlow?', answer: 'NoteFlow is an AI-powered note-taking app designed to help you organize and retrieve notes efficiently.' },
    { icon: <FaUsers className="text-gray-500 text-xl" />, question: 'Can I use NoteFlow offline?', answer: 'Yes! NoteFlow supports offline mode, so you can access your notes anytime.' },
    { icon: <FaShieldAlt className="text-gray-500 text-xl" />, question: 'Is my data secure on NoteFlow?', answer: 'Absolutely! We use end-to-end encryption to keep your notes safe.' },
    { icon: <FaRegStickyNote className="text-gray-500 text-xl" />, question: 'Can I export my notes?', answer: 'Yes! You can export your notes as PDF or text files.' },
    { icon: <FaUsers className="text-gray-500 text-xl" />, question: 'Does NoteFlow have a mobile app?', answer: 'Yes, NoteFlow is available on iOS and Android.' },
  ],
  Features: [
    { icon: <FaUsers className="text-gray-500 text-xl" />, question: 'Does NoteFlow support collaboration?', answer: 'Yes! You can share notes with others and collaborate in real-time.' },
    { icon: <FaRegStickyNote className="text-gray-500 text-xl" />, question: 'Can I organize notes into folders?', answer: 'Yes! You can create folders and categorize your notes efficiently.' },
    { icon: <FaShieldAlt className="text-gray-500 text-xl" />, question: 'Does NoteFlow have a search feature?', answer: 'Yes! You can search your notes using keywords and filters.' },
    { icon: <FaUsers className="text-gray-500 text-xl" />, question: 'Can I add images and videos to my notes?', answer: 'Yes! NoteFlow supports multimedia attachments like images and videos.' },
    { icon: <FaRegStickyNote className="text-gray-500 text-xl" />, question: 'Does NoteFlow support voice notes?', answer: 'Yes! You can record and attach voice notes to your entries.' },
  ],
  Pricing: [
    { icon: <FaDollarSign className="text-gray-500 text-xl" />, question: 'Is NoteFlow free to use?', answer: 'NoteFlow has a free plan with premium options available for advanced features.' },
    { icon: <FaShieldAlt className="text-gray-500 text-xl" />, question: 'What are the premium features?', answer: 'Premium features include AI-powered tagging, cloud storage, and advanced search.' },
    { icon: <FaDollarSign className="text-gray-500 text-xl" />, question: 'Is there a lifetime plan?', answer: 'Currently, NoteFlow offers monthly and annual subscriptions.' },
    { icon: <FaShieldAlt className="text-gray-500 text-xl" />, question: 'Can I cancel my subscription anytime?', answer: 'Yes! You can cancel your subscription anytime from your account settings.' },
    { icon: <FaDollarSign className="text-gray-500 text-xl" />, question: 'Do you offer discounts for students?', answer: 'Yes! Students can get discounts on NoteFlow premium plans.' },
  ],
  Integrations: [
    { icon: <FaPlug className="text-gray-500 text-xl" />, question: 'Can I integrate NoteFlow with other apps?', answer: 'Yes, NoteFlow integrates with apps like Google Drive, Slack, and Notion.' },
    { icon: <FaRegStickyNote className="text-gray-500 text-xl" />, question: 'Does NoteFlow support Zapier?', answer: 'Yes! You can automate workflows using Zapier integrations.' },
    { icon: <FaShieldAlt className="text-gray-500 text-xl" />, question: 'Can I sync NoteFlow with my calendar?', answer: 'Yes! You can sync with Google Calendar and Outlook for reminders.' },
  { icon: <FaRegStickyNote className="text-gray-500 text-xl" />, question: 'Does NoteFlow support API access?', answer: 'Yes! Developers can use the NoteFlow API for custom integrations.' },
  ],
};

const categories: FaqCategory[] = ['General', 'Features', 'Pricing', 'Integrations'];

const FAQSection = () => {
  const [activeCategory, setActiveCategory] = useState<FaqCategory>('General');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 md:px-16 py-12 flex flex-col items-center">
      
      {/* Header */}
      <h1 className="text-4xl font-bold text-center">Frequently Asked Questions</h1>
      <p className="text-gray-400 text-sm mt-2 text-center max-w-2xl">
        The most commonly asked questions about NoteFlow.<br />
        Have any other questions? Chat with our expert tech team 
      </p>

      {/* Category Buttons */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-6 py-3 border-[0.5px] rounded-3xl font-semibold text-xs transition-colors ${
              activeCategory === category ? 'bg-[#44E5E7] text-gray-600' : 'bg-transparent text-white'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="mt-8 w-full max-w-2xl">
        {faqData[activeCategory].map((faq, index) => (
          <div key={index} className="border-b py-4 flex items-center">
            {/* Icon on Left */}
            <div className="mr-4">{faq.icon}</div>

            {/* Question & Toggle Button */}
            <div className="flex-1">
              <button
                className="w-full flex justify-between items-center text-left font-semibold text-sm"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                {openIndex === index ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>

              {/* Answer Section */}
              {openIndex === index && (
                <p className="mt-2 text-xs text-gray-400">{faq.answer}</p>
              )}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQSection;

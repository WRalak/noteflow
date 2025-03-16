

'use client';

import Image from 'next/image';

const PartnersSection = () => {
  return (
    <section className=" py-12  md:px-16 flex flex-col items-center">
      {/* Header */}
      <h2 className="text-white text-center text-xs  md:text-xs  mb-16">
        Organizations powered by   <span className='font-bold'>NoteFlow</span>
      </h2>

      {/* Logos Grid */}
      <div className="grid grid-cols-2  md:grid-cols-4 gap-6 w-full max-w-4xl">
        <Image src="/Netflix.png" alt="Logo 1" width={100} height={50} className="mx-auto" />
        <Image src="/Exxon Mobile.png" alt="Logo 2" width={100} height={50} className="mx-auto" />
        <Image src="/Microsoft.png" alt="Logo 3" width={100} height={50} className="mx-auto" />
        <Image src="/vice.png" alt="Logo 4" width={100} height={50} className="mx-auto" />
        <Image src="/walmart.png" alt="Logo 5" width={100} height={50} className="mx-auto" />
        <Image src="/chase.png" alt="Logo 6" width={100} height={50} className="mx-auto" />
        <Image src="/visa.png" alt="Logo 7" width={100} height={50} className="mx-auto" />
        <Image src="/Amazon.png" alt="Logo 8" width={100} height={50} className="mx-auto" />
      </div>
    </section>
  );
};

export default PartnersSection;

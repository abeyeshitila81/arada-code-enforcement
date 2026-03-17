import React from 'react';

const Hero = () => {
  return (
    <section className="text-center max-w-[800px] mx-auto mb-16 px-4">
      <h2 className="text-2xl md:text-3xl text-primary font-bold pb-2 border-b-2 border-gray-200 inline-block mb-6">
        💐እንኳን ደህና መጣችሁ አራዳ ክፍለ ከተማ አስተዳደር ደንብ ማስከበር ጽ/ቤት
      </h2>
      <h1 className="text-4xl font-bold text-primary mb-2">Welcome to Arada Sub-City Code Enforcement Office</h1>
      <div className="section-divider"></div>
      <p className="text-textLight mb-4">
        We are dedicated to maintaining the health, safety, and cleanliness of our community by enforcing local codes and regulations. Together, we can build a better environment for everyone.
      </p>
    </section>
  );
};

export default Hero;

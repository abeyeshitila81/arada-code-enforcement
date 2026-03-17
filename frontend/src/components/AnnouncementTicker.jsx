import React from 'react';

const AnnouncementTicker = () => {
  return (
    <div className="bg-primary text-white py-2 overflow-hidden whitespace-nowrap border-b border-white/10 relative z-[60]">
      <div className="inline-block animate-marquee hover:pause-animation">
        <span className="mx-8 font-medium">
          Ensuring Safe and Clean Communities. We are dedicated to maintaining the health, safety, and cleanliness of our community by enforcing local codes.
        </span>
        <span className="mx-8 font-medium">
          Ensuring Safe and Clean Communities. We are dedicated to maintaining the health, safety, and cleanliness of our community by enforcing local codes.
        </span>
        <span className="mx-8 font-medium">
          Ensuring Safe and Clean Communities. We are dedicated to maintaining the health, safety, and cleanliness of our community by enforcing local codes.
        </span>
      </div>
    </div>
  );
};

export default AnnouncementTicker;

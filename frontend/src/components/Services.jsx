import React from 'react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: '🏗️',
    title: 'Illegal Construction Monitoring',
    titleAm: 'ህገ ወጥ ግንባታ ቁጥጥር',
    description:
      'We inspect and take action on unauthorized construction activities, ensuring all buildings comply with Addis Ababa city regulations and permit requirements.',
    color: 'blue',
  },
  {
    icon: '🌍',
    title: 'Illegal Land Occupation',
    titleAm: 'ህገ ወጥ መሬት ወረራ ቁጥጥር',
    description:
      'Investigating and resolving cases of unauthorized land seizure and expansion to protect the rights of rightful landowners and communities.',
    color: 'green',
  },
  {
    icon: '🗑️',
    title: 'Waste & Sanitation Enforcement',
    titleAm: 'ቆሻሻ እና ንፅህና ደንብ ማስከበር',
    description:
      'Enforcing proper waste disposal regulations, combating illegal dumping of solid and liquid waste, and keeping public spaces clean for all residents.',
    color: 'yellow',
  },
  {
    icon: '🛣️',
    title: 'Road & Public Space Use',
    titleAm: 'የመንገድ እና የህዝብ ቦታ አጠቃቀም',
    description:
      'Regulating the proper use of roads, sidewalks, and public areas to ensure smooth traffic flow and safe pedestrian access.',
    color: 'purple',
  },
  {
    icon: '📢',
    title: 'Illegal Advertisement Control',
    titleAm: 'ህገ ወጥ ማስታወቂያ ቁጥጥር',
    description:
      'Removing unauthorized billboards, banners, and signage that violate city advertising standards and detract from the urban environment.',
    color: 'red',
  },
  {
    icon: '🐄',
    title: 'Animal Slaughter Regulation',
    titleAm: 'ህገ ወጥ የእንስሳት እርድ ቁጥጥር',
    description:
      'Monitoring and enforcing regulations on animal slaughtering to ensure public health standards and prevent unauthorized slaughter in residential areas.',
    color: 'orange',
  },
  {
    icon: '🏪',
    title: 'Street Trade Enforcement',
    titleAm: 'ህገ ወጥ ጎዳና ንግድ ቁጥጥር',
    description:
      'Managing unauthorized street vending and trade activities to ensure orderly commerce while supporting legitimate vendors in designated zones.',
    color: 'teal',
  },
  {
    icon: '⚖️',
    title: 'Penalty & Fine Collection',
    titleAm: 'ቅጣት እና ቅጣት ገቢ አሰባሰብ',
    description:
      'Issuing and collecting fines for code violations in accordance with city regulations, ensuring fairness, transparency, and accountability in enforcement.',
    color: 'indigo',
  },
];

const colorMap = {
  blue:   { bg: 'bg-blue-50',   icon: 'bg-blue-100',   border: 'border-blue-200',   accent: 'bg-blue-500' },
  green:  { bg: 'bg-green-50',  icon: 'bg-green-100',  border: 'border-green-200',  accent: 'bg-green-500' },
  yellow: { bg: 'bg-yellow-50', icon: 'bg-yellow-100', border: 'border-yellow-200', accent: 'bg-yellow-500' },
  purple: { bg: 'bg-purple-50', icon: 'bg-purple-100', border: 'border-purple-200', accent: 'bg-purple-500' },
  red:    { bg: 'bg-red-50',    icon: 'bg-red-100',    border: 'border-red-200',    accent: 'bg-red-500' },
  orange: { bg: 'bg-orange-50', icon: 'bg-orange-100', border: 'border-orange-200', accent: 'bg-orange-500' },
  teal:   { bg: 'bg-teal-50',   icon: 'bg-teal-100',   border: 'border-teal-200',   accent: 'bg-teal-500' },
  indigo: { bg: 'bg-indigo-50', icon: 'bg-indigo-100', border: 'border-indigo-200', accent: 'bg-indigo-500' },
};

const Services = () => {
  return (
    <main className="flex-grow bg-bgLight">
      {/* Hero Banner */}
      <div className="bg-primary text-white py-20 pt-36 text-center px-5">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
        <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          Arada Sub-City Code Enforcement provides a wide range of services to maintain order,
          safety, and compliance across our community.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            return (
              <div
                key={index}
                className={`${colors.bg} border ${colors.border} rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}
              >
                <div className={`${colors.icon} w-14 h-14 rounded-xl flex items-center justify-center text-2xl shadow-sm`}>
                  {service.icon}
                </div>
                <div>
                  <h3 className="font-bold text-textDark text-lg leading-snug">{service.title}</h3>
                  <p className="text-xs text-textLight font-medium mt-0.5">{service.titleAm}</p>
                </div>
                <p className="text-sm text-textLight leading-relaxed flex-grow">{service.description}</p>
                <div className={`h-1 w-12 ${colors.accent} rounded-full mt-auto group-hover:w-full transition-all duration-500`}></div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 bg-white rounded-2xl border border-gray-100 shadow-sm p-10 text-center">
          <h2 className="text-2xl font-bold text-textDark mb-3">Witnessed a Violation?</h2>
          <p className="text-textLight mb-6 max-w-lg mx-auto">
            Report it to us directly using our online finance report form. We act swiftly to investigate and resolve all reported violations.
          </p>
          <Link
            to="/report"
            className="inline-block bg-accent hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
          >
            Report a Violation
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Services;

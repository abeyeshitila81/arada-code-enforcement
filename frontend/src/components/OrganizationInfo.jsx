import React from 'react';

const OrganizationInfo = () => {
  return (
    <section className="py-12 mb-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-primary inline-block pb-3 border-b-2 border-primary/20">
          Our Organization
        </h2>
        <p className="text-textLight mt-4 max-w-2xl mx-auto">
          የአዲስ አበባ ከተማ አስተዳደር ደንብ ማስከበር ባለስልጣን
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Vision Component */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -z-10 group-hover:bg-blue-100 transition-colors"></div>
          <div className="text-4xl mb-4">👁️</div>
          <h3 className="text-xl font-bold text-textDark mb-3">Vision (ራዕይ)</h3>
          <p className="text-textLight leading-relaxed">
            በ2022 ዓ.ም በአዲስ አበባ ከተማ የደንብ መተላለፍ የቀነሰባት ለነዋሪዎቿ ምቹ እንዲሁም ለአፍሪካ ከተሞች ተምሳሌት ሆና ማየት፡
          </p>
        </div>

        {/* Mission Component */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-green-50 rounded-bl-full -z-10 group-hover:bg-green-100 transition-colors"></div>
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold text-textDark mb-3">Mission (ተልዕኮ)</h3>
          <p className="text-textLight leading-relaxed">
            በህብረተሰቡ ሁሉን አቀፍ ተሳትፎ የደንብ መተላለፎችንና ተያያዥ ህገ-ወጥ ተግባራትን በመከላከል፣ በመቆጣጠር እና እርምጃ በመውሰድ አዲስ አበባ ከተማን ለነዋሪዎቿ ምቹ፤ ማራኪና ሰላማዊ እንድትሆን ማድረግ፡፡
          </p>
        </div>

        {/* Values Component */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50 rounded-bl-full -z-10 group-hover:bg-purple-100 transition-colors"></div>
          <div className="text-4xl mb-4">⭐</div>
          <h3 className="text-xl font-bold text-textDark mb-3">Values (እሴቶች)</h3>
          <ul className="text-textLight leading-relaxed space-y-2">
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> ለህግ የበላይነት በጽናት መታገል</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> ተጠያቂነት እና ታማኝነት</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> አሳታፊነት ከራስ በላይ የህዝብ ጥቅም ማስቀደም</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> አገልጋይነት</li>
            <li className="flex items-start gap-2"><span className="text-primary mt-1">•</span> ለጋራ ዓላማ መቆም</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OrganizationInfo;

import React from 'react';

const ReportForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your report. We will investigate shortly.');
  };

  return (
    <section id="report" className="bg-white p-12 rounded-md shadow-sm max-w-[800px] mx-auto mb-16">
      <h2 className="text-2xl font-bold text-center text-primary border-b-2 border-gray-200 inline-block pb-2 mb-4 mx-auto block w-fit">
        Finance Report form (የፋይናንስ ሪፖርት መላኪያ ቅፅ)
      </h2>
      <p className="text-center text-textLight mb-8">
        Please fill out the form below to report a code violation. Your report helps us act quickly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-group">
          <label htmlFor="name" className="block font-semibold mb-2 text-textDark">👤ስም:(Optional)</label>
          <input type="text" id="name" placeholder="Alemu" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans" />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="block font-semibold mb-2 text-textDark">📱Your Phone(ስልክ ቁጥር) </label>
          <input type="tel" id="phone" placeholder="+251" className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans" />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="block font-semibold mb-2 text-textDark">Location of Violation</label>
          <input type="text" id="location" placeholder="4kilo, near the Abro Library" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans" />
        </div>
        <div className="form-group">
          <label htmlFor="violationType" className="block font-semibold mb-2 text-textDark">የደንብ ጥሰት አይነት</label>
          <select id="violationType" name="violationType" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans bg-white">
            <option value="">-- የደንብ ጥሰት አይነት-- </option>
            <option value="zoning1">በህገ ወጥ መሬት ወረራ </option>
            <option value="zoning2">በህገ ወጥ መሬት ማስፋፋት </option>
            <option value="illegal-dumping">በህገ ወጥ ግንባታ</option>
            <option value="unsafe-building">በህገ ወጥ ደረቅና ፋሳሽ ቆሻሻ</option>
            <option value="noise">በህገ ወጥ መንግድ አጠቃቀም </option>
            <option value="sanitation1">በህገ ወጥ ማስታወቃያ </option>
            <option value="zoning3">በህገ ወጥ ጎዳና ንግድ </option>
            <option value="zoning4">በህገ ወጥ የእንስሳት እርድ</option>
            <option value="sanitation2">በህገ ወጥ አዋኪ ድርጊት </option>
            <option value="zoning5">በደንብ 180 </option>
            <option value="dash"> - </option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="wereda" className="block font-semibold mb-2 text-textDark">Select ( ወረዳ )</label>
          <select id="wereda" name="wereda" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans bg-white">
            <option value="">ወረዳ-- </option>
            <option value="1">ወረዳ 01</option>
            <option value="2">ወረዳ 02</option>
            <option value="4">ወረዳ 04</option>
            <option value="5">ወረዳ 05</option>
            <option value="6">ወረዳ 06</option>
            <option value="7">ወረዳ 07</option>
            <option value="8">ወረዳ 08</option>
            <option value="9">ወረዳ 09</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="block" className="block font-semibold mb-2 text-textDark">Block (ቀጣና)</label>
          <select id="block" name="block" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans bg-white">
            <option value="">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="13">13</option>
            <option value="14">14 </option>
            <option value="dash">- </option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="amount" className="block font-semibold mb-2 text-textDark">the amount of cash (በገዘብ የተቀጣ ብር መጠን)</label>
          <select id="amount" name="amount" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans bg-white">
            <option value="">100ብር </option>
            <option value="500">500ብር </option>
            <option value="1000">1000ብር </option>
            <option value="2000">2000ብር </option>
            <option value="3000">3000ብር </option>
            <option value="5000">5000ብር </option>
            <option value="10000">10,000ብር </option>
            <option value="20000">20,000ብር </option>
            <option value="50000">50,000ብር </option>
            <option value="100000">100,000ብር </option>
            <option value="200000">200,000ብር </option>
            <option value="300000">300,000ብር</option>
            <option value="400000">400,000ብር </option>
            <option value="1000000">1,000,000ብር </option>
            <option value="dash">-</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dailyStatus" className="block font-semibold mb-2 text-textDark">በየቀኑ ቅጣትም ሆነ ስል ገቢ ሁኔታ በተመላከተ</label>
          <select id="dailyStatus" name="dailyStatus" required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans bg-white">
            <option value="1">yes(አለ)</option>
            <option value="2">በዛሬው ዕለት የተቀጣ ቅጣት የለም</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="block font-semibold mb-2 text-textDark">Description of Issue (ተጨማር አስተያየት ከአለ)</label>
          <textarea id="description" placeholder="Describe the violation in detail..." required className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all font-sans min-h-[120px] resize-y"></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="btn min-w-[200px]">Submit Report</button>
        </div>
      </form>
    </section>
  );
};

export default ReportForm;

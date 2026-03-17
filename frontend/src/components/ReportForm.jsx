import React, { useState } from 'react';

const ReportForm = () => {
  const [formData, setFormData] = useState({
    reporterName: '',
    violationWereda: '',
    violationType: '',
    violationRule: '',
    penaltyAmount: '',
    dailyStatus: '',
    violationDescription: '',
  });

  const [submittedReports, setSubmittedReports] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReport = {
      ...formData,
      id: Date.now(),
      timestamp: new Date().toLocaleString(),
    };
    setSubmittedReports((prev) => [newReport, ...prev]);
    alert('Report Submitted Successfully! (ሪፖርቱ በትክክል ተልኳል)');
    setFormData({
      reporterName: '',
      violationWereda: '',
      violationType: '',
      violationRule: '',
      penaltyAmount: '',
      dailyStatus: '',
      violationDescription: '',
    });
  };

  return (
    <div className="max-w-6xl mx-auto">
      <section id="report" className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 mb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary mb-3">Finance Report form (የፋይናንስ ሪፖርት መላኪያ ቅፅ)</h2>
          <p className="text-textLight max-w-2xl mx-auto">
            Please fill out the form below to report a code violation. Your report helps us act quickly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-group">
            <label htmlFor="reporterName" className="block font-semibold mb-2 text-textDark">👤 Full Name (ሙሉ ስም)</label>
            <input
              type="text"
              id="reporterName"
              value={formData.reporterName}
              onChange={handleChange}
              placeholder="Enter name"
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
            />
          </div>

          <div className="form-group">
            <label htmlFor="violationWereda" className="block font-semibold mb-2 text-textDark">ወረዳ (Wereda)</label>
            <select
              id="violationWereda"
              value={formData.violationWereda}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white"
            >
              <option value="">ወረዳ--</option>
              {[1, 2, 4, 5, 6, 7, 8, 9].map((w) => (
                <option key={w} value={w}>ወረዳ 0{w}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="violationType" className="block font-semibold mb-2 text-textDark">የደንብ ጥሰት አይነት (Violation Type)</label>
            <select
              id="violationType"
              value={formData.violationType}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white"
            >
              <option value="">-- የደንብ ጥሰት አይነት--</option>
              <option value="zoning-land">በህገ ወጥ መሬት ወረራ</option>
              <option value="zoning-expansion">በህገ ወጥ መሬት ማስፋፋት</option>
              <option value="illegal-construction">በህገ ወጥ ግንባታ</option>
              <option value="sanitation-waste">በህገ ወጥ ደረቅና ፋሳሽ ቆሻሻ</option>
              <option value="road-use">በህገ ወጥ መንግድ አጠቃቀም</option>
              <option value="advertisement">በህገ ወጥ ማስታወቃያ</option>
              <option value="street-vending">በህገ ወጥ ጎዳና ንግድ</option>
              <option value="animal-slaughter">በህገ ወጥ የእንስሳት እርድ</option>
              <option value="public-disturbance">በህገ ወጥ አዋኪ ድርጊት</option>
              <option value="regulation-180">በደንብ 180</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="violationRule" className="block font-semibold mb-2 text-textDark">Select (ደንብ ቁጥር)</label>
            <select
              id="violationRule"
              value={formData.violationRule}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white"
            >
              <option value="">Choose Rule</option>
              <option value="150/2015-individual">ግለሰብ በደ/ቁጥር 150/2015</option>
              <option value="150/2015-org">ድርጅት በደ/ቁጥር 150/2015</option>
              <option value="167/2016-individual">ግለሰብ በደ/ቁጥር 167/2016</option>
              <option value="167/2016-org">ድርጅት በደ/ቁጥር 167/2016</option>
              <option value="180/2017-individual">ግለሰብ በደ/ቁጥር 180/2017</option>
              <option value="180/2017-org">ድርጅት በደ/ቁጥር 180/2017</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="penaltyAmount" className="block font-semibold mb-2 text-textDark">Penalty Amount (በገዘብ የተቀጣ ብር መጠን)</label>
            <select
              id="penaltyAmount"
              value={formData.penaltyAmount}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white"
            >
              <option value="">Choose Amount</option>
              <option value="0">-</option>
              <option value="100">100 ብር</option>
              <option value="200">200 ብር</option>
              <option value="300">300 ብር</option>
              <option value="500">500 ብር</option>
              <option value="1000">1,000 ብር</option>
              <option value="2000">2,000 ብር</option>
              <option value="3000">3,000 ብር</option>
              <option value="5000">5,000 ብር</option>
              <option value="10000">10,000 ብር</option>
              <option value="50000">50,000 ብር</option>
              <option value="100000">100,000 ብር</option>
              <option value="1000000">1,000,000 ብር</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="dailyStatus" className="block font-semibold mb-2 text-textDark">Daily Status (የእለቱ ሁኔታ)</label>
            <select
              id="dailyStatus"
              value={formData.dailyStatus}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white"
            >
              <option value="">Choose Status</option>
              <option value="paid">ገቢ የተደረገ (Collected)</option>
              <option value="unpaid">ገቢ ያልተደረገ (Not Collected)</option>
              <option value="none">በዛሬው ዕለት ቅጣት የለም</option>
            </select>
          </div>

          <div className="form-group md:col-span-2">
            <label htmlFor="violationDescription" className="block font-semibold mb-2 text-textDark">Additional Info (ከጨረታ ሽያጭ፤ የተቀጣ ገንዘብ መጠን)</label>
            <textarea
              id="violationDescription"
              value={formData.violationDescription}
              onChange={handleChange}
              placeholder="Provide details..."
              required
              className="w-full p-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all min-h-[120px] resize-y"
            ></textarea>
          </div>

          <div className="md:col-span-2 text-center mt-4">
            <button type="submit" className="btn min-w-[250px] py-4 text-lg">
              Submit Report (ሪፖርቱን ላክ)
            </button>
          </div>
        </form>
      </section>

      {submittedReports.length > 0 && (
        <section className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 mb-16 overflow-hidden animate-fade-in">
          <h3 className="text-2xl font-bold text-textDark mb-6 pb-2 border-b-2 border-primary/20">
            Submitted Reports (የገቡ ሪፖርቶች)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-bgLight text-textDark uppercase text-xs font-bold tracking-wider">
                  <th className="p-4 border-b">Reporter</th>
                  <th className="p-4 border-b">Wereda</th>
                  <th className="p-4 border-b">Type</th>
                  <th className="p-4 border-b">Rule</th>
                  <th className="p-4 border-b">Amount</th>
                  <th className="p-4 border-b">Status</th>
                  <th className="p-4 border-b">Details</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {submittedReports.map((report) => (
                  <tr key={report.id} className="hover:bg-gray-50 transition-colors border-b border-gray-50">
                    <td className="p-4 font-medium">{report.reporterName || 'Anonymous'}</td>
                    <td className="p-4">ወረዳ 0{report.violationWereda}</td>
                    <td className="p-4 truncate max-w-[150px]" title={report.violationType}>{report.violationType}</td>
                    <td className="p-4">{report.violationRule}</td>
                    <td className="p-4 font-mono font-bold text-primary">{report.penaltyAmount} ETB</td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                        report.dailyStatus === 'paid' ? 'bg-green-100 text-green-700' : 
                        report.dailyStatus === 'unpaid' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'
                      }`}>
                        {report.dailyStatus}
                      </span>
                    </td>
                    <td className="p-4 text-xs italic text-textLight">{report.violationDescription}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
};

export default ReportForm;
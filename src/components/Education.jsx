import React from "react";
import btechLogo from "../assets/B.tech.logo.png";
import tweleveLogo from "../assets/12th.logo.jpg";
import tenLogo from "../assets/10th.logo.jpg";

const cardClass = `w-full bg-white rounded-xl p-4 md:p-5 lg:p-7 transition-all duration-200
  hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1
  hover:ring-2 hover:ring-blue-400 hover:ring-offset-2
  shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]`;

const Education = () => {
  return (
    <div className='py-6'>
      <h1 className='text-2xl md:text-3xl mx-auto w-[94%] md:w-[75%] lg:w-[58%] mb-5 mt-3 font-semibold text-blue-500'>
        EDUCATION
      </h1>
      <div className="w-[94%] md:w-[75%] lg:w-[58%] mx-auto space-y-3 md:space-y-4">

        {/* BTech */}
        <div className={cardClass}>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <div className="flex items-center gap-3 md:gap-4">
              <img src={btechLogo} alt="college logo"
                className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 object-contain shrink-0" />
              <div>
                <h1 className='text-sm md:text-base lg:text-xl font-mono leading-snug'>
                  Bachelor of Technology, Computer Science Engineering
                </h1>
                <h3 className="text-gray-600 mt-1 text-xs md:text-sm lg:text-base">
                  IK GUJRAL PUNJAB TECHNICAL UNIVERSITY
                </h3>
              </div>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">2021 – 2025</p>
              <p className="text-xs md:text-sm text-gray-500 mt-1">7.9 CGPA</p>
            </div>
          </div>
        </div>

        {/* XII */}
        <div className={cardClass}>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <div className="flex items-center gap-3 md:gap-4">
              <img src={tweleveLogo} alt="school logo"
                className="h-10 w-10 md:h-12 md:w-12 lg:h-16 lg:w-16 object-contain rounded-full shrink-0" />
              <div>
                <h1 className='text-sm md:text-base lg:text-xl font-mono'>XIIth Board Exam</h1>
                <h3 className="text-gray-600 mt-1 text-xs md:text-sm lg:text-base">75.2% Marks in PCM+</h3>
              </div>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">2020</p>
            </div>
          </div>
        </div>

        {/* X */}
        <div className={cardClass}>
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
            <div className="flex items-center gap-3 md:gap-4">
              <img src={tenLogo} alt="school logo"
                className="h-10 w-12 md:h-12 md:w-14 lg:h-16 lg:w-20 object-contain rounded-full shrink-0" />
              <div>
                <h1 className='text-sm md:text-base lg:text-xl font-mono'>Xth Board Exam</h1>
                <h3 className="text-gray-600 mt-1 text-xs md:text-sm lg:text-base">82.2% Marks</h3>
              </div>
            </div>
            <div className="text-left sm:text-right shrink-0">
              <p className="text-gray-600 text-sm md:text-base lg:text-lg">2018</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Education;

import React from "react";
import { assets, doctors } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 ">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency:</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className="border border-gray-200 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>

    </div>
  );
};

export default About;



// bug of hover effect for the mobile screen for why choose us section

// import React, { useState, useEffect } from "react";
// import { assets, doctors } from "../assets/assets";

// const About = ({ isActive = false }) => {
//   const [activeCard, setActiveCard] = useState(null);
//   const [isMobile, setIsMobile] = useState(false);

//   // Detect if device supports touch
//   useEffect(() => {
//     const checkIfMobile = () => {
//       return window.matchMedia("(hover: none) and (pointer: coarse)").matches || 
//              'ontouchstart' in window || 
//              navigator.maxTouchPoints > 0;
//     };
    
//     setIsMobile(checkIfMobile());
    
//     // Listen for window resize to handle device orientation changes
//     const handleResize = () => setIsMobile(checkIfMobile());
//     window.addEventListener('resize', handleResize);
    
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleCardInteraction = (index) => {
//     if (isMobile) {
//       // On mobile, toggle the active state
//       setActiveCard(activeCard === index ? null : index);
//     }
//   };

//   const handleMouseEnter = (index) => {
//     if (!isMobile) {
//       setActiveCard(index);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isMobile) {
//       setActiveCard(null);
//     }
//   };

//   const cards = [
//     {
//       title: "Efficiency:",
//       description: "Streamlined appointment scheduling that fits into your busy lifestyle."
//     },
//     {
//       title: "Convenience:",
//       description: "Access to a network of trusted healthcare professionals in your area."
//     },
//     {
//       title: "Personalization:",
//       description: "Tailored recommendations and reminders to help you stay on top of your health."
//     }
//   ];

//   return (
//     <div className={`${isActive ? 'active-page' : ''}`}>
//       <div className="text-center text-2xl pt-10 text-gray-500">
//         <p>
//           ABOUT <span className="text-gray-700 font-medium">US</span>
//         </p>
//       </div>

//       <div className="my-10 flex flex-col md:flex-row gap-12">
//         <img
//           className="w-full md:max-w-[360px]"
//           src={assets.about_image}
//           alt="About Prescripto"
//         />
//         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 ">
//           <p>
//             Welcome to Prescripto, your trusted partner in managing your
//             healthcare needs conveniently and efficiently. At Prescripto, we
//             understand the challenges individuals face when it comes to
//             scheduling doctor appointments and managing their health records.
//           </p>
//           <p>
//             Prescripto is committed to excellence in healthcare technology. We
//             continuously strive to enhance our platform, integrating the latest
//             advancements to improve user experience and deliver superior
//             service. Whether you're booking your first appointment or managing
//             ongoing care, Prescripto is here to support you every step of the
//             way.
//           </p>
//           <b className="text-gray-800">Our Vision</b>
//           <p>
//             Our vision at Prescripto is to create a seamless healthcare
//             experience for every user. We aim to bridge the gap between patients
//             and healthcare providers, making it easier for you to access the
//             care you need, when you need it.
//           </p>
//         </div>
//       </div>

//       <div className="text-xl my-4">
//         <p>
//           WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row mb-20">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`
//               border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
//               cursor-pointer transition-colors duration-300 transform-none
//               ${activeCard === index ? 'bg-primary text-white' : 'text-gray-600'}
//               ${!isMobile ? 'hover:bg-primary hover:text-white' : ''}
//             `}
//             onClick={() => handleCardInteraction(index)}
//             onMouseEnter={() => handleMouseEnter(index)}
//             onMouseLeave={handleMouseLeave}
//             role="button"
//             tabIndex={0}
//             onKeyPress={(e) => {
//               if (e.key === 'Enter' || e.key === ' ') {
//                 handleCardInteraction(index);
//               }
//             }}
//           >
//             <b>{card.title}</b>
//             <p>{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;
















// // Debuged Code Start
// import React, { useState } from "react";

// // Mock assets for demo
// const assets = {
//   about_image:  ''
// };

// const About = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const features = [
//     {
//       title: "Efficiency:",
//       description: "Streamlined appointment scheduling that fits into your busy lifestyle."
//     },
//     {
//       title: "Convenience:",
//       description: "Access to a network of trusted healthcare professionals in your area."
//     },
//     {
//       title: "Personalization:",
//       description: "Tailored recommendations and reminders to help you stay on top of your health."
//     }
//   ];

//   return (
//     <div>
//       <div className="text-center text-2xl pt-10 text-gray-500">
//         <p>
//           ABOUT <span className="text-gray-700 font-medium">US</span>
//         </p>
//       </div>

//       <div className="my-10 flex flex-col md:flex-row gap-12">
//         <img
//           className="w-full md:max-w-[360px] rounded-lg"
//           src={assets.about_image}
//           alt="About us"
//         />
//         <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
//           <p>
//             Welcome to Prescripto, your trusted partner in managing your
//             healthcare needs conveniently and efficiently. At Prescripto, we
//             understand the challenges individuals face when it comes to
//             scheduling doctor appointments and managing their health records.
//           </p>
//           <p>
//             Prescripto is committed to excellence in healthcare technology. We
//             continuously strive to enhance our platform, integrating the latest
//             advancements to improve user experience and deliver superior
//             service. Whether you're booking your first appointment or managing
//             ongoing care, Prescripto is here to support you every step of the
//             way.
//           </p>
//           <b className="text-gray-800">Our Vision</b>
//           <p>
//             Our vision at Prescripto is to create a seamless healthcare
//             experience for every user. We aim to bridge the gap between patients
//             and healthcare providers, making it easier for you to access the
//             care you need, when you need it.
//           </p>
//         </div>
//       </div>

//       <div className="text-xl my-4">
//         <p>
//           WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
//         </p>
//       </div>

//       <div className="flex flex-col md:flex-row mb-20">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className={`
//               border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] 
//               transition-all duration-300 cursor-pointer
//               ${activeCard === index 
//                 ? 'bg-blue-600 text-white' 
//                 : 'text-gray-600 hover:bg-blue-600 hover:text-white'
//               }
//               md:hover:bg-blue-600 md:hover:text-white
//               active:bg-blue-600 active:text-white
//             `}
//             onClick={() => setActiveCard(activeCard === index ? null : index)}
//             onMouseEnter={() => setActiveCard(index)}
//             onMouseLeave={() => setActiveCard(null)}
//           >
//             <b>{feature.title}</b>
//             <p>{feature.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;
// // Debuged Code End
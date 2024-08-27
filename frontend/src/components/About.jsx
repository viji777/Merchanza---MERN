import React from "react";
import { TbHeadset, TbLock, TbLockAccess, TbLockBolt, TbLockOff, TbTruckReturn } from "react-icons/tb";
import about from "../assets/about.png";
import { FaLock, FaLockOpen } from "react-icons/fa";
const About = () => {
  return (
    <section className="max-padd-container py-12 xl:py-32">
      {/* Container */}
      <div className="flex flex-col xl:flex-row xl:gap-8 gap-16">
        {/* Left */}
        <div className="flex-1">
          <h3 className="h3 capitalize">
            Unveiling Our Product's Key Features!
          </h3>
          <p className="py-5">
            Merchanza is a cutting-edge e-commerce platform with an intuitive
            interface, advanced search options, and secure payments. Enjoy
            personalized recommendations, exclusive deals, and a responsive
            design for all devices. 
          </p>
          <div className="flex flex-col items-start  gap-y-4">
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md ">
                <TbTruckReturn className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Easy Return Process</h4>
                <p>
                  Merchanza offers easy returns with quick refunds, ensuring a
                  worry-free shopping experience.
                </p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md ">
                <TbLock className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Secure Payment OPtions</h4>
                <p>
                  Merchanza ensures secure payments with advanced encryption and
                  fraud protection, giving you peace of mind for every
                  transaction.
                </p>
              </div>
            </div>
            <div className="flexCenter gap-x-4">
              <div className="h-16 min-w-16 bg-secondary flexCenter rounded-md ">
                <TbHeadset className="text-white text-2xl" />
              </div>
              <div>
                <h4 className="medium-18">Live Customer Support</h4>
                <p>
                  Merchanza offers live customer support, providing real-time
                  assistance to ensure a smooth and satisfying shopping
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="flex-1 flexCenter">
          <div>
            <img src={about} height={488} width={488}></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

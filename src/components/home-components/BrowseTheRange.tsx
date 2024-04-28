import React, { FC } from "react";
import livingImg from "../../images/living-picture.png";
import diningImg from "../../images/dining-picture.png";
import bedroomImg from "../../images/bedroom-picture.png";

const BrowseTheRange: FC = () => {
  return (
    <div className="text-center mx-[20px] flex flex-col items-center font-poppins mt-[40px]">
      <div className="mb-[40px]">
        <h2 className="font-bold text-[28px] md:text-[32px] text-[#333333]">
          Browse The Range
        </h2>
        <span className="text-[17px] md:text-[20px] text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <div className="grid grid-cols-3 gap-[15px]">
        <div>
          <div className="mb-[18px]">
            <img src={diningImg} alt="dining" className="rounded-[10px]" />
          </div>
          <h3 className="font-semibold text-[#333333] text-[20px] md:text-[24px]">
            Dining
          </h3>
        </div>
        <div>
          <div className="mb-[18px]">
            <img src={livingImg} alt="living" className="rounded-[10px]" />
          </div>
          <h3 className="font-semibold text-[#333333] text-[20px] md:text-[24px]">
            Living
          </h3>
        </div>
        <div>
          <div className="mb-[18px]">
            <img src={bedroomImg} alt="bedroom" className="rounded-[10px]" />
          </div>
          <h3 className="font-semibold text-[#333333] text-[20px] md:text-[24px]">
            Bedroom
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BrowseTheRange;

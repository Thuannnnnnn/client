import React from "react";
import thumNail from "../img/thumNailLogin.jpg"
import icon1 from "../img/BlobsVector1.png"
import icon2 from "../img/BlobsVector2.png"
import icon3 from "../img/BlobsVector3.png"
import google from "../img/Google.png"
export const LoginPage = () => {
  return (
    <div className="bg-[#e6f3ffbf] flex flex-row justify-center w-full">
      <div className="bg-[#e6f3ffbf] w-[1440px] h-[1024px]">
        <div className="relative h-[1024px]">
          <img
            className="absolute w-[526px] h-[661px] top-[143px] left-[24px]"
            alt="Blobs vector"
            src={icon2}
          />
          <img className="absolute w-[530px] h-[607px] top-[78px] left-[116px]" alt="Blobs vector" src={icon1} />
          <img
            className="absolute w-[550px] h-[469px] top-[488px] left-0"
            alt="Blobs vector"
            src={icon3}
          />
          <img className="absolute w-[419px] h-[613px] top-[190px] left-[47px] rounded-full" alt="Main image" src={thumNail} />
          <div className="absolute w-[845px] h-[1024px] top-0 left-[595px] bg-[#fcfdff]">
            <div className="relative w-[606px] h-[730px] top-[136px] left-[125px]">
              <div className="w-[222px] top-[675px] left-[182px] absolute h-[55px]">
                <div className="relative w-[220px] h-[55px] rounded-[15px]">
                  <img className="absolute w-[50px] h-[50px] top-[3px] left-[7px]" alt="Google" src={google} />
                  <div className="absolute w-[141px] top-[17px] left-[66px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#7c838a] text-[14px] tracking-[0] leading-[normal]">
                    Sing up with Google
                  </div>
                  <div className="w-[220px] top-0 left-0 rounded-[15px] border border-solid border-[#7c838a] absolute h-[55px]" />
                </div>
              </div>
              <div className="absolute top-[580px] left-[249px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#b0bac3] text-[26px] tracking-[0] leading-[normal]">
                - OR -
              </div>
              <p className="absolute top-[522px] left-[2px] [font-family:'Poppins-Regular',Helvetica] font-normal text-transparent text-[18px] tracking-[0] leading-[normal]">
                <span className="text-[#7c838a]">You don’t have a account?</span>
                <span className="text-black">&nbsp;&nbsp;</span>
                <span className="text-[#f9ed32]">Sign Up</span>
              </p>
              <div className="absolute w-[342px] h-[60px] top-[415px] left-[119px]">
                <div className="relative w-[340px] h-[60px] bg-[#f9ed32] rounded-[10px]">
                  <button className="absolute w-[215px] top-[10px] left-[63px] [font-family:'Poppins-Medium',Helvetica] font-medium text-black text-[26px] text-center tracking-[0] leading-[normal]">
                    Sign In
                  </button>
                </div>
              </div>
              <div className="absolute w-[602px] h-[95px] top-[246px] left-0">
                <div className="absolute top-0 left-[2px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#7c838a] text-[20px] tracking-[0] leading-[normal]">
                  Password
                </div>
                <div className="absolute w-[602px] h-[65px] top-[30px] left-0">
                  <div className="relative w-[600px] h-[65px] rounded-[20px]">
                    <div className="absolute top-[17px] left-[40px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#00000080] text-[20px] tracking-[0] leading-[normal]">
                      Enter your Password here
                    </div>
                    <div className="absolute w-[600px] h-[65px] top-0 left-0 bg-[#b0bac366] rounded-[20px]" />
                  </div>
                </div>
              </div>
              <div className="absolute w-[602px] h-[95px] top-[95px] left-0">
                <div className="absolute top-0 left-[2px] [font-family:'Poppins-Medium',Helvetica] font-medium text-[#7c838a] text-[20px] tracking-[0] leading-[normal]">
                  Email
                </div>
                <div className="absolute w-[602px] h-[65px] top-[30px] left-0">
                  <div className="relative w-[600px] h-[65px] rounded-[20px]">
                    <div className="absolute top-[17px] left-[40px] [font-family:'Poppins-Regular',Helvetica] font-normal text-[#00000080] text-[20px] tracking-[0] leading-[normal]">
                      Enter your Email here
                    </div>
                    <div className="absolute w-[600px] h-[65px] top-0 left-0 bg-[#b0bac366] rounded-[20px]" />
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-[175px] [font-family:'Poppins-SemiBold',Helvetica] font-semibold text-black text-[26px] tracking-[0] leading-[normal]">
                Login To System
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { Film } from "lucide-react";
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
 
export const Footer = () => {
  return (
    <div className="w-[100%] bg-[#4338CA] py-10 px-5 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
      <div className="flex flex-col gap-3 col-[1/2]" id="title">
        <p className="flex gap-2 italic font-bold text-[16px]">
          <Film />
          <span>Movie Z</span>
        </p>
        <p className="text-sm">© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className="flex gap-12">
        <div className="flex flex-col gap-3" id="contactInformation">
          <h2>Contact information</h2>
          <div className="flex flex-col gap-6">
            <div className="flex gap-3 items-center" id="mail">
              <Mail />
              <div>
                <p>Email:</p>
                <p>24LP2306@nest.edu.com</p>
              </div>
            </div>
            <div className="flex gap-3 items-center" id="phone">
              <Phone />
              <div>
                <p>Phone:</p>
                <p>+976 (95) 342-030</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-normal">Follow us</h2>
          <div className="flex flex-col gap-3 font-medium">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};
 
 
 
import React from "react";

const Footer = () => (
    <footer className="flex py-16 px-8 justify-between bg-[#001C4F] text-white items-start text-lg ">
        <div className="flex-1 flex items-start">
            <span className="text-4xl font-bold">Contact</span>
        </div>
        <div className="flex-1 ">
            <div className="">
                <div className="text-lg break-all">
                    778 Rays Road, Suite 103
                    <br />
                    Stone Mountain, GA 30083
                </div>
            </div>
            <br />
            <br />
            <div>
                <div>
                    <span className="font-bold ">Office: </span>
                    <span>(678) 626-6696</span>
                </div>
                <div>
                    <span className="font-bold ">Toll-Free: </span>
                    <span>(866) 319-1446</span>
                </div>
                <div>
                    <span className="font-bold ">Fax: </span>
                    <span>(404) 478-8409</span>
                </div>
            </div>
        </div>
        <div className="flex-1">
            <div className="text-lg break-all">info@janichealthcare.com</div>
        </div>
    </footer>
);

export default Footer;

import React from "react";

const Hero = () => (
    <header>
        {/* Top Banner */}
        <div className="p-8 flex justify-between items-center text-lg bg-[#001C4F] text-white ">
            <div className="flex flex-col sm:flex-row items-center ">
                <h3>
                    778 Rays Road, Suite 103 <br />
                    Stone Mountain, GA 30083
                </h3>
            </div>
            <div>Hours: Monday - Friday, 9:00 AM - 5:00 PM</div>
            <div className="flex items-center gap-4">
                <a href="tel:16786266696" className="underline">
                    +1 (678) 626-6696
                </a>
            </div>
            <div className="flex items-center gap-4">
                <a href="mailto:info@janichealth.com" className="underline">
                    info@janichealth.com
                </a>
            </div>
        </div>

        {/* Navigation Bar */}
        <nav className="bg-white px-8 py-8 flex justify-between items-center text-[#001C4F]">
            <div className="font-bold text-2xl tracking-wide">
                Janic Healthcare Services, LLC
            </div>
            <div className="flex gap-8">
                <a href="/" className="font-medium hover:underline">
                    Home
                </a>
                <a href="about" className="font-medium hover:underline">
                    About
                </a>
                <a href="contact" className="font-medium hover:underline">
                    Contact
                </a>
                <a href="employment" className="font-medium hover:underline">
                    Employment
                </a>
                <a href="appointments" className="font-medium hover:underline">
                    Appointments
                </a>
                <a href="services" className="font-medium hover:underline">
                    Services
                </a>
            </div>
        </nav>

        {/* Hero Image */}
        <div>
            <img
                src="https://images.pexels.com/photos/7551641/pexels-photo-7551641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Healthcare Hero"
                className="w-full h-[700px] object-cover block"
            />
        </div>
    </header>
);

export default Hero;

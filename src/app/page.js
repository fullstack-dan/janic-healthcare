import Image from "next/image";

function Card({ title, description, imageUrl }) {
    return (
        <div className="overflow-hidden flex flex-col p-4 gap-2">
            <h1 className="font-bold text-3xl mb-2">{title}</h1>
            <p className="mb-4">{description}</p>
            <Image
                src={imageUrl}
                alt={title}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-sm"
            />
        </div>
    );
}

export default function Home() {
    return (
        <main className="flex flex-col min-h-screen my-16 mx-64 text-lg">
            <div className="flex gap-16">
                <div>
                    <h1 className="text-3xl font-bold">
                        Janic Healthcare Services, LLC
                    </h1>
                    <br />
                    <p>
                        24 hour Quality Personal Care & Skilled Nursing Serices
                        for you and your loved ones.
                    </p>
                </div>
                <div>
                    <p className="font-bold">
                        Licensed by the Georgia Department of Community Health
                    </p>
                    <br />
                    <p>
                        JHS provides our clients with excellent healthcare
                        services and support in a home!
                    </p>
                    <br />
                    <p>
                        Call us today:{" "}
                        <span className="font-bold">+1 (678) 626-6696</span>
                        <br />
                        <span className="font-bold">
                            778 Rays Road, Suite 103, Stone Mountain, GA 30083
                        </span>
                    </p>
                    <br />
                    <p>
                        JHS accepts Medicaid Waivers, CCSP, SOURCE, and Self
                        Pay.
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-32">
                <Card
                    title="Personal Care"
                    description="Personal Care service includes Bathing, Grooming, Exercise, Skin Care, Oral Hygienic, Feeding."
                    imageUrl="/images/personal-care.jpg"
                />
                <Card
                    title="Skilled Nursing"
                    description="Nurse Care Service Includes: Visiting Nurse, Wound Care, Medication Management, Ostomy Care, Trach Care, G-Tube"
                    imageUrl="/images/skilled-nursing.jpg"
                />
                <Card
                    title="Companion / Sitter"
                    description="Companion / Sitter services include Personal Errands, Light Housekeeping, Laundry, Grocery, Socialization, Medication Reminder"
                    imageUrl="/images/companionship.jpg"
                />
            </div>
            <h3 className="mt-16 text-center">
                Currently serving the following counties in Georgia: Rockdale,
                Douglas, Cherokee, Henry, Fayette, Cobb, Gwinnett, Clayton,
                Fulton, and DeKalb.
            </h3>
            <div className="flex flex-col items-center mt-32">
                <h2 className="text-3xl font-bold">Contact Us</h2>
                <p>
                    We'd love to hear from you! Drop us a line below and we'll
                    do our best to get back to you within one business day.
                </p>
                <form className="flex flex-col gap-4 w-full max-w-lg mt-6">
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label
                                htmlFor="firstName"
                                className="block font-semibold mb-1"
                            >
                                First Name{" "}
                                <span className="text-base font-normal">
                                    (required)
                                </span>
                            </label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                        </div>
                        <div className="flex-1">
                            <label
                                htmlFor="lastName"
                                className="block font-semibold mb-1"
                            >
                                Last Name{" "}
                                <span className="text-base font-normal">
                                    (required)
                                </span>
                            </label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                required
                            />
                        </div>
                    </div>
                    <div>
                        <label
                            htmlFor="email"
                            className="block font-semibold mb-1"
                        >
                            Email{" "}
                            <span className="text-base font-normal">
                                (required)
                            </span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="message"
                            className="block font-semibold mb-1"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-[#001947] text-white font-bold py-2 px-6 rounded hover:bg-[#001947]/80 transition cursor-pointer w-fit self-center"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </main>
    );
}

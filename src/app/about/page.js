import React from "react";

export default function AboutPage() {
    return (
        <main style={{ padding: "2rem" }}>
            <h1>About Janic Healthcare</h1>
            <p>
                Janic Healthcare is dedicated to providing innovative healthcare
                solutions that improve patient outcomes and streamline medical
                processes.
            </p>
            <section>
                <h2>Our Mission</h2>
                <p>
                    To empower healthcare professionals and patients through
                    technology, compassion, and excellence in service.
                </p>
            </section>
            <section>
                <h2>Our Team</h2>
                <p>
                    Our team consists of experienced medical professionals,
                    engineers, and support staff committed to making a
                    difference in the healthcare industry.
                </p>
            </section>
            <section>
                <h2>Contact Us</h2>
                <p>
                    Have questions? Reach out at{" "}
                    <a href="mailto:info@janichealthcare.com">
                        info@janichealthcare.com
                    </a>
                    .
                </p>
            </section>
        </main>
    );
}

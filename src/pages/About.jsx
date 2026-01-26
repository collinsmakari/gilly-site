import Seo from "../components/Seo";
import aboutBg from "../assets/About2.jpg";

export default function About() {
  return (
    <>
      <Seo
        title="About Apex Consulting"
        description="Learn about Apex Consulting, our mission, values, and experienced consultants."
        keywords="about consulting company, business advisors"
      />

      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutBg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 flex justify-center">
          <div className="bg-black/70 backdrop-blur-sm rounded-lg p-8 md:p-12 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              About Us
            </h2>

            <div className="text-gray-200 space-y-4 leading-relaxed  text-left">
              <p>
                Pegrumme Africa is a trusted consulting firm providing expert
                services in accounting, tax advisory, audit, risk management,
                and compliance.
              </p>

              <p>
                We help businesses navigate financial complexity, meet
                regulatory requirements, and make informed decisions with
                confidence.
              </p>

              <p>
                With a strong understanding of the African business landscape,
                we deliver practical, tailored solutions that strengthen
                financial controls, optimize performance, and support
                sustainable growth.
              </p>

              <p>
                At Pegrumme Africa, we combine integrity, expertise, and a
                client-first approach to help organizations build resilient,
                well-governed, and future-ready businesses.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

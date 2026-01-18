import Seo from "../components/Seo";

export default function About() {
  return (
    <>
      <Seo
        title="About Apex Consulting"
        description="Learn about Apex Consulting, our mission, values, and experienced consultants."
        keywords="about consulting company, business advisors"
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <div className="text-gray-700 max-w-3xl space-y-4 leading-relaxed">
          <p>
            Pegrumme Africa is a trusted consulting firm providing expert
            services in accounting, tax advisory, audit, risk management, and
            compliance.
          </p>

          <p>
            We help businesses navigate financial complexity, meet regulatory
            requirements, and make informed decisions with confidence.
          </p>

          <p>
            With a strong understanding of the African business landscape, we
            deliver practical, tailored solutions that strengthen financial
            controls, optimize performance, and support sustainable growth.
          </p>

          <p>
            At Pegrumme Africa, we combine integrity, expertise, and a
            client-first approach to help organizations build resilient,
            well-governed, and future-ready businesses.
          </p>
        </div>
      </section>
    </>
  );
}

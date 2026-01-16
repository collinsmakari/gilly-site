import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Apex Consulting | Business & Strategy Experts"
        description="Professional consulting services in business strategy, technology, and growth optimization."
        keywords="consulting company, business consultants, strategy consulting"
      />

      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">We Help Businesses Grow</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto"></p>
          <p>
            Apex Consulting provides expert guidance in strategy, technology,
            and operations.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-700 px-8 py-3 rounded-lg font-semibold"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </>
  );
}

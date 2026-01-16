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
        <p className="text-gray-700 leading-relaxed max-w-3xl">
          Apex Consulting is a trusted advisory firm helping organizations
          achieve sustainable growth. Our team combines industry expertise with
          data-driven strategies.
        </p>
      </section>
    </>
  );
}

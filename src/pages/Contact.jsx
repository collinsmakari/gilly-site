import Seo from "../components/Seo";

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact Apex Consulting"
        description="Contact Apex Consulting for professional business consulting services."
        keywords="contact consulting company, business consultation"
      />
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
        <form className="max-w-xl space-y-4">
          <input
            className="w-full border p-3 rounded"
            placeholder="Full Name"
          />
          <input
            className="w-full border p-3 rounded"
            placeholder="Email Address"
          />
          <textarea
            className="w-full border p-3 rounded"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Send Message
          </button>
        </form>
      </section>
    </>
  );
}

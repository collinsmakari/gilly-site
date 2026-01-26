import { useEffect } from "react";
import Seo from "../components/Seo";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Seo
        title="Contact Pegrumme Consulting"
        description="Get in touch with Pegrumme Consulting for expert business consulting services."
        keywords="contact consulting company, business consultation, accounting, finance, services"
      />

      <section className="bg-gray-200 max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-600">
          Contact Us
        </h2>

        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto text-center mb-10">
          We’d love to hear from you! Fill out the form below and our team will
          respond promptly to discuss how we can support your business
          consulting needs.
        </p>

        {/* Contact Form Component */}
        <ContactForm />
      </section>
    </>
  );
}

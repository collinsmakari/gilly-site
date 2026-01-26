import { useRef, useState } from "react";

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const formData = {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      message: form.current.message.value,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        form.current.reset();
      } else {
        setStatus(`❌ ${data.message}`);
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Failed to send message. Try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center px-6">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-xl bg-gray-100 rounded-lg p-8 md:p-10 space-y-4 shadow-md"
      >
        <input
          name="user_name"
          placeholder="Full Name"
          required
          className="w-full bg-white border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-600 outline-none"
        />

        <input
          name="user_email"
          type="email"
          placeholder="Email Address"
          required
          className="w-full bg-white border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-600 outline-none"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full bg-white border border-gray-300 p-3 rounded focus:ring-2 focus:ring-blue-600 outline-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            className={`mt-2 text-center ${
              status.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
}

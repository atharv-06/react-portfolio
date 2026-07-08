import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      alert("Failed to send message.");
      console.error(error);
    }
  };

  return (
    <section className="max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold text-slate-900">
        Contact
      </h2>

      <div className="w-12 h-1 bg-sky-500 rounded mt-2 mb-6" />

      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <p className="text-slate-600 mb-6 max-w-xl">
          Feel free to reach out for collaboration, internship opportunities,
          or just to say hello.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full rounded-lg border border-slate-300 px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Message
            </label>

            <textarea
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full rounded-lg border border-slate-300 px-4 py-2"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2 rounded-lg"
          >
            Send Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default Contact;
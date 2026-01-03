const Contact = () => {
  return (
    <section className="max-w-3xl mx-auto">
      {/* Title */}
      <h2 className="text-2xl font-semibold text-slate-900">
        Contact
      </h2>
      <div className="w-12 h-1 bg-sky-500 rounded mt-2 mb-6" />

      {/* Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">
        <p className="text-slate-600 mb-6 max-w-xl">
          Feel free to reach out for collaboration, internship opportunities,
          or just to say hello.
        </p>

        <form className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Message
            </label>
            <textarea
              rows={4}
              placeholder="Write your message here..."
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-slate-900
                         focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 resize-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center
                       bg-sky-500 hover:bg-sky-600 transition
                       text-white font-medium px-6 py-2 rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

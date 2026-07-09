import { useState } from 'react';

export default function ContactForm() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "6d509ff8-8450-4119-9e77-79c617363add");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black px-6">
  <form
    onSubmit={onSubmit}
    className="w-full max-w-2xl border border-black dark:border-gray-700 rounded-2xl p-8 m-6 md:p-12 "
  >
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
        Get in Touch
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mt-2">
        Have a project in mind? Send me a message.
      </p>
    </div>

    <div className="flex flex-col gap-6">
      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          placeholder="Enter your name"
          className="w-full p-3 rounded-lg border border-gray-400 dark:border-gray-700 bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          className="w-full p-3 rounded-lg border border-gray-400 dark:border-gray-700 bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          Message
        </label>
        <textarea
          name="message"
          required
          rows="6"
          placeholder="Write your message..."
          className="w-full p-3 rounded-lg border border-gray-400 dark:border-gray-700 bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold py-3 rounded-lg"
      >
        Send Message
      </button>

      {result && (
        <span className="text-center text-green-500 font-medium">
          {result}
        </span>
      )}
    </div>
  </form>
</div>

    
  );
}
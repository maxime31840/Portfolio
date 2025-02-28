import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ firstName: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen text-white py-40">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-semibold text-center mb-8 text-blue-500">Contactez-Moi</h1> 
        <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          {isSubmitted ? (
            <div className="text-center text-xl text-white-400">
              <p>Merci pour votre message ! Nous reviendrons vers vous très bientôt.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>


              <div className="mb-6">
                <label htmlFor="firstName" className="block text-lg font-medium mb-2">
                  Votre Prénom
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>


              <div className="mb-6">
                <label htmlFor="email" className="block text-lg font-medium mb-2">
                  Votre Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>


              <div className="mb-6">
                <label htmlFor="message" className="block text-lg font-medium mb-2">
                  Votre Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="6"
                  required
                />
              </div>


              <button
                type="submit"
                className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Envoyer
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

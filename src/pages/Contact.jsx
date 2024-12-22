import React from 'react';
import { Form } from 'react-router-dom';

// Action function to handle form submission
export const contactData = async ({ request }) => {
  try {
    const formData = await request.formData();

    const name = formData.get('username');
    const email = formData.get('email');
    const message = formData.get('message');

    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    return { success: true };

  } catch (error) {
    console.log('Form submission error:', error);
  }
};

export const Contact = () => {
  return (
    <div className="flex justify-start md:px-32 md:py-8 px-12 py-6 min-h-screen">
      <div className="max-w-lg w-full">
        <h1 className="text-3xl font-bold text-left mb-5">Contact Us</h1>
        <p className="text-left mb-5">Have any questions? We'd love to hear from you.</p>
        
        <Form method="post" action="/contact">
          <div className="mb-4 mt-5">
            <label htmlFor="name" className="block text-lg font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Your Message"
              rows="8"
              required
            />
          </div>

          <button
            type="submit"
            className=" bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Send Message
          </button>
        </Form>
      </div>
    </div>
  );
};

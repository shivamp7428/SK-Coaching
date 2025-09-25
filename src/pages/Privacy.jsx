import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center backdrop-blur-md"
        style={{ backgroundImage: "url('f15.jpg')" }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div> {/* Dark Overlay */}
      </div>

      {/* Privacy Policy Container */}
      <div className="relative max-w-3xl p-10 mt-40 m-10  bg-opacity-90  backdrop-blur-lg shadow-xl border  z-10">
        <h1 className="text-4xl font-extrabold text-center mb-6">Privacy Policy</h1>

        <p className="mb-4 text-lg">
          Welcome to <strong>SK COMPUTER COACHING</strong>. This Privacy Policy explains how we collect, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-semibold mt-6">1. Information We Collect</h2>
        <p className="mb-4">We may collect your name, email, phone number, and details provided through contact forms.</p>

        <h2 className="text-2xl font-semibold mt-6">2. How We Use Your Information</h2>
        <p className="mb-4">We use your information to provide services, improve our skills, and send updates.</p>

        <h2 className="text-2xl font-semibold mt-6">3. Data Protection</h2>
        <p className="mb-4">We implement security measures to protect your data from unauthorized access or disclosure.</p>

        <h2 className="text-2xl font-semibold mt-6">4. Cookies</h2>
        <p className="mb-4">We may use cookies to enhance your experience. You can disable them in browser settings.</p>

        <h2 className="text-2xl font-semibold mt-6">5. Third-Party Services</h2>
        <p className="mb-4">We may use third-party services (such as analytics) that collect information based on their policies.</p>

        <h2 className="text-2xl font-semibold mt-6">6. Changes to This Policy</h2>
        <p className="mb-4">We may update our Privacy Policy. Any changes will be posted on this page.</p>

        <h2 className="text-2xl font-semibold mt-6">7. Contact Us</h2>
        <p className="mb-4">
          If you have any questions, contact us at{" "}
          <a href="mailto:shivampatelpatel2005@gmail.com" className="text-blue-500 hover:underline">
          sateeshkushwaha9564@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

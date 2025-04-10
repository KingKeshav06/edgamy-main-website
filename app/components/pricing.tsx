import React from "react"

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/40 rounded-full mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Tailored Solutions for Your Institution
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We offer customized pricing based on your institution&apos;s size,
            needs, and goals. Contact us for a personalized quote.
          </p>
        </div>

        {/* Contact Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left Side: Contact Information */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 text-white">
                <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
                <p className="mb-8">
                  For detailed pricing information tailored specifically for
                  your institution, please reach out directly to our education
                  solutions team.
                </p>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-indigo-100">
                        Email
                      </p>
                      <a
                        href="mailto: founder@edgamy.com"
                        className="text-white hover:text-indigo-100 transition-colors"
                      >
                        founder@edgamy.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-indigo-100">
                        Phone
                      </p>
                      <a
                        href="tel:+919958191298"
                        className="text-white hover:text-indigo-100 transition-colors"
                      >
                        +919958191298
                      </a>
                    </div>
                  </div>

                  {/* Schedule Call */}
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-indigo-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-indigo-100">
                        Book a Consultation
                      </p>
                      <a
                        href="#"
                        className="text-white hover:text-indigo-100 transition-colors"
                      >
                        Schedule a Call
                      </a>
                    </div>
                  </div>
                </div>

                {/* Game Elements Decoration */}
                <div className="relative mt-12 h-32 opacity-50">
                  <div className="absolute top-0 left-0 w-12 h-12 bg-white/20 rounded-full"></div>
                  <div className="absolute top-8 left-20 w-8 h-8 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-0 left-4 w-10 h-10 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/20 rounded-full"></div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full"></div>
                </div>
              </div>

              {/* Right Side: Form */}
              <div className="p-8 md:p-12">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect With Us
                </h3>

                <form className="space-y-6">
                  {/* Institution Name */}
                  <div>
                    <label
                      htmlFor="institution"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Institution Name
                    </label>
                    <input
                      type="text"
                      id="institution"
                      name="institution"
                      placeholder="Your institution name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white"
                      required
                    />
                  </div>

                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Full name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white"
                      required
                    />
                  </div>

                  {/* Institution Size */}
                  <div>
                    <label
                      htmlFor="size"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Institution Size
                    </label>
                    <select
                      id="size"
                      name="size"
                      defaultValue=""
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white"
                    >
                      <option value="" disabled>
                        Select your institution size
                      </option>
                      <option value="small">
                        Small (Under 1,000 students)
                      </option>
                      <option value="medium">
                        Medium (1,000-5,000 students)
                      </option>
                      <option value="large">
                        Large (5,000-15,000 students)
                      </option>
                      <option value="enterprise">
                        Enterprise (15,000+ students)
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Tell us about your specific needs"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Features Included */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Every Plan Includes
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Core Gamification Features
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Full access to XP tracking, level progression, rewards systems,
                and gamified dashboards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Personalized Onboarding
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Dedicated implementation team to assist with setup, integration,
                and initial training.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-pink-600 dark:text-pink-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Ongoing Support
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Comprehensive support with dedicated account manager and
                technical assistance.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white dark:bg-neutral-900 rounded-xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Regular Updates
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                Continuous platform improvements, new features, and security
                updates.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Preview */}
        <div className="mt-20 max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Have Questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Check out our frequently asked questions or contact our sales team
            for more information.
          </p>
          <div className="flex justify-center">
            <a
              href="#faq"
              className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              View FAQs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing

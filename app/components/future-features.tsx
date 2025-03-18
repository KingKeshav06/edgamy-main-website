import React from "react"

const FutureFeatures = () => {
  return (
    <section
      id="future-features"
      className="py-20 bg-white dark:bg-neutral-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/40 rounded-full mb-4">
            Coming Soon
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Future Features
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We&apos;re continuously evolving Edgamy to meet the changing needs
            of education. Here&apos;s a sneak peek at the exciting features
            coming to our platform.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Feature Card 1 */}
          <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* "Coming Soon" Badge */}
            <div className="absolute top-4 right-4 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Coming Soon
            </div>

            <div className="p-8">
              <div className="w-16 h-16 bg-indigo-600 dark:bg-indigo-500 rounded-lg flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Advanced AI-driven Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Harness the power of AI to gain deeper insights into student
                performance, identify patterns, and receive personalized
                recommendations for improving learning outcomes.
              </p>

              {/* Feature Details */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Predictive performance analytics
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Personalized learning paths
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Intelligent content recommendations
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* "Coming Soon" Badge */}
            <div className="absolute top-4 right-4 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Coming Soon
            </div>

            <div className="p-8">
              <div className="w-16 h-16 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Enhanced Gamification Features
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Take student engagement to new heights with expanded
                gamification elements including competitive leaderboards,
                achievement systems, and more customizable reward pathways.
              </p>

              {/* Feature Details */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Interactive leaderboards and competitions
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Advanced achievement systems
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Customizable reward pathways
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature Card 3 */}
          <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* "Coming Soon" Badge */}
            <div className="absolute top-4 right-4 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Coming Soon
            </div>

            <div className="p-8">
              <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-lg flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Mobile Applications
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Stay connected and engaged with native mobile applications for
                iOS and Android, featuring real-time notifications and a
                seamless, on-the-go learning experience.
              </p>

              {/* Feature Details */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Native iOS and Android apps
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Real-time push notifications
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Offline learning capabilities
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Card 4 */}
          <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            {/* "Coming Soon" Badge */}
            <div className="absolute top-4 right-4 bg-indigo-600 dark:bg-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Coming Soon
            </div>

            <div className="p-8">
              <div className="w-16 h-16 bg-pink-600 dark:bg-pink-500 rounded-lg flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Seamless LMS Integrations
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Easily connect Edgamy with your existing learning management
                systems, creating a unified educational ecosystem with powerful
                data synchronization.
              </p>

              {/* Feature Details */}
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Compatible with major LMS platforms
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Automatic grade and progress syncing
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4"
                    />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">
                    Open API for custom integrations
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Feature Timeline */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Our Development Roadmap
          </h3>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-indigo-200 dark:bg-indigo-900/50"></div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {/* Item 1: Q1 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center order-1 md:w-5/12">
                  <div className="absolute z-10 left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-neutral-900 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-12 md:ml-0 md:mr-12 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mb-1">
                      Q1 2023
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      Advanced Analytics Beta
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Initial release of our AI-driven analytics platform with
                      predictive modeling capabilities.
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12 order-1 md:order-2"></div>
              </div>

              {/* Item 2: Q2 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-5/12 order-1"></div>
                <div className="flex items-center order-1 md:order-2 md:w-5/12">
                  <div className="absolute z-10 left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-neutral-900 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-12 md:ml-12 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mb-1">
                      Q2 2023
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      Mobile App Launch
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Native iOS and Android applications with real-time
                      notifications and offline capabilities.
                    </p>
                  </div>
                </div>
              </div>

              {/* Item 3: Q3 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center order-1 md:w-5/12">
                  <div className="absolute z-10 left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-neutral-900 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-12 md:ml-0 md:mr-12 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mb-1">
                      Q3 2023
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      Enhanced Gamification
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Competitive leaderboards, achievement systems, and
                      customizable reward pathways.
                    </p>
                  </div>
                </div>
                <div className="md:w-5/12 order-1 md:order-2"></div>
              </div>

              {/* Item 4: Q4 */}
              <div className="relative flex flex-col md:flex-row items-center md:justify-between">
                <div className="md:w-5/12 order-1"></div>
                <div className="flex items-center order-1 md:order-2 md:w-5/12">
                  <div className="absolute z-10 left-0 md:left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-neutral-900 flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="ml-12 md:ml-12 p-4 bg-white dark:bg-neutral-800 rounded-lg shadow-md">
                    <div className="text-xs text-indigo-600 dark:text-indigo-400 font-bold mb-1">
                      Q4 2023
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      LMS Integration Suite
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Seamless connections with all major learning management
                      systems and an open API for custom integrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        {/* <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Stay Updated on Our Progress
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter to receive updates on new features and be
            the first to know when they&apos;re released.
          </p>

          <div className="max-w-md mx-auto">
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-neutral-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-neutral-800 dark:text-white"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default FutureFeatures

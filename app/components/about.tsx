"use client"

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/40 rounded-full mb-4">
            About Edgamy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Revolutionizing Higher Education Through Gamification
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Edgamy is a revolutionary platform designed to make education
            interactive, effective, and enjoyable through gamification.
            Students, teachers, and administrators benefit from streamlined
            processes, real-time insights, and powerful collaboration tools.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in">
            <div className="p-8">
              <div className="w-14 h-14 bg-indigo-600 dark:bg-indigo-500 rounded-lg flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Customizable Experience
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tailor learning paths to individual students, enabling them to
                progress at their own pace while staying motivated through
                rewards.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-delay">
            <div className="p-8">
              <div className="w-14 h-14 bg-purple-600 dark:bg-purple-500 rounded-lg flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Engagement-Focused
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Built around proven game mechanics that boost student
                motivation, encourage participation, and improve content
                retention.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl animate-fade-in-delay-2">
            <div className="p-8">
              <div className="w-14 h-14 bg-pink-600 dark:bg-pink-500 rounded-lg flex items-center justify-center text-white mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Collaborative Community
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Foster meaningful connections between students and instructors
                through community features that promote active participation.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-700 dark:to-purple-700 rounded-2xl overflow-hidden shadow-xl">
          {/* Stats */}
          <div className="w-full md:w-1/2 p-8 md:p-12 text-white">
            <h3 className="text-2xl font-bold mb-8">
              Transforming Education Through Data
            </h3>

            <div className="grid grid-cols-2 gap-8">
              {/* Stat 1 */}
              <div>
                <div className="text-4xl font-bold text-white mb-2">87%</div>
                <p className="text-indigo-100">
                  Increased student engagement after implementation
                </p>
              </div>

              {/* Stat 2 */}
              <div>
                <div className="text-4xl font-bold text-white mb-2">42%</div>
                <p className="text-indigo-100">
                  Improved content retention compared to traditional methods
                </p>
              </div>

              {/* Stat 3 */}
              <div>
                <div className="text-4xl font-bold text-white mb-2">3.5x</div>
                <p className="text-indigo-100">
                  More student interactions and contributions
                </p>
              </div>

              {/* Stat 4 */}
              <div>
                <div className="text-4xl font-bold text-white mb-2">76%</div>
                <p className="text-indigo-100">
                  Of educators report time savings on administrative tasks
                </p>
              </div>
            </div>
          </div>

          {/* Visualization */}
          <div className="w-full md:w-1/2 p-8 md:p-0 bg-white/5 backdrop-blur-sm">
            <div className="relative h-96 overflow-hidden rounded-lg">
              {/* Animated elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Game design elements */}
                <div className="relative w-64 h-64">
                  {/* Circular progress */}
                  <div className="absolute inset-0 rounded-full border-8 border-indigo-300/30 animate-float"></div>
                  <div className="absolute inset-3 rounded-full border-8 border-purple-300/40 animate-float-delay"></div>
                  <div className="absolute inset-6 rounded-full border-8 border-pink-300/30 animate-float-slow"></div>

                  {/* Core elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-white/80 text-indigo-800 rounded-2xl shadow-lg w-36 h-36 flex flex-col items-center justify-center p-4 rotate-6 transform transition-transform animate-pulse-slow">
                      <div className="text-3xl font-bold">XP</div>
                      <div className="text-lg font-semibold">+500</div>
                      <div className="text-xs mt-1">Level Up!</div>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute -top-6 -right-10 bg-yellow-400 text-yellow-900 rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform rotate-12 animate-float-delay">
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
                        d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      />
                    </svg>
                  </div>

                  <div className="absolute -bottom-4 -left-8 bg-green-500 text-white rounded-lg w-14 h-14 flex items-center justify-center shadow-lg transform -rotate-12 animate-float-slow">
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
                        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      />
                    </svg>
                  </div>

                  <div className="absolute -right-16 top-1/2 bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg animate-float-delay-slow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-7 w-7"
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

                  <div className="absolute -left-12 top-6 bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg animate-pulse-delay">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

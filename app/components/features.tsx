import React from "react"

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-neutral-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/40 rounded-full mb-4">
            Core Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Gamified Learning Tools Built for Higher Education
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Discover how our comprehensive suite of features transforms
            traditional education into an engaging, rewarding experience for
            everyone involved.
          </p>
        </div>

        {/* Features Cards */}
        <div className="space-y-24">
          {/* Feature 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Visual Part */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="bg-white dark:bg-neutral-900 p-4 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                {/* Gamified Dashboard Mockup */}
                <div className="relative bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-neutral-800 dark:to-neutral-700 p-4 rounded-xl overflow-hidden">
                  {/* Dashboard Header */}
                  <div className="bg-indigo-600 dark:bg-indigo-700 text-white p-3 rounded-lg flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium">Student Dashboard</div>
                    <div className="text-xs px-2 py-1 bg-white/20 rounded-md">
                      Level 12
                    </div>
                  </div>

                  {/* XP Points and Level Bar */}
                  <div className="bg-white dark:bg-neutral-700 rounded-lg p-4 mb-4 shadow-sm">
                    <div className="flex justify-between items-center mb-2">
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                        XP Progress
                      </div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-300">
                        650/1000 XP
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 dark:bg-neutral-600 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <div>Current: Level 12</div>
                      <div>Next: Level 13</div>
                    </div>
                  </div>

                  {/* Currency and Badges */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          Z-Bucks
                        </div>
                        <div className="flex items-center text-amber-500 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          750
                        </div>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-700 rounded-lg p-3 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
                          Badges
                        </div>
                        <div className="flex items-center text-blue-500 font-bold">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
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
                          8
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Recent Achievements */}
                  <div className="bg-white dark:bg-neutral-700 rounded-lg p-4 shadow-sm">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">
                      Recent Achievements
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center p-2 bg-green-50 dark:bg-green-900/20 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
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
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            Math Challenge Completed
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            +50 XP • +100 Z-Bucks
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center p-2 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white mr-3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            New Badge: Discussion Starter
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Forum participation recognized!
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Part */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="lg:pl-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-600 text-white text-lg font-bold mb-4">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Gamified Learning Experience
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Real-time XP and Z-Bucks tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Level progression and rewards system
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Interactive dashboards motivating continual learning
                    </span>
                  </li>
                </ul>
                <div className="p-4 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg border-l-4 border-indigo-500 mb-6">
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Example:
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    A student completes a task and immediately receives XP,
                    unlocking exciting new avatars and customization options.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Part */}
            <div className="w-full lg:w-1/2">
              <div className="lg:pr-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-purple-600 text-white text-lg font-bold mb-4">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Easy Task & Attendance Management
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      One-click attendance marking and approval
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Effortless task creation and real-time tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Instant notifications and updates
                    </span>
                  </li>
                </ul>
                <div className="p-4 bg-purple-50 dark:bg-purple-900/30 rounded-lg border-l-4 border-purple-500 mb-6">
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Example:
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Teachers can approve attendance in seconds, instantly
                    rewarding students with gamified points.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Part */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white dark:bg-neutral-900 p-4 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                {/* Attendance Management Mockup */}
                <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-neutral-800 dark:to-neutral-700 p-4 rounded-xl overflow-hidden">
                  {/* Mockup Header */}
                  <div className="bg-purple-600 dark:bg-purple-700 text-white p-3 rounded-lg flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium">
                      Instructor Dashboard
                    </div>
                    <div className="text-xs px-2 py-1 bg-white/20 rounded-md">
                      Attendance
                    </div>
                  </div>

                  {/* Class Details */}
                  <div className="bg-white dark:bg-neutral-700 rounded-lg p-4 mb-4 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          Computer Science 101
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          Monday, 10:00 AM - 12:00 PM
                        </div>
                      </div>
                      <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full">
                        Active Now
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="text-gray-600 dark:text-gray-300">
                        Total Students:{" "}
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          32
                        </span>
                      </div>
                      <div className="text-gray-600 dark:text-gray-300">
                        Present Today:{" "}
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          29
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Attendance List */}
                  <div className="bg-white dark:bg-neutral-700 rounded-lg p-4 shadow-sm mb-4">
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-3">
                      Quick Attendance
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-2 bg-white dark:bg-neutral-600 rounded-lg border border-gray-100 dark:border-neutral-500">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold mr-3">
                            JD
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                              John Doe
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Student ID: 1001
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </button>
                          <button className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-red-600 transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/50">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold mr-3">
                            AS
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                              Alice Smith
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Student ID: 1002
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                          Present • +5 XP
                        </div>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-900/50">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 flex items-center justify-center font-bold mr-3">
                            TJ
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                              Tom Jones
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              Student ID: 1003
                            </div>
                          </div>
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                          Present • +5 XP
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="flex justify-center">
                    <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
                      Mark All Present
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Visual Part */}
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="bg-white dark:bg-neutral-900 p-4 rounded-2xl shadow-xl transform hover:scale-105 transition-transform duration-300">
                {/* Community Interaction Mockup */}
                <div className="relative bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-neutral-800 dark:to-neutral-700 p-4 rounded-xl overflow-hidden">
                  {/* Mockup Header */}
                  <div className="bg-blue-600 dark:bg-blue-700 text-white p-3 rounded-lg flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm font-medium">Community Forums</div>
                    <div className="text-xs px-2 py-1 bg-white/20 rounded-md">
                      Physics 202
                    </div>
                  </div>

                  {/* Forum Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-white dark:bg-neutral-700 p-3 rounded-lg text-center shadow-sm">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        42
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        Topics
                      </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-700 p-3 rounded-lg text-center shadow-sm">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        156
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        Posts
                      </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-700 p-3 rounded-lg text-center shadow-sm">
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        26
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        Active Users
                      </div>
                    </div>
                  </div>

                  {/* Discussion Thread */}
                  <div className="bg-white dark:bg-neutral-700 rounded-lg p-4 shadow-sm mb-4">
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-start">
                        <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold mr-3">
                          MP
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-800 dark:text-gray-200">
                            Maria Parker
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400">
                            Level 15 • Physics Expert
                          </div>
                        </div>
                      </div>
                      <div className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs rounded-full">
                        Featured
                      </div>
                    </div>
                    <div className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                      Can someone explain how to solve this quantum mechanics
                      problem? I&apos;m stuck on the wave function calculation.
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                            />
                          </svg>
                          8 replies
                        </div>
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                            />
                          </svg>
                          15 likes
                        </div>
                      </div>
                      <div>Posted 2 hours ago</div>
                    </div>
                  </div>

                  {/* Locked Content Preview */}
                  <div className="bg-gray-100 dark:bg-neutral-600 rounded-lg p-4 shadow-sm mb-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100 dark:to-neutral-600 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-yellow-500 text-white mb-3">
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
                              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                            />
                          </svg>
                        </div>
                        <div className="text-sm font-medium text-gray-800 dark:text-white mb-1">
                          Locked Content
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-300 mb-3">
                          Reach Level 10 to unlock discussion creation
                        </div>
                        <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-medium transition-colors">
                          Keep Earning XP
                        </button>
                      </div>
                    </div>
                    <div className="opacity-20 pointer-events-none">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-start">
                          <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-500 mr-3"></div>
                          <div>
                            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-500 rounded mb-1"></div>
                            <div className="h-3 w-16 bg-gray-300 dark:bg-gray-500 rounded"></div>
                          </div>
                        </div>
                      </div>
                      <div className="h-4 w-full bg-gray-300 dark:bg-gray-500 rounded mb-2"></div>
                      <div className="h-4 w-5/6 bg-gray-300 dark:bg-gray-500 rounded mb-2"></div>
                      <div className="h-4 w-4/6 bg-gray-300 dark:bg-gray-500 rounded"></div>
                    </div>
                  </div>

                  {/* Quick Reply */}
                  <div className="bg-white dark:bg-neutral-700 rounded-lg p-4 shadow-sm">
                    <div className="flex space-x-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                        ME
                      </div>
                      <div className="flex-1 bg-gray-100 dark:bg-neutral-600 rounded-full px-4 py-2 text-sm text-gray-500 dark:text-gray-400">
                        Share your thoughts...
                      </div>
                    </div>
                    <div className="text-xs text-center text-gray-500 dark:text-gray-400">
                      Engage with the community to earn XP and unlock more
                      features!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Part */}
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="lg:pl-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 text-white text-lg font-bold mb-4">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Dynamic Community Interaction
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Moderated discussion forums
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Unlockable community features based on student engagement
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Interactive commenting and reaction systems
                    </span>
                  </li>
                </ul>
                <div className="p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg border-l-4 border-blue-500 mb-6">
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Example:
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    A student gains points and levels up, unlocking the ability
                    to create original posts in community discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features 4 & 5 - Collapsed Grid for Smaller Screens */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Feature 4 */}
            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-600 text-white text-lg font-bold mb-4">
                  4
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Club & Collaboration Tools
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Create and manage student clubs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Collaborative growth through shared achievements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Gamified incentives to boost club participation
                    </span>
                  </li>
                </ul>
                <div className="p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Example:
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    Students form clubs and collectively contribute points,
                    achieving new rewards and milestones.
                  </p>
                </div>
              </div>

              {/* Illustration */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-neutral-800 dark:to-neutral-700 p-6">
                <div className="h-40 flex items-center justify-center">
                  <div className="relative flex items-center space-x-2">
                    {/* Club member avatars in circle */}
                    <div className="absolute w-32 h-32 rounded-full border-2 border-dashed border-green-300 dark:border-green-700 animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute -top-10 left-10">
                      <div className="w-10 h-10 rounded-full bg-green-200 dark:bg-green-700 text-green-700 dark:text-green-200 flex items-center justify-center font-bold text-sm">
                        JS
                      </div>
                    </div>
                    <div className="absolute top-2 right-4">
                      <div className="w-10 h-10 rounded-full bg-blue-200 dark:bg-blue-700 text-blue-700 dark:text-blue-200 flex items-center justify-center font-bold text-sm">
                        RK
                      </div>
                    </div>
                    <div className="absolute -bottom-6 right-12">
                      <div className="w-10 h-10 rounded-full bg-purple-200 dark:bg-purple-700 text-purple-700 dark:text-purple-200 flex items-center justify-center font-bold text-sm">
                        MP
                      </div>
                    </div>
                    <div className="absolute -bottom-4 left-6">
                      <div className="w-10 h-10 rounded-full bg-yellow-200 dark:bg-yellow-700 text-yellow-700 dark:text-yellow-200 flex items-center justify-center font-bold text-sm">
                        AJ
                      </div>
                    </div>

                    {/* Center element */}
                    <div className="z-10 bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-3 transform transition-transform hover:scale-110">
                      <div className="text-center">
                        <div className="text-lg font-bold text-green-600 dark:text-green-400">
                          Coding Club
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          15 members
                        </div>
                        <div className="flex items-center justify-center mt-2 space-x-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-yellow-500"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                        <div className="mt-2 text-xs font-medium text-gray-700 dark:text-gray-300">
                          2500 XP Collected
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-600 text-white text-lg font-bold mb-4">
                  5
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Customized Student Portfolios
                </h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Profile customization (avatars, backgrounds)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Automated portfolio generation for showcasing
                      accomplishments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="h-6 w-6 text-green-500 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700 dark:text-gray-300">
                      Professional display of academic and extracurricular
                      achievements
                    </span>
                  </li>
                </ul>
                <div className="p-4 bg-amber-50 dark:bg-amber-900/30 rounded-lg border-l-4 border-amber-500">
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1">
                    Example:
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">
                    At the end of the academic year, students export their
                    achievements into professional portfolios to showcase their
                    work.
                  </p>
                </div>
              </div>

              {/* Portfolio Preview */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-neutral-800 dark:to-neutral-700 p-6">
                <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white text-lg font-bold">
                        EJ
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-800 dark:text-white">
                          Emma Johnson
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Computer Science • Year 3
                        </div>
                      </div>
                    </div>
                    <div className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-xs font-medium">
                      Level 19
                    </div>
                  </div>

                  {/* Portfolio Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-gray-50 dark:bg-neutral-700 p-2 rounded-lg text-center">
                      <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
                        3.92
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        GPA
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-neutral-700 p-2 rounded-lg text-center">
                      <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
                        24
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Badges
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-neutral-700 p-2 rounded-lg text-center">
                      <div className="text-lg font-bold text-gray-800 dark:text-gray-200">
                        8,740
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Total XP
                      </div>
                    </div>
                  </div>

                  {/* Achievement Badges */}
                  <div className="mb-4">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Top Achievements
                    </div>
                    <div className="flex space-x-2 overflow-x-auto pb-2">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
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
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-600 dark:text-green-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                          />
                        </svg>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center">
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
                      <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-yellow-600 dark:text-yellow-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div className="flex-shrink-0 w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-full flex items-center justify-center">
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
                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Export Button */}
                  <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                      />
                    </svg>
                    Export Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

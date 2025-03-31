"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 text-white"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-indigo-500 rounded-full animate-float"></div>
        <div className="absolute top-1/4 right-10 w-20 h-20 bg-purple-500 rounded-full animate-float-delay"></div>
        <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-pink-500 rounded-full animate-float-slow"></div>
        <div className="absolute -bottom-10 right-1/3 w-36 h-36 bg-blue-500 rounded-full animate-float-delay-slow"></div>

        {/* Game elements background */}
        <div className="absolute top-1/3 left-10 text-6xl opacity-20 animate-pulse-slow">
          🏆
        </div>
        <div className="absolute top-10 right-1/4 text-6xl opacity-20 animate-pulse">
          ⭐
        </div>
        <div className="absolute bottom-1/4 right-10 text-6xl opacity-20 animate-pulse-delay">
          🎮
        </div>
        <div className="absolute bottom-10 left-1/3 text-6xl opacity-20 animate-pulse-slow">
          🎯
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-6">
          {/* Text content */}
          <div className="lg:w-1/2 max-w-2xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              Transform{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Education
              </span>{" "}
              with Gamification
            </h1>

            <p className="text-lg sm:text-xl text-gray-100 mb-8 leading-relaxed animate-fade-in-delay">
              Edgamy combines cutting-edge technology and gamified experiences
              to increase student engagement, simplify teaching, and streamline
              administrative tasks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
              <Link
                href="#cta"
                className="px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium rounded-lg hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 text-center shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </Link>
              <Link
                href="#features"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <span>Explore Features</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            {/* Game elements indicators */}
            <div className="hidden md:flex items-center space-x-8 mt-10 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
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
                <span>Engagement</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
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
                <span>Real-time</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
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
                <span>Rewarding</span>
              </div>
            </div>
          </div>

          {/* Dashboard Mockup */}
          <div className="lg:w-1/2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main dashboard frame */}
              <div className="relative bg-white dark:bg-neutral-800 rounded-xl shadow-2xl overflow-hidden transform perspective-1000 rotate-y-1 rotate-x-2 animate-float-slow">
                {/* Dashboard header */}
                <div className="bg-indigo-600 dark:bg-indigo-800 text-white p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm font-medium">Edgamy Dashboard</div>
                  <div className="text-sm">Student View</div>
                </div>

                {/* Dashboard content */}
                <div className="p-4">
                  {/* Progress bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-800 dark:text-gray-200">
                        Level Progress
                      </span>
                      <span className="text-indigo-600 dark:text-indigo-400">
                        75%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-neutral-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse-slow"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="bg-indigo-50 dark:bg-neutral-700 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                        275
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        XP Points
                      </div>
                    </div>
                    <div className="bg-purple-50 dark:bg-neutral-700 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                        12
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        Level
                      </div>
                    </div>
                    <div className="bg-pink-50 dark:bg-neutral-700 p-3 rounded-lg text-center">
                      <div className="text-2xl font-bold text-pink-600 dark:text-pink-400">
                        8
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        Badges
                      </div>
                    </div>
                  </div>

                  {/* Tasks */}
                  <div className="space-y-2 mb-4">
                    <div className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">
                      Active Tasks
                    </div>
                    <div className="bg-white dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <div className="text-sm text-gray-800 dark:text-gray-200">
                          Complete Physics Assignment
                        </div>
                        <div className="text-xs text-indigo-600 dark:text-indigo-400">
                          +30 XP
                        </div>
                      </div>
                      <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Due in 2 days
                      </div>
                    </div>
                    <div className="bg-white dark:bg-neutral-700 border border-gray-200 dark:border-neutral-600 p-3 rounded-lg">
                      <div className="flex justify-between">
                        <div className="text-sm text-gray-800 dark:text-gray-200">
                          Participate in Discussion
                        </div>
                        <div className="text-xs text-indigo-600 dark:text-indigo-400">
                          +15 XP
                        </div>
                      </div>
                      <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                        Daily challenge
                      </div>
                    </div>
                  </div>

                  {/* Bottom UI elements */}
                  <div className="flex space-x-2">
                    <button className="flex-1 py-2 px-3 text-xs bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                      My Courses
                    </button>
                    <button className="flex-1 py-2 px-3 text-xs bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                      Achievements
                    </button>
                    <button className="flex-1 py-2 px-3 text-xs bg-gray-200 dark:bg-neutral-600 text-gray-700 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-neutral-500 transition-colors">
                      Community
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-500 rounded-full opacity-70 blur-xl animate-pulse"></div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-indigo-500 rounded-full opacity-70 blur-xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <Link
          href="#about"
          className="text-white/80 hover:text-white transition-colors"
        >
          <span className="sr-only">Scroll Down</span>
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}

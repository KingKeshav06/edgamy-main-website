"use client"

import React from "react"

const CTA = () => {
  return (
    <section
      id="cta"
      className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900 text-white"
    >
      {/* Background Game Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-500 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500 rounded-full"></div>
        <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-pink-500 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-blue-500 rounded-full"></div>

        {/* Game icons */}
        <div className="absolute top-1/3 left-10 text-6xl opacity-20">🏆</div>
        <div className="absolute top-10 right-1/4 text-6xl opacity-20">⭐</div>
        <div className="absolute bottom-1/4 right-10 text-6xl opacity-20">
          🎮
        </div>
        <div className="absolute bottom-10 left-1/3 text-6xl opacity-20">
          🎯
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Future of Education?
          </h2>
          <p className="text-lg md:text-xl text-indigo-100 mb-8">
            Join hundreds of institutions that have transformed their learning
            environments with Edgamy&apos;s gamified approach.
          </p>
        </div>

        {/* CTA Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Trial Card */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl transform transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-indigo-600 dark:bg-indigo-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
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
            <h3 className="text-2xl font-bold mb-4 text-center">
              Start Your Free Trial
            </h3>
            <p className="text-indigo-100 mb-6 text-center">
              Experience Edgamy firsthand with a 30-day free trial. No credit
              card required.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-400 mr-2"
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
                <span>Full access to all features</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-400 mr-2"
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
                <span>Up to 50 student accounts</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-400 mr-2"
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
                <span>Implementation assistance</span>
              </li>
            </ul>

            <a
              href="#"
              className="block w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Start Free Trial
            </a>
          </div>

          {/* Demo Card */}
          <div className="bg-indigo-600/20 backdrop-blur-sm rounded-2xl p-8 border border-indigo-500/30 shadow-xl transform transition-transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-600 dark:bg-purple-500 rounded-2xl flex items-center justify-center text-white mb-6 mx-auto">
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
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-center">
              Book a Personalized Demo
            </h3>
            <p className="text-indigo-100 mb-6 text-center">
              Schedule a personalized walkthrough with our education solutions
              team.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-400 mr-2"
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
                <span>Customized to your needs</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-400 mr-2"
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
                <span>Q&A with product experts</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="h-5 w-5 text-green-400 mr-2"
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
                <span>Implementation strategy session</span>
              </li>
            </ul>

            <a
              href="#"
              className="block w-full py-3 px-6 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors shadow-lg hover:shadow-xl text-center"
            >
              Schedule Demo
            </a>
          </div>
        </div>

        {/* Testimonial Quote */}
        <div className="max-w-4xl mx-auto mt-20 text-center relative">
          <div className="text-4xl text-indigo-300 mb-6">
            <svg
              className="w-16 h-16 mx-auto opacity-50"
              fill="currentColor"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
            </svg>
          </div>
          <blockquote className="text-xl md:text-2xl font-medium mb-6">
            Implementing Edgamy was one of the best decisions we made for our
            institution. The engagement levels have skyrocketed, and our
            students are thriving in this gamified learning environment.
          </blockquote>
          <div className="font-medium">
            <span className="text-indigo-200">Dr. Michael Thompson</span>
            <span className="text-indigo-300"> • </span>
            <span className="text-indigo-200">
              Director of Innovation, Pacific University
            </span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-20 pt-12 border-t border-indigo-500/30">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-300"
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
                  <a
                    href="mailto:sales@edgamy.com"
                    className="hover:text-indigo-200 transition-colors"
                  >
                    sales@edgamy.com
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-indigo-300"
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
                  <a
                    href="tel:+1234567890"
                    className="hover:text-indigo-200 transition-colors"
                  >
                    +123-456-7890
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#features"
                    className="hover:text-indigo-200 transition-colors flex items-center"
                  >
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="hover:text-indigo-200 transition-colors flex items-center"
                  >
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-indigo-200 transition-colors flex items-center"
                  >
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
              <p className="text-indigo-200 text-sm mb-4">
                Subscribe to our newsletter for the latest updates and
                educational insights.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 py-2 px-4 rounded-l-lg border border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-indigo-800/50 text-white"
                  required
                />
                <button
                  type="submit"
                  className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 rounded-r-lg transition-colors"
                >
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
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA

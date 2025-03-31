"use client"

import React, { useState } from "react"

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white dark:bg-neutral-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/40 rounded-full mb-4">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Find answers to common questions about Edgamy&apos;s gamified
            learning platform.
          </p>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto space-y-6">
          {/* FAQ Item 1 */}
          <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
            <button
              className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              onClick={() => toggleFAQ(0)}
              aria-expanded={openIndex === 0}
            >
              <span className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                How does gamification improve learning?
              </span>
              <svg
                className={`faq-icon w-6 h-6 text-indigo-600 dark:text-indigo-400 transform transition-transform duration-300 ${
                  openIndex === 0 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`faq-content overflow-hidden transition-all duration-300 ${
                openIndex === 0 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 dark:text-gray-300">
                <p>
                  Gamification boosts engagement by making learning fun and
                  rewarding, directly impacting student motivation and success.
                  By incorporating game elements like points, levels, badges,
                  and rewards, Edgamy creates a more engaging learning
                  environment that encourages consistent participation and helps
                  maintain student interest in the material.
                </p>

                <div className="mt-4 p-4 bg-white dark:bg-neutral-700 rounded-lg flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-full flex items-center justify-center mr-4">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                      Research Insight:
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      Studies show that gamified elements can increase student
                      participation by up to 60% and improve content retention
                      by 40% compared to traditional teaching methods.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Item 2 */}
          <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
            <button
              className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              onClick={() => toggleFAQ(1)}
              aria-expanded={openIndex === 1}
            >
              <span className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                Is Edgamy easy to integrate with existing systems?
              </span>
              <svg
                className={`faq-icon w-6 h-6 text-indigo-600 dark:text-indigo-400 transform transition-transform duration-300 ${
                  openIndex === 1 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`faq-content overflow-hidden transition-all duration-300 ${
                openIndex === 1 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 dark:text-gray-300">
                <p>
                  Yes, Edgamy is designed for seamless integration with your
                  existing educational infrastructure. Our system can work
                  alongside your current learning management system, student
                  information system, and other digital tools. Additional LMS
                  compatibility options are coming soon to further enhance
                  integration capabilities.
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-3 bg-white dark:bg-neutral-700 rounded-lg">
                    <div className="font-medium text-gray-900 dark:text-white">
                      Current Integrations:
                    </div>
                    <ul className="mt-2 text-sm space-y-1">
                      <li className="flex items-center">
                        <svg
                          className="h-4 w-4 text-green-500 mr-2"
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
                        Major SIS platforms
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-4 w-4 text-green-500 mr-2"
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
                        Popular LMS solutions
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-4 w-4 text-green-500 mr-2"
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
                        SSO authentication
                      </li>
                    </ul>
                  </div>
                  <div className="p-3 bg-white dark:bg-neutral-700 rounded-lg">
                    <div className="font-medium text-gray-900 dark:text-white">
                      Coming Soon:
                    </div>
                    <ul className="mt-2 text-sm space-y-1">
                      <li className="flex items-center">
                        <svg
                          className="h-4 w-4 text-indigo-500 mr-2"
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
                        Advanced API ecosystem
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-4 w-4 text-indigo-500 mr-2"
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
                        Additional LMS platforms
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="h-4 w-4 text-indigo-500 mr-2"
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
                        Custom integration options
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Item 3 */}
          <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
            <button
              className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              onClick={() => toggleFAQ(2)}
              aria-expanded={openIndex === 2}
            >
              <span className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                What support do you offer?
              </span>
              <svg
                className={`faq-icon w-6 h-6 text-indigo-600 dark:text-indigo-400 transform transition-transform duration-300 ${
                  openIndex === 2 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`faq-content overflow-hidden transition-all duration-300 ${
                openIndex === 2 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 dark:text-gray-300">
                <p>
                  We provide comprehensive support to ensure your institution
                  gets the most out of Edgamy:
                </p>

                <ul className="mt-4 space-y-3">
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
                    <span>
                      <strong className="text-gray-800 dark:text-gray-200">
                        Personalized onboarding:
                      </strong>{" "}
                      Dedicated implementation team to help you set up and
                      configure Edgamy to match your institution&apos;s needs.
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
                    <span>
                      <strong className="text-gray-800 dark:text-gray-200">
                        Training sessions:
                      </strong>{" "}
                      Comprehensive training for administrators, teachers, and
                      staff to ensure everyone can use Edgamy effectively.
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
                    <span>
                      <strong className="text-gray-800 dark:text-gray-200">
                        Dedicated support team:
                      </strong>{" "}
                      Access to our support specialists through multiple
                      channels including email, chat, and phone.
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
                    <span>
                      <strong className="text-gray-800 dark:text-gray-200">
                        Regular updates:
                      </strong>{" "}
                      Continuous platform improvements, new features, and
                      security updates.
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
                    <span>
                      <strong className="text-gray-800 dark:text-gray-200">
                        Knowledge base:
                      </strong>{" "}
                      Comprehensive documentation, tutorials, and best practices
                      to help you maximize Edgamy&apos;s potential.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* FAQ Item 4 */}
          <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
            <button
              className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              onClick={() => toggleFAQ(3)}
              aria-expanded={openIndex === 3}
            >
              <span className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                How much time does implementation take?
              </span>
              <svg
                className={`faq-icon w-6 h-6 text-indigo-600 dark:text-indigo-400 transform transition-transform duration-300 ${
                  openIndex === 3 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`faq-content overflow-hidden transition-all duration-300 ${
                openIndex === 3 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 dark:text-gray-300">
                <p>
                  Implementation timelines vary based on institution size and
                  specific requirements. For most institutions, the basic
                  implementation can be completed in 2-4 weeks. Our streamlined
                  process follows these steps:
                </p>

                <div className="mt-4 relative">
                  {/* Timeline */}
                  <div className="absolute h-full w-0.5 bg-indigo-200 dark:bg-indigo-900 left-4 top-0"></div>

                  {/* Steps */}
                  <div className="space-y-6 ml-9 relative">
                    <div>
                      <div className="absolute -left-10 rounded-full w-8 h-8 bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                        1
                      </div>
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">
                        Discovery & Planning (1 week)
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        We assess your needs, define goals, and create an
                        implementation plan.
                      </p>
                    </div>

                    <div>
                      <div className="absolute -left-10 rounded-full w-8 h-8 bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                        2
                      </div>
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">
                        Technical Setup (1-2 weeks)
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        We deploy your instance, integrate with existing
                        systems, and configure your environment.
                      </p>
                    </div>

                    <div>
                      <div className="absolute -left-10 rounded-full w-8 h-8 bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                        3
                      </div>
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">
                        Training (1 week)
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        We provide comprehensive training for administrators,
                        teachers, and staff.
                      </p>
                    </div>

                    <div>
                      <div className="absolute -left-10 rounded-full w-8 h-8 bg-indigo-600 dark:bg-indigo-500 text-white flex items-center justify-center font-bold text-sm">
                        4
                      </div>
                      <h4 className="text-base font-medium text-gray-900 dark:text-white">
                        Launch & Support (Ongoing)
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        We help you roll out to users, provide ongoing support,
                        and ensure your success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Item 5 */}
          <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
            <button
              className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              onClick={() => toggleFAQ(4)}
              aria-expanded={openIndex === 4}
            >
              <span className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                Is Edgamy accessible and inclusive?
              </span>
              <svg
                className={`faq-icon w-6 h-6 text-indigo-600 dark:text-indigo-400 transform transition-transform duration-300 ${
                  openIndex === 4 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`faq-content overflow-hidden transition-all duration-300 ${
                openIndex === 4 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 dark:text-gray-300">
                <p>
                  Yes, we&apos;ve built Edgamy with accessibility and inclusion
                  as core principles. Our platform includes:
                </p>

                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Accessibility Features:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                        <span>WCAG 2.1 AA compliance</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                        <span>Screen reader compatibility</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                        <span>Keyboard navigation</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                        <span>Color contrast options</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-neutral-700 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                      Inclusion Features:
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                        <span>Multiple achievement paths</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                        <span>Diverse avatar options</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                        <span>Customizable learning pace</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                        <span>Language support options</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Item 6 */}
          <div className="bg-gray-50 dark:bg-neutral-800 rounded-xl shadow-md overflow-hidden">
            <button
              className="faq-toggle w-full px-6 py-5 flex items-center justify-between focus:outline-none"
              onClick={() => toggleFAQ(5)}
              aria-expanded={openIndex === 5}
            >
              <span className="text-lg font-semibold text-gray-900 dark:text-white text-left">
                What makes Edgamy different from other LMS platforms?
              </span>
              <svg
                className={`faq-icon w-6 h-6 text-indigo-600 dark:text-indigo-400 transform transition-transform duration-300 ${
                  openIndex === 5 ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div
              className={`faq-content overflow-hidden transition-all duration-300 ${
                openIndex === 5 ? "max-h-[1000px]" : "max-h-0"
              }`}
            >
              <div className="px-6 pb-5 text-gray-600 dark:text-gray-300">
                <p>
                  While traditional LMS platforms focus primarily on content
                  delivery and assignment management, Edgamy differentiates
                  itself by putting gamification and engagement at the core of
                  the educational experience:
                </p>

                <div className="mt-4 overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead className="bg-gray-100 dark:bg-neutral-700">
                      <tr>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Feature
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Traditional LMS
                        </th>
                        <th
                          scope="col"
                          className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider"
                        >
                          Edgamy
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white dark:bg-neutral-600 divide-y divide-gray-200 dark:divide-neutral-700">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                          Engagement Focus
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300">
                          Basic
                        </td>
                        <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400 font-medium">
                          Comprehensive Gamification
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                          Student Motivation
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300">
                          External factors
                        </td>
                        <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400 font-medium">
                          Built-in reward systems
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                          Community Building
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300">
                          Basic forums
                        </td>
                        <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400 font-medium">
                          Interactive social features
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                          Progress Visualization
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-500 dark:text-gray-300">
                          Grades only
                        </td>
                        <td className="px-4 py-3 text-sm text-green-600 dark:text-green-400 font-medium">
                          Multi-dimensional progress
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Our team is ready to assist you with any additional questions you
            might have about Edgamy.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
            >
              Contact Our Team
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 font-medium rounded-lg transition-colors"
            >
              View Documentation
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ

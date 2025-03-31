import React from "react"

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gray-50 dark:bg-neutral-800 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/40 rounded-full mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Trusted by Educators Worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Hear what educators and administrators are saying about their
            experience with Edgamy.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative">
            {/* Background Elements */}
            <div className="absolute -top-6 -left-6 w-20 h-20 bg-indigo-300 dark:bg-indigo-700 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-300 dark:bg-purple-700 rounded-full opacity-20"></div>

            {/* Testimonial Card */}
            <div className="relative bg-white dark:bg-neutral-900 rounded-2xl shadow-xl p-8 md:p-12 z-10">
              <div className="flex flex-col md:flex-row items-center">
                {/* Quote Icon */}
                <div className="text-indigo-400 mb-6 md:mb-0 md:mr-8">
                  <svg
                    className="w-16 h-16"
                    fill="currentColor"
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                  >
                    <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                  </svg>
                </div>

                {/* Testimonial Content */}
                <div>
                  <p className="text-xl md:text-2xl font-medium text-gray-800 dark:text-gray-200 leading-relaxed mb-6">
                    &ldquo;Edgamy transformed how we engage students. Their
                    motivation and participation have never been higher! The
                    gamified elements made learning exciting again, and
                    we&apos;ve seen significant improvement in student outcomes
                    across the board.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-indigo-100 dark:bg-indigo-900/60 text-indigo-600 dark:text-indigo-400 flex items-center justify-center font-bold text-lg">
                        AK
                      </div>
                    </div>
                    <div className="ml-4">
                      <div className="text-base font-medium text-gray-900 dark:text-white">
                        Dr. Anita Kapoor
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Education Expert
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/60 text-green-600 dark:text-green-400 flex items-center justify-center font-bold">
                  JD
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-900 dark:text-white">
                  Prof. James Douglas
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Computer Science Department
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              &ldquo;The attendance tracking and instant feedback mechanisms
              have made my job so much easier. Students are more punctual and
              engaged when they know they&apos;re earning points for their
              efforts.&rdquo;
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/60 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold">
                  SR
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-900 dark:text-white">
                  Sarah Rodriguez
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  University Administrator
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              &ldquo;The analytics dashboard gives us incredible insights into
              student performance. We can now identify struggling students early
              and provide targeted support before issues escalate.&rdquo;
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg p-6 transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                  RK
                </div>
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-900 dark:text-white">
                  Dr. Robert Kim
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Dean of Student Affairs
                </div>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              &ldquo;The community and club features have revolutionized our
              campus culture. Students are forming meaningful connections around
              their studies and interests like never before.&rdquo;
            </p>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Student Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-10">
            Student Experiences
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Student 1 */}
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 dark:from-indigo-800 dark:to-purple-800 rounded-xl shadow-lg p-6 text-white transform transition duration-300 hover:scale-105">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-white/60"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4z" />
                </svg>
              </div>
              <p className="mb-4">
                &ldquo;Earning XP and leveling up makes me actually want to
                complete assignments early. I love seeing my progress
                visualized!&rdquo;
              </p>
              <div className="mt-auto">
                <div className="text-sm font-medium">Michael T.</div>
                <div className="text-xs text-indigo-200">
                  Computer Science Major
                </div>
              </div>
            </div>

            {/* Student 2 */}
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 dark:from-purple-800 dark:to-pink-800 rounded-xl shadow-lg p-6 text-white transform transition duration-300 hover:scale-105">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-white/60"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4z" />
                </svg>
              </div>
              <p className="mb-4">
                &ldquo;The clubs feature helped me find study partners who
                approach problems the same way I do. My grades have improved so
                much!&rdquo;
              </p>
              <div className="mt-auto">
                <div className="text-sm font-medium">Jasmine R.</div>
                <div className="text-xs text-purple-200">Biology Major</div>
              </div>
            </div>

            {/* Student 3 */}
            <div className="bg-gradient-to-br from-pink-600 to-red-600 dark:from-pink-800 dark:to-red-800 rounded-xl shadow-lg p-6 text-white transform transition duration-300 hover:scale-105">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-white/60"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4z" />
                </svg>
              </div>
              <p className="mb-4">
                &ldquo;I used my Edgamy portfolio during a job interview to show
                my academic achievements. The interviewer was impressed!&rdquo;
              </p>
              <div className="mt-auto">
                <div className="text-sm font-medium">Daniel K.</div>
                <div className="text-xs text-pink-200">
                  Business Administration
                </div>
              </div>
            </div>

            {/* Student 4 */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-indigo-800 rounded-xl shadow-lg p-6 text-white transform transition duration-300 hover:scale-105">
              <div className="mb-4">
                <svg
                  className="w-8 h-8 text-white/60"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4z" />
                </svg>
              </div>
              <p className="mb-4">
                &ldquo;As someone with ADHD, the gamification keeps me focused
                and interested. I&apos;ve never been this consistent with my
                studies!&rdquo;
              </p>
              <div className="mt-auto">
                <div className="text-sm font-medium">Sophia W.</div>
                <div className="text-xs text-blue-200">Psychology Major</div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Row */}
        <div className="mt-20">
          <div className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-4">
              {/* Stat 1 */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-neutral-700 text-center">
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  94%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Of institutions reported improved student engagement
                </div>
              </div>

              {/* Stat 2 */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-neutral-700 text-center">
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  89%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Of students prefer gamified learning methods
                </div>
              </div>

              {/* Stat 3 */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-gray-200 dark:border-neutral-700 text-center">
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  42%
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Average improvement in assignment completion rates
                </div>
              </div>

              {/* Stat 4 */}
              <div className="p-8 text-center">
                <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">
                  250+
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  Higher education institutions using Edgamy
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="mt-16">
          <p className="text-center text-sm text-gray-500 dark:text-gray-400 mb-8">
            TRUSTED BY LEADING EDUCATIONAL INSTITUTIONS
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75">
            <div className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="https://sales@edgamy.com/images/icons/clients/dropbox.svg"
                alt="Education Partner"
                className="max-h-full max-w-full"
              />
            </div>
            <div className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="https://sales@edgamy.com/images/icons/clients/github.svg"
                alt="Education Partner"
                className="max-h-full max-w-full"
              />
            </div>
            <div className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="https://sales@edgamy.com/images/icons/clients/medium.svg"
                alt="Education Partner"
                className="max-h-full max-w-full"
              />
            </div>
            <div className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
              <img
                src="https://sales@edgamy.com/images/icons/clients/spotify.svg"
                alt="Education Partner"
                className="max-h-full max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

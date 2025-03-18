import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Features from "./components/features"
import Benefits from "./components/benefits"
import FutureFeatures from "./components/future-features"
import Pricing from "./components/pricing"
import FAQ from "./components/faq"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Features />
      <Benefits />
      <FutureFeatures />
      <Pricing />
      <FAQ />
    </>
  )
}

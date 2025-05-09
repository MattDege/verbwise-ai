import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f1c] text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-700 bg-[#0f0f1c]">
        <div className="text-xl font-semibold">Verbwise AI</div>
        <div className="space-x-4">
          <Link href="/login">
            <button className="px-4 py-2 border rounded hover:bg-white hover:text-black transition">Sign In</button>
          </Link>
          <Link href="/signup">
            <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition">Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-24">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
          An AI-powered tool<br />to reword your thoughts
        </h1>
        <Link href="/rewrite">
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full text-white font-semibold">
            Rewrite Now
          </button>
        </Link>
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-green-400">
          <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />No credit card required</div>
          <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Multiple writing styles</div>
          <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4" />Save rewrite history</div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-[#0f0f1c] py-16 text-center">
        <h2 className="text-xl font-semibold mb-8 tracking-wider">FEATURES</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto text-white">
          {[
            "Plagiarism Safety",
            "Tone Adjustment",
            "Perfect your pitch"
          ].map((feature, index) => (
            <div key={index}>
              <p className="text-lg font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-white text-black py-20 text-center">
        <h2 className="text-2xl font-bold mb-2">Simple, Transparent Pricing</h2>
        <p className="text-gray-600 mb-12">Choose the perfect plan to enhance your writing. Upgrade anytime as your needs grow.</p>
        <div className="bg-white shadow-md rounded-xl w-64 mx-auto p-8 border">
          <div className="text-3xl font-bold mb-2">$5 <span className="text-sm font-normal">/month</span></div>
          <button className="mt-4 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition">Get Started</button>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-100 py-16 text-center text-black">
        <h2 className="text-xl font-bold mb-4">Ready to Transform Your Writing?</h2>
        <p className="mb-6 text-gray-600 max-w-xl mx-auto">
          Join thousands of writers who have elevated their content with our AI-powered text enhancement tool.
        </p>
        <Link href="/rewrite">
          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Start Enhancing Your Text →
          </button>
        </Link>
      </section>

      <Footer />
    </div>
  );
}

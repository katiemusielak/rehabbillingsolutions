// Homepage
export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-blue-700">Rehab Billing Solutions</h1>
          <nav className="space-x-6 hidden md:flex">
            <a href="/" className="hover:text-blue-600">Home</a>
            <a href="/services" className="hover:text-blue-600">Services</a>
            <a href="/about" className="hover:text-blue-600">About</a>
            <a href="/process" className="hover:text-blue-600">Our Process</a>
            <a href="/contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700">Free Consultation</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-500 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Simplify Your Medical Billing</h2>
          <p className="text-lg mb-6">We handle your billing, so you can focus on patient care. Reliable, accurate, and HIPAA-compliant services for healthcare providers.</p>
          <a href="/contact" className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-100">Get Started Today</a>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-16 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Our Services</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Medical Billing</h4>
              <p>Complete billing services to maximize revenue and reduce claim denials.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Credentialing</h4>
              <p>We handle provider enrollment and credentialing with insurance companies.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Revenue Cycle Management</h4>
              <p>End-to-end management to ensure steady cash flow for your practice.</p>
            </div>
          </div>
          <a href="/services" className="inline-block mt-8 text-blue-600 font-semibold hover:underline">View All Services →</a>
        </div>
      </section>

      {/* About Preview */}
      <section id="about" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">About Us</h3>
          <p className="text-lg text-gray-700">At Rehab Billing Solutions, we specialize in helping healthcare providers streamline billing processes, reduce stress, and increase revenue. With years of experience and HIPAA-compliant systems, we’re a trusted partner for practices of all sizes.</p>
          <a href="/about" className="inline-block mt-6 text-blue-600 font-semibold hover:underline">Learn More →</a>
        </div>
      </section>

      {/* Process Preview */}
      <section id="process" className="py-16 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-12">Our Process</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-lg font-semibold mb-2">1. Consultation</h4>
              <p>We discuss your needs and customize a plan for your practice.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-lg font-semibold mb-2">2. Setup</h4>
              <p>Credentialing and system integration tailored for smooth workflow.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-lg font-semibold mb-2">3. Billing</h4>
              <p>Accurate claim submissions and diligent follow-up to minimize denials.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow">
              <h4 className="text-lg font-semibold mb-2">4. Reporting</h4>
              <p>Transparent reporting so you always know your practice’s financial health.</p>
            </div>
          </div>
          <a href="/process" className="inline-block mt-8 text-blue-600 font-semibold hover:underline">See Full Process →</a>
        </div>
      </section>

      {/* Contact Preview */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Contact Us</h3>
          <p className="mb-6 text-gray-700">Ready to simplify your billing? Get in touch today.</p>
          <a href="/contact" className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">Send a Message</a>
        </div>
      </section>

      <footer className="bg-blue-700 text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} Rehab Billing Solutions. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Services Page
export function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Our Services</h2>
        <p className="text-lg text-gray-700 mb-12 text-center">We provide comprehensive billing solutions tailored for healthcare providers. Explore our services below:</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Medical Billing</h3>
            <p>We manage claims from submission to payment posting, ensuring faster reimbursements and fewer denials.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Credentialing</h3>
            <p>Our team handles enrollment with payers, so you can focus on patient care while we manage your contracts.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Revenue Cycle Management</h3>
            <p>We oversee the complete financial cycle—from scheduling and insurance verification to collections and reporting.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">Reporting & Analytics</h3>
            <p>Access detailed financial reports to track performance, spot trends, and make informed business decisions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// About Page
export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-lg text-gray-700 mb-6">Rehab Billing Solutions was founded with one mission: to help healthcare providers eliminate the stress of billing so they can focus on patient care. Our team combines years of industry experience with modern tools to deliver efficient, reliable, and HIPAA-compliant solutions.</p>
        <p className="text-lg text-gray-700">We partner with practices of all sizes, providing tailored solutions that increase revenue, reduce denials, and streamline workflows.</p>
      </div>
    </div>
  );
}

// Process Page
export function ProcessPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-center">Our Process</h2>
        <p className="text-lg text-gray-700 mb-12 text-center">Our step-by-step approach ensures smooth billing operations and transparent communication.</p>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">1. Consultation</h3>
            <p>We assess your practice’s unique needs and goals to craft a customized billing plan.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">2. Setup</h3>
            <p>Our credentialing experts and system specialists ensure a seamless onboarding experience.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">3. Billing</h3>
            <p>We manage claims processing, follow-ups, and resubmissions to maximize collections.</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-2">4. Reporting</h3>
            <p>We deliver detailed performance reports so you can monitor your revenue cycle health in real time.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Page
export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 mb-6">We’d love to hear from you. Fill out the form below and we’ll get back to you shortly.</p>
        <form className="grid gap-4 text-left">
          <input type="text" placeholder="Your Name" className="p-3 border rounded-xl" />
          <input type="email" placeholder="Your Email" className="p-3 border rounded-xl" />
          <textarea placeholder="Your Message" className="p-3 border rounded-xl h-32"></textarea>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700">Send Message</button>
        </form>
      </div>
    </div>
  );
}

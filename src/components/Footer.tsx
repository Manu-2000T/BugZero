'use client'

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:mani@bugzero.in?subject=Testing Services Inquiry&body=Hello BugZero Team,%0D%0A%0D%0AI am interested in your software testing services.%0D%0A%0D%0APlease provide more information.%0D%0A%0D%0AThank you!"
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+918310345400"
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BZ</span>
              </div>
              <h3 className="text-xl font-bold heading-gradient">BugZero</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner in software quality assurance. We break it before it breaks you.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">ISO 27001 Certified</p>
              <p className="text-sm text-gray-400">GDPR Compliant</p>
              <p className="text-sm text-gray-400">24/7 Support</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('free-audit')}
                  className="text-gray-400 hover:text-accent-primary transition-colors text-left"
                >
                  Free QA Audit
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Manual Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Automation Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Performance Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Security Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  API Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left"
                >
                  Mobile Testing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">📞</span>
                  <button 
                    onClick={handlePhoneClick}
                    className="hover:text-accent-primary transition-colors"
                  >
                    +91 8310345400
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <span className="text-sm">✉️</span>
                  <button 
                    onClick={handleEmailClick}
                    className="hover:text-accent-primary transition-colors"
                  >
                    mani@bugzero.in
                  </button>
                </div>
              </li>
              <li>
                <div className="flex items-start space-x-2">
                  <span className="text-sm mt-1">📍</span>
                  <span className="text-sm">Bengaluru, Karnataka, India</span>
                </div>
              </li>
              <li>
                <div className="flex items-start space-x-2">
                  <span className="text-sm mt-1">👥</span>
                  <div>
                    <p className="text-sm">Founded by:</p>
                    <p className="text-sm font-medium text-white">Manu T & Mani</p>
                  </div>
                </div>
              </li>
            </ul>

            {/* Business Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg border border-white/10">
              <h5 className="text-sm font-semibold text-white mb-2">Business Hours</h5>
              <div className="text-xs text-gray-400 space-y-1">
                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                <p>Sunday: Closed</p>
                <p className="text-accent-primary font-medium mt-2">
                  Emergency support available 24/7
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} BugZero. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Professional Software Testing Services | Quality Assurance Experts
              </p>
            </div>
            
            <div className="flex items-center space-x-6">
              <button 
                onClick={handleEmailClick}
                className="text-gray-400 hover:text-accent-primary transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button 
                onClick={handleEmailClick}
                className="text-gray-400 hover:text-accent-primary transition-colors text-sm"
              >
                Terms of Service
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-accent-primary/20 text-accent-primary px-4 py-2 rounded-lg text-sm 
                          hover:bg-accent-primary hover:text-white transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex flex-wrap justify-center items-center space-x-8 mt-8 pt-6 border-t border-gray-800">
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>ISO 27001 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>SOC 2 Type II</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
              <span>99.9% Uptime SLA</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
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
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">BZ</span>
              </div>
              <h3 className="text-xl font-bold heading-gradient">BugZero</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your trusted partner in software quality assurance. We break it before it breaks you.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 text-blue-400">
                <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                <span>24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  Contact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('free-audit')}
                  className="text-accent-primary hover:text-accent-secondary transition-colors text-left text-sm font-medium"
                >
                  Free QA Audit
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  Manual Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  Automation Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  Performance Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  Security Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  API Testing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-400 hover:text-white transition-colors text-left text-sm"
                >
                  Mobile Testing
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Get In Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-blue-400 text-sm">📞</span>
                </div>
                <button 
                  onClick={handlePhoneClick}
                  className="text-gray-400 hover:text-accent-primary transition-colors text-sm"
                >
                  +91 8310345400
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-green-400 text-sm">✉️</span>
                </div>
                <button 
                  onClick={handleEmailClick}
                  className="text-gray-400 hover:text-accent-primary transition-colors text-sm"
                >
                  mani@bugzero.in
                </button>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-purple-400 text-sm">📍</span>
                </div>
                <span className="text-gray-400 text-sm">Bengaluru, Karnataka, India</span>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                  <span className="text-orange-400 text-sm">👥</span>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Founded by:</p>
                  <p className="text-white text-sm font-medium">Manu T & Mani</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-accent-primary to-accent-secondary text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-accent-primary/30 transition-all duration-300 transform hover:scale-105"
              >
                Get Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} BugZero. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Professional Software Testing Services | Quality Assurance Experts
              </p>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-6">
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
                className="bg-accent-primary/20 text-accent-primary px-4 py-2 rounded-lg text-sm hover:bg-accent-primary hover:text-white transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* Certifications - Better alignment */}
          <div className="flex flex-wrap justify-center items-center gap-8 mt-8 pt-6 border-t border-gray-800">
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span>GDPR Compliant</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
              <span>24/7 Emergency Support</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-xs">
              <span className="w-2 h-2 bg-accent-primary rounded-full"></span>
              <span>99.9% Bug Detection Rate</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
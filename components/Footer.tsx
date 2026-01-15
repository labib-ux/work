import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, MapPin, Mail, Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-10 relative">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                {/* Left Side: Contact Info */}
                <div>
                    <div className="mb-8">
                        <div className="inline-block mb-6">
                             <Logo className="w-40 h-auto" inverted={true} />
                        </div>
                        <p className="text-gray-400 mb-6 max-w-sm">
                            Specializes in providing high-class tours for those in need. Contact Us for your dream property.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 text-accent mt-1" />
                            <div>
                                <h5 className="font-bold text-white">Head Office</h5>
                                <p className="text-gray-400">{CONTACT_INFO.address}</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <Phone className="w-5 h-5 text-accent mt-1" />
                            <div className="text-gray-400">
                                <p><span className="text-white font-medium">Hotline:</span> {CONTACT_INFO.phone}</p>
                                <p><span className="text-white font-medium">Buy:</span> {CONTACT_INFO.buyProperty}</p>
                                <p><span className="text-white font-medium">Consultancy:</span> {CONTACT_INFO.consultancy}</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <Mail className="w-5 h-5 text-accent mt-1" />
                            <div className="text-gray-400">
                                <p>{CONTACT_INFO.email}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Form & Links */}
                <div>
                     <div className="flex justify-between items-center mb-8">
                         <h3 className="text-2xl font-serif font-bold">Get In Touch</h3>
                         <div className="flex gap-4">
                             <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors"><Facebook className="w-4 h-4"/></a>
                             <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors"><Twitter className="w-4 h-4"/></a>
                             <a href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-accent transition-colors"><Instagram className="w-4 h-4"/></a>
                         </div>
                     </div>

                     <form className="space-y-4 bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Your Name" className="bg-gray-700 border-none rounded p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent outline-none" />
                            <input type="email" placeholder="Your Email" className="bg-gray-700 border-none rounded p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent outline-none" />
                        </div>
                        <input type="text" placeholder="Subject" className="w-full bg-gray-700 border-none rounded p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent outline-none" />
                        <textarea rows={3} placeholder="Message" className="w-full bg-gray-700 border-none rounded p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-accent outline-none"></textarea>
                        
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                            <input type="checkbox" id="terms" className="rounded bg-gray-700 border-none text-accent focus:ring-0" />
                            <label htmlFor="terms">I agree to the Terms and Privacy Policy</label>
                        </div>
                        
                        <button type="submit" className="bg-accent text-white font-bold py-3 px-8 rounded hover:bg-orange-700 transition-colors w-full md:w-auto">
                            Send Message
                        </button>
                     </form>
                </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                <p>Copyright © 2026 | DREAM DALE LTD</p>
                <div className="flex items-center gap-6 mt-4 md:mt-0">
                    <a href="#about" className="hover:text-white">About Us</a>
                    <a href="#" className="hover:text-white">Terms Of Services</a>
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Cookie Policy</a>
                    <button onClick={scrollToTop} className="bg-accent text-white p-2 rounded-full hover:bg-orange-700 transition-colors">
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
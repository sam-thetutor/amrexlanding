import Link from "next/link"
import { Facebook, Twitter, Instagram, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">About</h3>
            <div className="mt-4">
              <Link href="#" className="text-base text-gray-300 hover:text-white block">
                Our Story
              </Link>
              <Link href="#" className="mt-2 text-base text-gray-300 hover:text-white block">
                Team
              </Link>
              <Link href="#" className="mt-2 text-base text-gray-300 hover:text-white block">
                Careers
              </Link>
              <Link href="#" className="mt-2 text-base text-gray-300 hover:text-white block">
                Press
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Resources</h3>
            <div className="mt-4">
              <Link href="#" className="text-base text-gray-300 hover:text-white block">
                Documentation
              </Link>
              <Link href="#" className="mt-2 text-base text-gray-300 hover:text-white block">
                Help Center
              </Link>
              <Link href="#" className="mt-2 text-base text-gray-300 hover:text-white block">
                USSD Commands
              </Link>
              <Link href="#" className="mt-2 text-base text-gray-300 hover:text-white block">
                API
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
            <div className="mt-4">
              <Link href="#" className="text-base text-gray-300 hover:text-white block">
                Privacy Policy
              </Link>
              <Link href="#" className="mt-2 text-base text-gray-300 hover:text-white block">
                Terms of Service
              </Link>
              <Link href="#" className="mt-2 text-base text-gray-300 hover:text-white block">
                Compliance
              </Link>
              <Link href="#" className="mt-2 text-base text-gray-300 hover:text-white block">
                Security
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <div className="mt-4">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-base text-gray-300">info@amrexprotocol.com</span>
              </div>
              <div className="mt-2 flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-base text-gray-300">+256 777 777 777</span>
              </div>
              <div className="mt-4 flex space-x-6">
                <Link href="#" className="text-gray-400 hover:text-gray-300">
                  <Facebook className="h-6 w-6" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-gray-400 hover:text-gray-300">
                  <Instagram className="h-6 w-6" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://x.com/amrexprotocol" className="text-gray-400 hover:text-gray-300">
                  <Twitter className="h-6 w-6" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} Amrex Protocol. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

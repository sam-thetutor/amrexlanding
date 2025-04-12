'use client'

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, Shield, Globe } from "lucide-react"

export default function HeroSection() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="pt-10 sm:pt-16 lg:pt-8 xl:pt-16">
            <div className="sm:text-center lg:text-left px-4 sm:px-8 xl:pl-0">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Crypto for everyone in</span>
                <span className="block text-emerald-600">Africa</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Buy, sell, receive, and send cryptocurrency using just USSD and SMS on your feature phone. No smartphone
                or internet required.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button 
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 md:py-4 md:text-lg md:px-10"
                    onClick={() => {
                      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button
                    onClick={() => {
                      document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    variant="outline"
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-emerald-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 px-4 sm:px-8 xl:pl-0">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-sm text-gray-600">Works on feature phones</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-sm text-gray-600">Secure transactions</span>
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 text-emerald-500 mr-2" />
                <span className="text-sm text-gray-600">Built on Stella blockchain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full bg-emerald-50 flex items-center justify-center">
          <div className="relative w-full h-full max-w-lg">
            <Image
              src="/onlyperson.png?height=600&width=800"
              alt="Feature phone with USSD menu"
              width={800}
              height={600}
              className="object-contain"
              priority
            />
            <div className="absolute -bottom-6 -left-12 bg-white rounded-lg shadow-lg p-4 w-48">
              {/* <div className="text-sm font-medium text-gray-900">Simple USSD Commands</div> */}
              <div className="text-xs text-gray-500 mt-1 mb-1">*384*21324# to access your wallet</div>
            </div>
            <div className="absolute -top-6 -right-14 mt-3 bg-white rounded-lg shadow-lg p-4 w-48">
              <div className="text-sm font-medium text-gray-900">SMS Notifications</div>
              <div className="text-xs text-gray-500 mt-1">Instant transaction alerts</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

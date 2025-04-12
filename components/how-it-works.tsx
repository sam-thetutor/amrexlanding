import Image from "next/image"
import { CheckCircle } from "lucide-react"

export default function HowItWorks() {
  const steps = [
    {
      title: "Dial USSD Code",
      description: "Dial *384*21324# on any feature phone or smartphone to access the  menu.",
      image: "/st1.png?height=300&width=300",
    },
    {
      title: "Register Your Account",
      description: "Create your account with a PIN for secure access to your crypto wallet.",
      image: "/st2.png?height=300&width=300",
    },
    {
      title: "Send & Receive",
      description: "Transfer crypto to other users via phone numbers or wallet addresses.",
      image: "/st3.png?height=300&width=300",
    },
    {
      title: "Manage your wallet through SMS",
      description: "Send and receive crypto through SMS.",
      image: "/st4.png?height=300&width=300",
    },
  ]

  return (
    <div id="how-it-works" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">How It Works</h2>
          {/* <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            
          </p> */}
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Getting started with cryptocurrency has never been easier, even without a smartphone.
          </p>
        </div>

        <div className="mt-16">
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"}`}>
                  <div className="text-lg font-medium text-emerald-600">Step {index + 1}</div>
                  <h3 className="mt-2 text-2xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-3 text-lg text-gray-500">{step.description}</p>
                  <div className="mt-5">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle className="flex-shrink-0 h-5 w-5 text-emerald-500" />
                        <span className="ml-2 text-gray-600">No internet connection needed</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="flex-shrink-0 h-5 w-5 text-emerald-500" />
                        <span className="ml-2 text-gray-600">Works on basic feature phones</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="flex-shrink-0 h-5 w-5 text-emerald-500" />
                        <span className="ml-2 text-gray-600">Secure and reliable</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-10 lg:mt-0 flex-1 flex justify-center">
                  <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px]">
                    <Image 
                      src={step.image || "/placeholder.svg"} 
                      alt={step.title} 
                      fill
                      className="object-contain"
                      sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 500px"
                      priority={index === 0}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

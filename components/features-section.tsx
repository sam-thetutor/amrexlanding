import { Smartphone, Wifi, Clock, Shield, RefreshCw, DollarSign } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      name: "No Internet Required",
      description: "Access cryptocurrency services without internet connectivity using USSD and SMS.",
      icon: Wifi,
    },
    {
      name: "Works on Feature Phones",
      description: "No smartphone needed. Use any basic phone with USSD capability.",
      icon: Smartphone,
    },
    {
      name: "Instant Transactions",
      description: "Send and receive crypto quickly with real-time SMS notifications.",
      icon: Clock,
    },
    {
      name: "Secure by Design",
      description: "Built on the Stella blockchain with robust security protocols.",
      icon: Shield,
    },
    {
      name: "Buy & Sell Crypto",
      description: "Exchange local currency for cryptocurrency and vice versa.",
      icon: RefreshCw,
    },
    {
      name: "Low Transaction Fees",
      description: "Affordable fees to make crypto accessible to everyone.",
      icon: DollarSign,
    },
  ]

  return (
    <div id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Crypto for Everyone, Everywhere
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Amrex Protocol brings cryptocurrency to millions of Africans using the technology they already have.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-emerald-500 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
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

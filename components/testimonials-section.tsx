import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      content:
        "Amrex has changed how I do business. I can now receive payments from international clients without a bank account or smartphone.",
      author: "Emmanuel Okafor",
      role: "Small Business Owner",
      location: "Lagos, Nigeria",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "I never thought I could use cryptocurrency with my old Nokia phone. Amrex made it possible and now I can send money to my family instantly.",
      author: "Grace Mwangi",
      role: "Teacher",
      location: "Nairobi, Kenya",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      content:
        "The simplicity of using USSD codes to access crypto services is revolutionary. This is financial inclusion at its best.",
      author: "Kofi Mensah",
      role: "Farmer",
      location: "Accra, Ghana",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div id="testimonials" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-emerald-600 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Users Across Africa
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Hear from people who have transformed their financial lives with Amrex Protocol.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.author} className="bg-white rounded-xl shadow-sm p-8 border border-gray-100">
              <div className="flex items-center space-x-1 text-emerald-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="mt-4 text-gray-600 italic">"{testimonial.content}"</p>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                  <div className="text-xs text-gray-500">
                    {testimonial.role}, {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

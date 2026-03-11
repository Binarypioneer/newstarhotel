"use client"

import { useState } from "react"
import { SearchForm } from "@/components/search-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MapPin, Phone, Mail, Wifi, Car, Coffee, Wind, Tv, MapPinned, Quote, Search } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Gallery } from "@/components/Gallery"
import { JsonLd } from "@/components/json-ld"
import { Anchor, Bird, Palmtree, Map, Train, Plane, Bus, Waves, HelpCircle, Info } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

export default function HomePage() {
  const [searchData, setSearchData] = useState<any>(null)

  const handleSearch = async (data: { checkIn: string; checkOut: string; adults: number; children: number }) => {
    setSearchData(data)
    // Navigate to rooms page with search params
    const params = new URLSearchParams({
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      adults: data.adults.toString(),
      children: data.children.toString(),
    })
    window.location.href = `/rooms?${params.toString()}`
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative h-[800px] flex items-center justify-center pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed-background"
          style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
        />

        {/* Dark Overlay with Advanced Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 flex flex-col items-center">
          {/* Heading */}
          <div className="text-center mb-12 space-y-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-2xl">
              O New Star Lodge: The Best Budget Hotel in Chilika for a Memorable Stay
            </h1>
            <p className="text-white/90 text-xl md:text-2xl font-light tracking-wide drop-shadow-lg max-w-2xl mx-auto">
              Your Sanctuary of Comfort in the Heart of the City. The preferred **lodge in Chilika** for tourists and travelers.
            </p>
          </div>

          {/* Search Form Container */}
          <div className="w-full max-w-[1000px] bg-white rounded-2xl shadow-2xl p-8 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300 transform hover:scale-[1.01] transition-transform">
            <SearchForm onSearch={handleSearch} />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 skew-x-12 translate-x-32 -z-10" />

        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">About Our Legacy</h2>
            <div className="w-24 h-1.5 bg-[#2671D9] mx-auto rounded-full mb-6" />
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
              Discover the story behind O New Star Hotel, where tradition meets modern comfort.
            </p>
          </div>

          <div className="max-w-7xl mx-auto mb-16 grid lg:grid-cols-2 gap-16 items-center">
            {/* Images - Creative Layout */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <img
                  src="/images/about-2.png"
                  alt="Deluxe AC Room at O New Star Lodge - Best Hotel in Chilika"
                  className="w-full h-[320px] object-cover rounded-2xl shadow-lg transform translate-y-8 hover:translate-y-6 transition-all duration-500"
                />
                <img
                  src="/images/about-1.png"
                  alt="Comfortable stay near Chilika Lake at O New Star Hotel"
                  className="w-full h-[320px] object-cover rounded-2xl shadow-lg -translate-y-8 hover:-translate-y-6 transition-all duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Comfort Meets{" "}
                  <span className="text-[#2671D9]">Affordability</span>
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-[#2671D9] pl-6 italic">
                  "Welcome to O New Star Hotel, where we are dedicated to providing exceptional hospitality and creating
                  memorable experiences for our guests. Since our establishment, we have been committed to offering the
                  perfect blend of comfort, convenience, and value."
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid - Modern Cards - Full Width Row */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { icon: Car, label: "Free Parking" },
                { icon: Coffee, label: "Breakfast" },
                { icon: Wind, label: "AC Rooms" },
                { icon: Tv, label: "Smart TV" },
                { icon: MapPinned, label: "Prime Loc." },
                { icon: Wifi, label: "Free WiFi" },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-gray-100 p-4 rounded-xl shadow-sm hover:shadow-lg hover:border-[#2671D9]/20 transition-all duration-300 hover:-translate-y-1 cursor-default flex flex-col items-center justify-center gap-2"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-50 group-hover:bg-[#2671D9] transition-colors duration-300 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-[#2671D9] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="font-semibold text-sm text-gray-700 group-hover:text-[#2671D9] transition-colors whitespace-nowrap">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">What Our Guests Say</h2>
            <p className="text-gray-600">Real experiences from happy guests</p>
          </div>

          <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <Card className="group bg-white border-gray-200 shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Quote className="w-5 h-5 text-[#2671D9] transition-colors group-hover:text-[#1f5fb4]" />
                  Comfortable and Clean Rooms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  I had a wonderful stay! The room was spotless, the bed was
                  comfortable, and the staff were very helpful. Great value for money.
                </p>
                <p className="mt-4 font-semibold text-gray-900">— Priya S.</p>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="group bg-white border-gray-200 shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Quote className="w-5 h-5 text-[#2671D9] transition-colors group-hover:text-[#1f5fb4]" />
                  Perfect Location and Amenities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  The hotel is in a central location with easy access to transport.
                  WiFi was fast and the AC kept the room cool throughout.
                </p>
                <p className="mt-4 font-semibold text-gray-900">— Arjun K.</p>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="group bg-white border-gray-200 shadow-md transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <Quote className="w-5 h-5 text-[#2671D9] transition-colors group-hover:text-[#1f5fb4]" />
                  Friendly Staff and Great Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  The team went above and beyond to make our stay pleasant.
                  Quick check-in and prompt support whenever we needed anything.
                </p>
                <p className="mt-4 font-semibold text-gray-900">— Neha R.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Gallery />

      {/* Location Section */}
      <section id="location" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Location</h2>
            <div className="w-24 h-1.5 bg-[#2671D9] rounded-full mb-12" />

            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Location Info */}
              <div className="space-y-8">
                <p className="text-gray-600 text-lg leading-relaxed border-l-4 border-blue-500 pl-6">
                  Conveniently located near Chilka Railway Station in Balugaon, with easy access to public transport and
                  local attractions.
                </p>

                <div className="grid gap-6">
                  {/* Address */}
                  <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#2671D9]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-lg">Address</h4>
                      <p className="text-gray-600">
                        Plot No-68/1858, City - Balugaon,
                        <br />
                        Near Chilka Railway Station,
                        <br />
                        Dist - Khordha, Balugaon
                      </p>
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#2671D9]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-lg">Contact</h4>
                      <p className="text-gray-600">
                        +91 80184 07510
                        <br />
                        +91 78490 79230
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#2671D9]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-lg">Email</h4>
                      <p className="text-gray-600">contact@onewstar.in</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="h-[500px] rounded-[2rem] overflow-hidden border-8 border-gray-50 shadow-2xl group relative">
                <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119540.68319568652!2d85.19332234335938!3d19.79013960000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19c7a5e5b5e5e5%3A0x5e5e5e5e5e5e5e5e!2sChilka%20Railway%20Station!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-700 h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section (SEO Optimized & Premium UI) */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Abstract background blobs */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6">
              <HelpCircle className="w-4 h-4" />
              Common Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Everything You Need to Know
            </h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                q: "Best time to visit Chilika Lake?",
                a: "November to February is peak season for migratory birds. The weather is perfect for temple tours and dolphin spotting."
              },
              {
                q: "Location from Railway Station?",
                a: "O New Star Lodge is located just minutes from Balugaon (Chilika) Station, making us the top choice for travelers."
              },
              {
                q: "Do you have AC Family Rooms?",
                a: "Yes, our spacious AC suites are designed for families, offering comfort and premium amenities at budget prices."
              },
              {
                q: "Boat Booking Assistance?",
                a: "Our desk assists with verified boat bookings to Kalijai Temple and Dolphin viewpoints to ensure you get the best rates."
              }
            ].map((faq, i) => (
              <div 
                key={i} 
                className="group p-8 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <span className="text-xl font-bold">?</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{faq.q}</h4>
                    <p className="text-gray-600 leading-relaxed italic border-l-2 border-blue-100 pl-4">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern High-Convert CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative rounded-[2.5rem] bg-slate-900 overflow-hidden px-8 py-16 md:p-20 text-center text-white">
            <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/90" />
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-8">
              <h2 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
                Ready to Experience <span className="text-blue-400">Chilika</span> Like Never Before?
              </h2>
              <p className="text-xl text-gray-300 font-light">
                Join thousands of happy guests who chose comfort and affordability at O New Star Hotel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link href="/rooms">
                  <Button className="w-full sm:w-auto h-16 px-10 rounded-full bg-blue-600 hover:bg-blue-700 text-lg font-bold shadow-2xl shadow-blue-500/20 transform hover:scale-105 transition-all">
                    Book Your Stay Now
                  </Button>
                </Link>
                <Button variant="outline" className="w-full sm:w-auto h-16 px-10 rounded-full bg-white/10 hover:bg-white/20 border-white/20 text-white text-lg backdrop-blur-md">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
      
      {/* SEO: JSON-LD Structured Data */}
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": ["Hotel", "LocalBusiness"],
        "name": "O New Star Lodge",
        "image": "https://onewstar.in/images/hero-bg.jpg",
        "@id": "https://onewstar.in",
        "url": "https://onewstar.in",
        "telephone": "+91 80184 07510",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plot No-68/1858, Near Chilka Railway Station",
          "addressLocality": "Balugaon",
          "addressRegion": "Odisha",
          "postalCode": "752030",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 19.7901396,
          "longitude": 85.1933223
        },
        "priceRange": "₹-₹₹",
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Free WiFi", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "AC Rooms", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Free Parking", "value": true }
        ]
      }} />
      
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the best time to visit Chilika Lake?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The best time to visit Chilika Lake is between November and February when migratory birds arrive from Siberia."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a good boutique lodge in Chilika near the railway station?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, O New Star Lodge is located right near Chilika Railway Station (Balugaon), offering budget AC rooms and premium services."
            }
          }
        ]
      }} />
    </div>
  )
}

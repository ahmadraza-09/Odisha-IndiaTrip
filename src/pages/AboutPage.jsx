import {
  Users,
  MapPin,
  Car,
  Award,
  Heart,
  Shield,
  Target,
  Globe,
} from 'lucide-react';
import SEO from "../components/SEO"

import AboutCover from '../assets/about-cover.webp'
import JagannathTemple from '../assets/jagannath-puri-temple-odisha.webp'
import Tribe from '../assets/Tribes-of-Odisha.webp'
import Beach from '../assets/Puri-Sea-Beach.webp'
import Wildlife from '../assets/wildlife.webp'

const stats = [
  { value: '10,000+', label: 'Happy Travelers', icon: Users },
  { value: '500+', label: 'Tours Completed', icon: MapPin },
  { value: '50+', label: 'Own Vehicles', icon: Car },
  { value: '9+', label: 'Years of Trust', icon: Award },
];


const values = [
  {
    icon: Heart,
    title: 'Passion for Odisha',
    desc: 'We are not just a travel company — we are proud Odias who love sharing our homeland\'s beauty, spirituality, and culture with the world.',
  },
  {
    icon: Shield,
    title: 'Trust & Transparency',
    desc: 'No hidden costs, no bait-and-switch, no third-party handoffs. What we promise is exactly what you get, from the first call to the final drop-off.',
  },
  {
    icon: Target,
    title: 'Local Expertise',
    desc: 'Our team has deep roots in every destination we operate. We know the best temples, the hidden waterfalls, the tribal haats, and the secret food spots.',
  },
  {
    icon: Globe,
    title: 'Responsible Tourism',
    desc: 'We work with tribal communities, support local artisans, and follow eco-friendly practices. Your trip directly benefits the people and places you visit.',
  },
];

const team = [
  {
    name: 'Rajesh Patra',
    role: 'Founder & CEO',
    desc: 'Born in Puri, Rajesh has spent 15 years in Odisha tourism. He founded Odisha Indiatrip to give travelers the authentic experience that big aggregators cannot provide.',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Smita Mohanty',
    role: 'Head of Operations',
    desc: 'Smita ensures every tour runs like clockwork — from vehicle dispatch to hotel check-ins. She has personally managed over 1,000 tours across Odisha.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Debashis Das',
    role: 'Lead Tour Guide',
    desc: 'A certified archaeologist and temple historian, Debashis brings Odisha\'s ancient heritage to life with stories that no guidebook can offer.',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    name: 'Ananya Mishra',
    role: 'B2B Partnerships',
    desc: 'Ananya manages our travel agent and DMC partnerships across India and abroad. She ensures seamless coordination for group and corporate tours.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

const AboutPage = () => {
  
  return (
    <>
    <SEO
    title="About Odisha IndiaTrip Pvt. Ltd. | Trusted Odisha Travel Agency"
    description="Learn about Odisha Indiatrip Pvt. Ltd., Odisha’s trusted travel agency offering Jagannath Puri tours, Odisha holiday packages, Chilika trips, tribal tours, family vacations, and local travel experiences."
    keywords="about Odisha Indiatrip, Odisha travel agency, Odisha tourism company, Puri travel agency, Odisha holiday packages, Odisha DMC, Jagannath tour operator, Odisha local travel experts, Odisha family trip, Odisha tourism"
    url="https://odishaindiatrip.com/about"
  />
    <div className="pt-24">
      
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={AboutCover}
            alt="About Cover Image"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/70 via-navy-950/60 to-navy-950/90" />
        </div>

        <div className="relative z-10 py-16 sm:py-24">
          <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/15 text-amber-400 text-sm font-semibold mb-4">
              Our Story
            </span>

            <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
              About Odisha Indiatrip
            </h1>

            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              We are Odisha&apos;s most trusted local DMC — operated by people who
              call this land home, for travelers who want more than just a tour.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                Who We Are
              </span>

              <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
                Born in Odisha, Built for Odisha
              </h2>

              <p className="text-navy-500 text-base leading-relaxed mb-4">
                Odisha Indiatrip was founded in 2015 with a simple belief: the best
                way to experience Odisha is through the eyes of someone who
                lives and breathes this land. We are not a marketplace that
                resells someone else&apos;s tour. We are the operators on the ground —
                with our own fleet of 50+ vehicles, our own trained guides, and
                our own relationships with hotels, temples, and tribal
                communities.
              </p>

              <p className="text-navy-500 text-base leading-relaxed mb-4">
                Over the past 9 years, we have hosted over 10,000 travelers from
                across India and 25+ countries. From VIP Jagannath Temple
                darshan to deep tribal expeditions in Koraput, from Chilika
                dolphin spotting to Bhitarkanika crocodile safaris — we have done
                it all, and we do it better than anyone because this is our home.
              </p>

              <p className="text-navy-500 text-base leading-relaxed">
                {/* We are proud members of IATO (Indian Association of Tour
                Operators) and are recognized by the Department of Tourism,
                Government of Odisha.  */}
                Our B2B partners trust us for consistent
                quality, transparent pricing, and 24/7 on-ground support.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src={JagannathTemple}
                alt="Jagannath Temple Image"
                className="rounded-2xl object-cover w-full h-48"
              />

              <img
                src={Wildlife}
                alt="Wildlife Image"
                className="rounded-2xl object-cover w-full h-48 mt-8"
              />

              <img
                src={Tribe}
                alt="Tribe Image"
                className="rounded-2xl object-cover w-full h-48"
              />

              <img
                src={Beach}
                alt="Beach Image"
                className="rounded-2xl object-cover w-full h-48 mt-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="gradient-navy py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-8 h-8 text-amber-400 mx-auto mb-3" />
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="section-padding bg-slate-50">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
              What Drives Us
            </span>

            <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <v.icon className="w-6 h-6 text-amber-600" />
                </div>

                <h3 className="font-display font-bold text-navy-900 mb-2">
                  {v.title}
                </h3>

                <p className="text-navy-500 text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
              The People Behind Your Trip
            </span>

            <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
              Meet Our Team
            </h2>

            <p className="text-navy-500 text-lg leading-relaxed">
              Every member of our team is an Odisha specialist — not a
              generalist, not a call center agent, but someone who knows this
              land intimately.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-amber-100"
                />

                <h3 className="font-display font-bold text-navy-900 mb-0.5">
                  {member.name}
                </h3>

                <p className="text-amber-600 text-sm font-semibold mb-3">
                  {member.role}
                </p>

                <p className="text-navy-500 text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="gradient-amber py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">
            Ready to Experience the Real Odisha?
          </h2>

          <p className="text-navy-800/70 text-lg max-w-xl mx-auto mb-8">
            Let our local experts craft your perfect itinerary. No templates, no
            compromises — just the Odisha we know and love.
          </p>

          <a
            href="tel:+919958826437"
            className="btn-secondary px-8 py-3.5 text-sm"
          >
            Call Us: +91 99588 26437
          </a>
        </div>
      </div>
    </div>
    </>
  );
};

export default AboutPage;
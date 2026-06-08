import { Link } from 'react-router-dom';
import {
    Star,
    Hotel,
    Car,
    UtensilsCrossed,
    Camera,
    MapPin,
    Clock,
    Calendar,
    Users,
    ArrowRight,
    CheckCircle,
    AlertTriangle,
} from 'lucide-react';
import { allPackages } from '../data/content';
import RathYatraImage from '../assets/Jagannath-Rath-Yatra-Puri-Odisha-1.webp'
import SEO from '../components/SEO.jsx'

const rathYatraPackage = allPackages.find(
    (p) => p.id === 'rath-yatra-3n-4d'
);

const includeIcons = [
    { key: 'hotel', icon: Hotel, label: 'Hotel' },
    { key: 'cab', icon: Car, label: 'Cab' },
    { key: 'meals', icon: UtensilsCrossed, label: 'Meals' },
    { key: 'sightseeing', icon: Camera, label: 'Sightseeing' },
];

const rituals = [
    {
        title: 'Snana Purnima',
        date: 'June 11, 2026',
        desc: 'The grand bathing ceremony where the deities are bathed with 108 pots of sacred water. After this ritual, the deities enter Anasara (seclusion) for about 15 days.',
        icon: Calendar
    },
    {
        title: 'Pahandi — The Grand Procession',
        date: 'July 16, 2026',
        desc: 'Lord Jagannath, Balabhadra, and Subhadra are ceremonially carried from the sanctum to their respective chariots in a rhythmic and majestic procession.',
        icon: Users
    },
    {
        title: 'Rath Yatra — Chariot Pulling',
        date: 'July 16, 2026',
        desc: 'Millions of devotees pull the three grand chariots along Bada Danda from Shri Jagannath Temple to Gundicha Temple. The Gajapati King performs the sacred Chhera Pahanra ritual before the journey begins.',
        icon: MapPin
    },
    {
        title: 'Gundicha Stay',
        date: 'July 16 – July 24, 2026',
        desc: 'The deities stay at Gundicha Temple, where devotees can offer prayers and witness special rituals during their visit.',
        icon: Clock
    },
    {
        title: 'Bahuda Yatra — Return Journey',
        date: 'July 24, 2026',
        desc: 'The return journey from Gundicha Temple to Shri Jagannath Temple. On the way, Lord Jagannath visits Mausi Maa Temple and is offered the famous Poda Pitha.',
        icon: ArrowRight
    },
    {
        title: 'Suna Besha — Gold Attire',
        date: 'July 25, 2026',
        desc: 'The deities are adorned with magnificent gold ornaments while seated on their chariots, creating one of the most spectacular sights of the festival.',
        icon: Star
    }
];

const chariots = [
    {
        name: 'Nandighosa',
        deity: 'Lord Jagannath',
        height: '45.6 ft',
        wheels: 16,
        color: 'Yellow & Red',
        guard: 'Garuda'
    },
    {
        name: 'Taladhwaja',
        deity: 'Lord Balabhadra',
        height: '45 ft',
        wheels: 14,
        color: 'Green & Red',
        guard: 'Vasudeva'
    },
    {
        name: 'Darpadalana',
        deity: 'Devi Subhadra',
        height: '44.6 ft',
        wheels: 12,
        color: 'Black & Red',
        guard: 'Jayadurga'
    }
];
const tips = [
    'Book hotels 3-4 months in advance — Puri sells out fast for Rath Yatra',
    'Carry minimal valuables — crowds can exceed 1 million people',
    'Stay hydrated and wear comfortable walking shoes',
    'Follow instructions of temple administration and police',
    'Keep your group together — set a meeting point in case of separation',
    'Do not climb on the chariots — it is prohibited by the temple administration',
    'Carry cash — ATMs may have long queues or run out of cash',
    'Register with your tour operator for emergency contact details',
];

const RathYatraPage = ({ onOpenInquiry }) => {
    return (
        <div className="pt-24">
            <SEO
                title="Rath Yatra 2026 Puri Odisha | Dates, Schedule, Rituals & Tour Packages"
                description="Plan your Rath Yatra 2026 pilgrimage to Puri. Explore festival dates, Pahandi, Bahuda Yatra, Suna Besha, chariot details, travel tips, and exclusive Odisha Rath Yatra tour packages."
                keywords="Rath Yatra 2026 Puri, Jagannath Rath Yatra, Rath Yatra schedule 2026, Puri Odisha festival, Bahuda Yatra 2026, Suna Besha 2026, Jagannath Temple tour, Odisha pilgrimage tour, Rath Yatra package"
                url="https://odishaindiatrip.com/rath-yatra"
            />
            {/* Hero */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0">
                    <img src={RathYatraImage} alt="" className="w-full h-full object-cover object-top" />
                    <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950/95" />
                </div>
                <div className="relative z-10 py-16 sm:py-24">
                    <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/20 text-red-300 text-sm font-semibold mb-4">
                            Festival of the Year
                        </span>
                        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                            Rath Yatra 2026
                        </h1>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto mb-6">
                            The world's oldest and grandest chariot festival — witness Lord
                            Jagannath's majestic procession through the streets of Puri.
                        </p>
                        <div className="flex items-center justify-center gap-6 text-white/70 text-sm flex-wrap">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4 text-amber-400" />
                                <span>July 16, 2026</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-amber-400" />
                                <span>Puri, Odisha</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-amber-400" />
                                <span>1M+ Devotees</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* About Rath Yatra */}
            <div className="section-padding bg-white">
                <div className="container-max">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">
                                5,000+ Year Tradition
                            </span>
                            <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">What is Rath Yatra?</h2>
                            <p className="text-navy-500 text-base leading-relaxed mb-4">
                                The Rath Yatra (Chariot Festival) of Puri is the world's oldest and largest chariot procession, dating back over 5,000 years. Every year, Lord Jagannath, Lord Balabhadra, and Devi Subhadra leave their sanctum and travel in magnificent wooden chariots along Grand Road (Bada Danda) to the Gundicha Temple, 3 km away.
                            </p>
                            <p className="text-navy-500 text-base leading-relaxed mb-4">
                                The festival symbolizes the Lord's desire to visit his devotees who may not be able to come to the temple. It is the only time when the deities come out and mingle with the masses — everyone is welcome to pull the chariots.
                            </p>
                            <p className="text-navy-500 text-base leading-relaxed">
                                The three chariots are built fresh every year from neem wood by specialized carpenter families who have held this hereditary duty for centuries. After the festival, the wood is used as firewood in the temple kitchen — nothing goes to waste.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200">
                                <h3 className="font-display font-bold text-navy-900 text-lg mb-3">Rath Yatra 2026 Dates</h3>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-navy-600">Snana Purnima</span>
                                        <span className="font-semibold text-navy-900">June 11, 2026</span>
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span className="text-navy-600">Rath Yatra (Main Day)</span>
                                        <span className="font-semibold text-amber-600">July 16, 2026</span>
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span className="text-navy-600">Bahuda Yatra (Return)</span>
                                        <span className="font-semibold text-navy-900">July 24, 2026</span>
                                    </div>

                                    <div className="flex justify-between text-sm">
                                        <span className="text-navy-600">Suna Besha (Gold Attire)</span>
                                        <span className="font-semibold text-navy-900">July 25, 2026</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 rounded-2xl bg-red-50 border border-red-200">
                                <h3 className="font-display font-bold text-navy-900 text-lg mb-2">Key Numbers</h3>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div>
                                        <span className="text-red-600 font-bold text-xl">1.5M+</span>
                                        <br />
                                        <span className="text-navy-500">Devotees</span>
                                    </div>

                                    <div>
                                        <span className="text-red-600 font-bold text-xl">3</span>
                                        <br />
                                        <span className="text-navy-500">Chariots</span>
                                    </div>

                                    <div>
                                        <span className="text-red-600 font-bold text-xl">3 km</span>
                                        <br />
                                        <span className="text-navy-500">Procession Route</span>
                                    </div>

                                    <div>
                                        <span className="text-red-600 font-bold text-xl">9 Days</span>
                                        <br />
                                        <span className="text-navy-500">At Gundicha Temple</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* The Three Chariots */}
            <div className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">The Divine Chariots</span>
                        <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">The Three Chariots of Rath Yatra</h2>
                        <p className="text-navy-500 text-lg leading-relaxed">
                            Each deity has their own magnificent chariot, built fresh every year from sacred neem wood.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {chariots.map((ch) => (
                            <div key={ch.name} className="bg-white rounded-2xl border border-slate-100 overflow-hidden card-hover shadow-sm p-6">
                                <h3 className="font-display text-xl font-bold text-navy-900 mb-1">{ch.name}</h3>
                                <p className="text-amber-600 text-sm font-semibold mb-4">{ch.deity}</p>
                                <div className="grid grid-cols-2 gap-3 text-sm">
                                    <div className="p-3 rounded-lg bg-slate-50"><p className="text-navy-400 text-xs mb-0.5">Height</p><p className="font-bold text-navy-900">{ch.height}</p></div>
                                    <div className="p-3 rounded-lg bg-slate-50"><p className="text-navy-400 text-xs mb-0.5">Wheels</p><p className="font-bold text-navy-900">{ch.wheels}</p></div>
                                    <div className="p-3 rounded-lg bg-slate-50"><p className="text-navy-400 text-xs mb-0.5">Color</p><p className="font-bold text-navy-900">{ch.color}</p></div>
                                    <div className="p-3 rounded-lg bg-slate-50"><p className="text-navy-400 text-xs mb-0.5">Guard</p><p className="font-bold text-navy-900">{ch.guard}</p></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Rituals Timeline */}
            <div className="section-padding bg-white">
                <div className="container-max">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-4">Sacred Sequence</span>
                        <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">Rituals & Timeline</h2>
                    </div>
                    <div className="max-w-3xl mx-auto space-y-4">
                        {rituals.map((ritual) => (
                            <div key={ritual.title} className="flex gap-4 p-5 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                                    <ritual.icon className="w-6 h-6 text-amber-600" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                                        <h3 className="font-display font-bold text-navy-900">{ritual.title}</h3>
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-700">{ritual.date}</span>
                                    </div>
                                    <p className="text-navy-500 text-sm leading-relaxed">{ritual.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Package */}
            {rathYatraPackage && (
                <div className="section-padding gradient-navy relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
                    <div className="container-max relative z-10">
                        <div className="text-center max-w-2xl mx-auto mb-14">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/15 text-red-300 text-sm font-semibold mb-4">Limited Availability</span>
                            <h2 className="font-display text-3xl font-bold text-white mb-4">Rath Yatra Special Package</h2>
                            <p className="text-white/60 text-lg leading-relaxed">Our curated package ensures you don't just watch — you experience every sacred moment with expert guidance.</p>
                        </div>
                        <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xl max-w-4xl mx-auto">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                                <div className="relative image-zoom aspect-video lg:aspect-auto">
                                    <img src={rathYatraPackage.image} alt={rathYatraPackage.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-4 left-4">
                                        <span className={`${rathYatraPackage.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-md`}>{rathYatraPackage.badge}</span>
                                    </div>
                                </div>
                                <div className="lg:col-span-2 p-6 lg:p-8">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="font-display text-xl font-bold text-navy-900 mb-1">{rathYatraPackage.title}</h3>
                                            <span className="text-navy-400 text-sm">{rathYatraPackage.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg">
                                            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                                            <span className="text-navy-900 text-sm font-bold">{rathYatraPackage.rating}</span>
                                            <span className="text-navy-400 text-xs">({rathYatraPackage.reviews})</span>
                                        </div>
                                    </div>
                                    <p className="text-navy-500 text-sm leading-relaxed mb-4">{rathYatraPackage.description}</p>
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {rathYatraPackage.itinerary.map((place) => (
                                            <span key={place} className="px-2.5 py-1 bg-slate-50 text-navy-600 text-xs font-medium rounded-md">{place}</span>
                                        ))}
                                    </div>
                                    <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-100">
                                        {includeIcons.map((item) => (
                                            <div key={item.key} className={`flex items-center gap-1 text-xs ${rathYatraPackage.includes[item.key] ? 'text-emerald-600' : 'text-slate-300'}`}>
                                                <item.icon className="w-3.5 h-3.5" /><span className="font-medium">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-navy-900 text-sm mb-2">Day-wise Itinerary</h4>
                                        <div className="space-y-2">
                                            {rathYatraPackage.dayPlan.map((day) => (
                                                <div key={day.day} className="flex gap-3 text-sm">
                                                    <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold flex-shrink-0">{day.day}</span>
                                                    <div>
                                                        <span className="font-medium text-navy-900">{day.title}</span>
                                                        <span className="text-navy-400"> — {day.detail.substring(0, 100)}...</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="flex items-end justify-between">
                                        <div>
                                            <p className="text-xs text-navy-400 mb-1">Starting from</p>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-2xl font-bold text-navy-900">₹{rathYatraPackage.price}</span>
                                                <span className="text-sm text-navy-400 line-through">₹{rathYatraPackage.originalPrice}</span>
                                            </div>
                                            <p className="text-xs text-navy-400">Per Person</p>
                                        </div>
                                        <div className="flex gap-3">
                                            <Link to={`/packages/${rathYatraPackage.id}`} className="btn-outline text-sm py-2.5">View Details</Link>
                                            <button onClick={onOpenInquiry} className="btn-primary text-sm py-2.5">Book Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* What's Included */}
            <div className="section-padding bg-slate-50">
                <div className="container-max">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">What Our Rath Yatra Package Includes</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: Hotel, title: 'Premium Hotel', desc: 'Guaranteed hotel room in Puri during the festival — booked months in advance' },
                            { icon: MapPin, title: 'Premium Viewing Spot', desc: 'Reserved viewing gallery or balcony access for the chariot procession' },
                            { icon: Users, title: 'Expert Festival Guide', desc: 'A local pandit-guide who explains every ritual, legend, and significance' },
                            { icon: Car, title: 'AC Cab Transfers', desc: 'Airport/railway pickups and all local transfers in AC vehicles' },
                            { icon: UtensilsCrossed, title: 'Meals Included', desc: 'Daily breakfast and dinner — including the sacred Mahaprasad experience' },
                            { icon: Camera, title: 'Festival Photography', desc: 'Guidance on the best photo spots and assistance with temple photography rules' },
                        ].map((item) => (
                            <div key={item.title} className="p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500">
                                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                                    <item.icon className="w-6 h-6 text-amber-600" />
                                </div>
                                <h3 className="font-display font-bold text-navy-900 mb-2">{item.title}</h3>
                                <p className="text-navy-500 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Safety Tips */}
            <div className="section-padding bg-white">
                <div className="container-max max-w-3xl">
                    <div className="p-8 rounded-2xl bg-amber-50 border border-amber-200">
                        <div className="flex items-center gap-3 mb-5">
                            <AlertTriangle className="w-6 h-6 text-amber-600" />
                            <h2 className="font-display text-2xl font-bold text-navy-900">Important Tips for Rath Yatra</h2>
                        </div>
                        <div className="space-y-3">
                            {tips.map((tip) => (
                                <div key={tip} className="flex gap-3">
                                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <p className="text-navy-600 text-sm leading-relaxed">{tip}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="gradient-amber py-16">
                <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="font-display text-3xl font-bold text-navy-900 mb-4">Don't Miss the Grandest Festival on Earth</h2>
                    <p className="text-navy-800/70 text-lg max-w-xl mx-auto mb-8">
                        Rath Yatra 2026 is on June 27. Hotels sell out by March. Book now to secure your spot.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button onClick={onOpenInquiry} className="btn-secondary px-8 py-3.5 text-sm">Book Rath Yatra Package</button>
                        <a href="tel:+919958826437" className="btn-outline border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white px-8 py-3.5 text-sm">Call: +91 99588 26437</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RathYatraPage;
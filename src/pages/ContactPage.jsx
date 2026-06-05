import { useState } from 'react';
import emailjs from '@emailjs/browser';
import {
    User,
    Phone,
    Mail,
    Users,
    MessageSquare,
    Send,
    CheckCircle,
} from 'lucide-react';
import ContactImage from "../assets/eco-retreat/konark.webp"
import AboutCover from '../assets/about-cover.webp'
import SEO from '../components/SEO'
import { Link } from 'react-router-dom';

const ContactPage = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        travelers: '',
        message: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone.trim())) {
            newErrors.phone = 'Enter a valid phone number';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = 'Enter a valid email';
        }

        if (!formData.travelers.trim()) {
            newErrors.travelers = 'Number of travelers is required';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validate()) return;

        setLoading(true);

        try {
            await emailjs.send(
                'service_q7cgd5b',
                'template_cly0rgq',
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    phone: formData.phone,
                    travelers: formData.travelers,
                    message: formData.message,
                },
                'c9pWjFmgPHhbfiV2T'
            );

            setSubmitted(true);

            setFormData({
                name: '',
                phone: '',
                email: '',
                travelers: '',
                message: '',
            });
        } catch (error) {
            console.error(error);
            alert('Failed to send enquiry.');
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));

        if (errors[field]) {
            setErrors((prev) => {
                const next = { ...prev };
                delete next[field];
                return next;
            });
        }
    };

    if (submitted) {
        return (
            <div className="bg-white rounded-2xl shadow-lg p-10 text-center pt-24">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>

                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                    Enquiry Sent Successfully!
                </h3>

                <p className="text-slate-600">
                    Our travel experts will contact you shortly.
                </p>
            </div>
        );
    }

    return (
        <section className="bg-slate-50 pt-24">
            <SEO
                title="Contact Odisha Indiatrip | Odisha Travel Experts"
                description="Get in touch with Odisha Indiatrip for customized Odisha tour packages, hotel bookings, cab services, pilgrimage tours, family vacations, and travel assistance across Odisha."
                keywords="contact us Odisha Indiatrip, Odisha travel experts, Odisha tour booking, Odisha tourism packages, Puri Jagannath tour operator, Odisha vacation planner, Odisha cab booking, Odisha hotel booking"
                url="https://odishaindiatrip.com/contact"
            />
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
                            Contact Us
                        </span>

                        <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
                            Get In Touch
                        </h1>

                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Have questions about Odisha tour packages, hotels, transport, or custom trips? Our travel experts are here to help.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* Left Side Image - Hidden on Mobile */}
                    <div className="hidden lg:block my-10">
                        <img
                            src={ContactImage}
                            alt="Odisha Tour"
                            className="w-full h-[750px] object-cover rounded-3xl shadow-xl"
                        />
                    </div>

                    {/* Right Side Form */}
                    <div className="w-full">
                        {submitted ? (
                            <div className="bg-white rounded-2xl shadow-lg p-10 text-center">
                                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                                </div>

                                <h3 className="text-2xl font-bold text-navy-900 mb-2">
                                    Enquiry Sent Successfully!
                                </h3>

                                <p className="text-slate-600">
                                    Our travel experts will contact you shortly.
                                </p>
                            </div>
                        ) : (
                            <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8">
                                <div className="mb-8">
                                    <span className="text-amber-500 font-semibold uppercase tracking-wider">
                                        Contact Us
                                    </span>

                                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                                        Plan Your Dream Odisha Trip
                                    </h2>

                                    <p className="text-slate-500 mt-3">
                                        Fill out the form and our travel experts will get back to
                                        you with the best package for your journey.
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">

                                    {/* Full Name + Phone */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Full Name
                                            </label>

                                            <div className="relative">
                                                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                                                <input
                                                    type="text"
                                                    value={formData.name}
                                                    onChange={(e) =>
                                                        handleChange('name', e.target.value)
                                                    }
                                                    placeholder="Enter your name"
                                                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.name
                                                        ? 'border-red-500'
                                                        : 'border-slate-200'
                                                        }`}
                                                />
                                            </div>

                                            {errors.name && (
                                                <p className="text-red-500 text-xs mt-1">
                                                    {errors.name}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Phone Number
                                            </label>

                                            <div className="relative">
                                                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                                                <input
                                                    type="tel"
                                                    value={formData.phone}
                                                    onChange={(e) =>
                                                        handleChange('phone', e.target.value)
                                                    }
                                                    placeholder="+91 9958826437"
                                                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.phone
                                                        ? 'border-red-500'
                                                        : 'border-slate-200'
                                                        }`}
                                                />
                                            </div>

                                            {errors.phone && (
                                                <p className="text-red-500 text-xs mt-1">
                                                    {errors.phone}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Email + Travelers */}
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Email Address
                                            </label>

                                            <div className="relative">
                                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                                                <input
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={(e) =>
                                                        handleChange('email', e.target.value)
                                                    }
                                                    placeholder="you@example.com"
                                                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.email
                                                        ? 'border-red-500'
                                                        : 'border-slate-200'
                                                        }`}
                                                />
                                            </div>

                                            {errors.email && (
                                                <p className="text-red-500 text-xs mt-1">
                                                    {errors.email}
                                                </p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium mb-2">
                                                Travelers
                                            </label>

                                            <div className="relative">
                                                <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

                                                <select
                                                    value={formData.travelers}
                                                    onChange={(e) =>
                                                        handleChange('travelers', e.target.value)
                                                    }
                                                    className={`w-full pl-10 pr-4 py-3 rounded-xl border ${errors.travelers
                                                        ? 'border-red-500'
                                                        : 'border-slate-200'
                                                        }`}
                                                >
                                                    <option value="">Select Travelers</option>
                                                    <option value="1">1 Person</option>
                                                    <option value="2">2 Persons</option>
                                                    <option value="3-5">3-5 Persons</option>
                                                    <option value="6-10">6-10 Persons</option>
                                                    <option value="10+">10+ Persons</option>
                                                </select>
                                            </div>

                                            {errors.travelers && (
                                                <p className="text-red-500 text-xs mt-1">
                                                    {errors.travelers}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-sm font-medium mb-2">
                                            Message
                                        </label>

                                        <div className="relative">
                                            <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-slate-400" />

                                            <textarea
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) =>
                                                    handleChange('message', e.target.value)
                                                }
                                                placeholder="Tell us about your trip requirements..."
                                                className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-200"
                                            />
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="btn-primary w-full py-3 flex items-center justify-center gap-2"
                                    >
                                        {loading ? (
                                            'Sending...'
                                        ) : (
                                            <>
                                                <Send size={18} />
                                                Send Enquiry
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-xs text-slate-500">
                                        We respect your privacy. No spam, ever.
                                    </p>
                                </form>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <div className="mt-12 bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100">
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-slate-900 mb-3">
                        Explore More Odisha Experiences
                    </h3>

                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Discover our most popular Odisha tour packages, luxury hotels,
                        cab services, and spiritual journeys to make your trip memorable.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">

                    <Link
                        to="/tour-packages"
                        className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center mb-4">
                            🌍
                        </div>

                        <h4 className="font-bold text-lg text-slate-900 mb-2">
                            Tour Packages
                        </h4>

                        <p className="text-slate-500 text-sm">
                            Explore customized Odisha holiday packages for families,
                            couples, and groups.
                        </p>
                    </Link>

                    <Link
                        to="/hotels"
                        className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-4">
                            🏨
                        </div>

                        <h4 className="font-bold text-lg text-slate-900 mb-2">
                            Hotels
                        </h4>

                        <p className="text-slate-500 text-sm">
                            Browse premium hotels, beach resorts, and eco retreats across Odisha.
                        </p>
                    </Link>

                    <Link
                        to="/car-rental"
                        className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                            🚗
                        </div>

                        <h4 className="font-bold text-lg text-slate-900 mb-2">
                            Car Rental
                        </h4>

                        <p className="text-slate-500 text-sm">
                            Comfortable cab services and airport transfers throughout Odisha.
                        </p>
                    </Link>

                    <Link
                        to="/about"
                        className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                        <div className="w-14 h-14 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
                            ℹ️
                        </div>

                        <h4 className="font-bold text-lg text-slate-900 mb-2">
                            About Us
                        </h4>

                        <p className="text-slate-500 text-sm">
                            Learn more about Odisha Indiatrip Pvt. Ltd. and our travel expertise.
                        </p>
                    </Link>
                </div>

                <div className="mt-8 text-center">
                    <Link
                        to="/tour-packages"
                        className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-amber-600 transition"
                    >
                        Explore All Packages →
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
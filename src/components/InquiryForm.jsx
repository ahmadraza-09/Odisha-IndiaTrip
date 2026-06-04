import { useState } from 'react';
import emailjs from '@emailjs/browser';

import {
  X,
  User,
  Phone,
  Mail,
  Users,
  MessageSquare,
  Send,
  CheckCircle,
} from 'lucide-react';

const InquiryForm = ({ isOpen, onClose }) => {
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
      console.error('EmailJS Error:', error);

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

  const handleClose = () => {
    onClose();

    setTimeout(() => {
      setSubmitted(false);

      setFormData({
        name: '',
        phone: '',
        email: '',
        travelers: '',
        message: '',
      });

      setErrors({});
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-navy-950/70 backdrop-blur-sm animate-fade-in"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-scale-in">
        {/* Header */}
        <div className="gradient-amber px-6 py-5 flex items-center justify-between">
          <div>
            <h3 className="font-display text-xl font-bold text-navy-900">
              Quick Enquiry
            </h3>

            <p className="text-navy-800/70 text-sm">
              Get a free quote within 30 minutes
            </p>
          </div>

          <button
            name='Close Form'
            onClick={handleClose}
            className="w-8 h-8 rounded-lg bg-navy-900/10 hover:bg-navy-900/20 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4 text-navy-900" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-emerald-500" />
            </div>

            <h4 className="font-display text-xl font-bold text-navy-900 mb-2">
              Enquiry Sent!
            </h4>

            <p className="text-navy-500 text-sm mb-6">
              Our travel experts will reach out shortly.
            </p>

            <button
              name='Done'
              onClick={handleClose}
              className="btn-primary text-sm"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="flex gap-2">
              {/* Name */}
              <div className="w-1/2">
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  Full Name
                </label>

                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-300" />

                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Enter your full name"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm ${
                      errors.name
                        ? 'border-red-400'
                        : 'border-slate-200'
                    }`}
                  />
                </div>

                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="w-1/2">
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  Phone Number
                </label>

                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-300" />

                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    placeholder="+91 99588 26437"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm ${
                      errors.phone
                        ? 'border-red-400'
                        : 'border-slate-200'
                    }`}
                  />
                </div>

                {errors.phone && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-2">
              {/* Email */}
              <div className="w-1/2">
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  Email Address
                </label>

                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-300" />

                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="you@example.com"
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm ${
                      errors.email
                        ? 'border-red-400'
                        : 'border-slate-200'
                    }`}
                  />
                </div>

                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Travelers */}
              <div className="w-1/2">
                <label className="block text-sm font-medium text-navy-700 mb-1.5">
                  Number of Travelers
                </label>

                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-navy-300" />

                  <select
                    value={formData.travelers}
                    onChange={(e) =>
                      handleChange('travelers', e.target.value)
                    }
                    className={`w-full pl-10 pr-4 py-3 bg-slate-50 border rounded-xl text-sm ${
                      errors.travelers
                        ? 'border-red-400'
                        : 'border-slate-200'
                    }`}
                  >
                    <option value="">Select travelers</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3-5">3-5 Persons</option>
                    <option value="6-10">6-10 Persons</option>
                    <option value="10+">10+ Persons (Group)</option>
                  </select>
                </div>

                {errors.travelers && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.travelers}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-navy-700 mb-1.5">
                Custom Message
              </label>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 w-4 h-4 text-navy-300" />

                <textarea
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Tell us about your dream Odisha trip..."
                  rows={3}
                  className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              name='Submit'
              type="submit"
              disabled={loading}
              className="btn-primary w-full py-3.5 text-sm mt-2 disabled:opacity-50"
            >
              {loading ? (
                'Sending...'
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </>
              )}
            </button>

            <p className="text-center text-xs text-navy-400">
              We respect your privacy. No spam, ever.
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default InquiryForm;
const MapReviewSection = ({ onOpenInquiry }) => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Map */}
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.43655513259!2d77.1038883!3d28.646644499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x623bb31518f82eb1%3A0x5a5572c90d1e3670!2sOdisha%20Indiatrip%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1780393610981!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              loading="lazy"
              title="Odisha Indiatrip Location"
            />
          </div>

          {/* Review Section */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl font-bold mb-4">
              Join Hundreds of Satisfied Travelers
            </h2>

            <p className="text-gray-600 mb-8">
              Share your Odisha travel experience with us.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                name="Open Inquiry"
                onClick={onOpenInquiry}
                className="px-8 py-4 rounded-full text-white font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 cursor-pointer"
              >
                Plan Your Trip Now
              </button>

              <a
                href="https://g.page/r/CXA2Hg3JclVaEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-white border shadow flex items-center justify-center gap-3 font-semibold"
              >
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                  alt="Google"
                  className="w-6 h-6"
                />
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapReviewSection;
import { MapPin, Clock, Mail, Instagram } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#F4EFE8]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#6B3B2B] text-center mb-16">
          Visit Us
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#D99CA1] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-[#6B3B2B] mb-2">
                  Location
                </h3>
                <p className="text-[#6B3B2B]/80 text-lg">
                  Paris, France
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-[#D99CA1] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-[#6B3B2B] mb-2">
                  Hours
                </h3>
                <p className="text-[#6B3B2B]/80 text-lg">
                  Daily: 08:30 – 19:30
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-[#D99CA1] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-[#6B3B2B] mb-2">
                  Email
                </h3>
                <a
                  href="mailto:hello@vestigescafe.fr"
                  className="text-[#D99CA1] hover:text-[#c88a90] text-lg transition-colors"
                >
                  hello@vestigescafe.fr
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Instagram className="w-6 h-6 text-[#D99CA1] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-semibold text-[#6B3B2B] mb-2">
                  Instagram
                </h3>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D99CA1] hover:text-[#c88a90] text-lg transition-colors"
                >
                  @vestigescafe
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722687194!2d2.277019!3d48.8588897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b005%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(20%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vestiges Café location in Paris"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

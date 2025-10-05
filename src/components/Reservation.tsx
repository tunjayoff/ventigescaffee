import { useState, FormEvent } from 'react';
import { Calendar, Clock, Users, Send } from 'lucide-react';

export default function Reservation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-[#6B3B2B] text-center mb-4">
          Book a Table
        </h2>
        <p className="text-center text-[#CDAF8B] mb-12 text-lg">
          Reserve your spot in our cozy corner of Paris
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[#6B3B2B] font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#CDAF8B]/30 focus:border-[#D99CA1] focus:outline-none transition-colors bg-[#F4EFE8]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-[#6B3B2B] font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#CDAF8B]/30 focus:border-[#D99CA1] focus:outline-none transition-colors bg-[#F4EFE8]"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-[#6B3B2B] font-medium mb-2 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Date
              </label>
              <input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#CDAF8B]/30 focus:border-[#D99CA1] focus:outline-none transition-colors bg-[#F4EFE8]"
              />
            </div>

            <div>
              <label className="block text-[#6B3B2B] font-medium mb-2 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Time
              </label>
              <input
                type="time"
                required
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border-2 border-[#CDAF8B]/30 focus:border-[#D99CA1] focus:outline-none transition-colors bg-[#F4EFE8]"
              />
            </div>
          </div>

          <div>
            <label className="block text-[#6B3B2B] font-medium mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Number of Guests
            </label>
            <select
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#CDAF8B]/30 focus:border-[#D99CA1] focus:outline-none transition-colors bg-[#F4EFE8]"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? 'Guest' : 'Guests'}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-[#6B3B2B] font-medium mb-2">
              Special Requests
            </label>
            <textarea
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border-2 border-[#CDAF8B]/30 focus:border-[#D99CA1] focus:outline-none transition-colors bg-[#F4EFE8] resize-none"
              placeholder="Any dietary restrictions or special occasions?"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#D99CA1] hover:bg-[#c88a90] text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Reserve Now
          </button>

          {submitted && (
            <div className="text-center text-[#6B3B2B] bg-[#D99CA1]/20 py-3 rounded-lg">
              Thank you! Your reservation request has been received.
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

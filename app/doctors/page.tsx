import Image from "next/image";
import Link from "next/link";
import { Doctors } from "@/constants";

export const metadata = {
  title: "Doctors Directory | CarePulse",
  description: "Browse available physicians and start booking.",
};

export default function DoctorsDirectory() {
  return (
    <div className="flex min-h-screen bg-dark-900 text-white">
      <section className="container py-16">
        <div className="mx-auto max-w-[1100px]">
          {/* Header */}
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-semibold text-green-400">Doctors Directory</h1>
              <p className="text-dark-600 mt-1">
                Discover experienced doctors and book your consultation easily.
              </p>
            </div>
            <Link
              href="/"
              className="rounded-md border border-green-500 bg-transparent px-4 py-2 text-green-400 hover:bg-green-500 hover:text-white transition"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Doctors Grid */}
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Doctors.map((doc, idx) => (
              <li
                key={`${doc.name}-${idx}`}
                className="group flex flex-col gap-3 rounded-2xl border border-[#1F2937]
             bg-[#070b13] p-5 transition-all hover:border-[#22DD7A]
             hover:bg-[#101a28] hover:shadow-[0_0_15px_rgba(34,221,122,0.2)]"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    width={72}
                    height={72}
                    className="rounded-full border border-dark-500 object-cover group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <p className="text-lg font-medium text-white">Dr. {doc.name}</p>
                    <p className="text-sm text-[#22DD7A]">{doc.specialty}</p>
                    <p className="text-xs text-gray-400">
                      {doc.experience} • {doc.qualification}
                    </p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 text-yellow-400 text-sm mt-1">
                  {"⭐".repeat(Math.round(doc.rating))}{" "}
                  <span className="ml-1 text-gray-500">{doc.rating.toFixed(1)}</span>
                </div>

                {/* About */}
                <p className="text-sm text-gray-400 line-clamp-3">{doc.about}</p>

                <Link
                  href="/"
                  className="mt-auto inline-block rounded-md bg-green-500 px-3 py-2 text-center text-sm font-medium text-white hover:bg-green-400 transition"
                >
                  Book Appointment
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-center text-sm text-dark-500">
            Tip: Select your preferred doctor and continue with appointment booking.
          </p>
        </div>
      </section>
    </div>
  );
}

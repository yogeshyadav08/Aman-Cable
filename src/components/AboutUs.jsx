import aboutImage from "../images/aboutusimg.jpg";

// Simple inline icons (no external deps)
const IconCheck = (props) => (
  <svg viewBox="0 0 20 20" aria-hidden="true" className={props.className}>
    <path
      fill="currentColor"
      d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 9.6a1 1 0 1 1 1.4-1.4l3.4 3.4 6.8-6.8a1 1 0 0 1 1.4 0Z"
    />
  </svg>
);

const IconShield = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path
      fill="currentColor"
      d="M12 2 4 5v6c0 5 3.4 9.7 8 11 4.6-1.3 8-6 8-11V5l-8-3Z"
    />
  </svg>
);

const IconBolt = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path fill="currentColor" d="M13 2 3 14h7l-1 8 11-14h-7l0-6Z" />
  </svg>
);

const IconHeadset = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path
      fill="currentColor"
      d="M12 3a8 8 0 0 0-8 8v6a3 3 0 0 0 3 3h2v-8H7a6 6 0 0 1 12 0h-2v8h2a3 3 0 0 0 3-3v-6a8 8 0 0 0-8-8Z"
    />
  </svg>
);
const IconTools = (props) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={props.className}>
    <path
      fill="currentColor"
      d="M21.7 18.3l-5.6-5.6c.6-1 .9-2.1.9-3.2 0-3.3-2.7-6-6-6-1.1 0-2.2.3-3.2.9L9.4 6l-4.2 4.2-1.6-1.6-.7.7 1.6 1.6L2.3 14l1.4 1.4 2.2-2.2 1.6 1.6-2.2 2.2 1.4 1.4 2.2-2.2 1.6 1.6-2.2 2.2 1.4 1.4 2.2-2.2 1.6 1.6-2.2 2.2 1.4 1.4 2.2-2.2 1.6 1.6 4.2-4.2.9.9c.4.4 1 .4 1.4 0l.7-.7c.4-.4.4-1 0-1.4z"
    />
  </svg>
);

export default function AboutUs() {
  const features = [
    {
      icon: <IconBolt className="h-5 w-5 text-blue-900" />,
      title: "Fast & Stable Connectivity",
      desc: "High‑speed broadband with consistent performance for streaming, work, and learning.",
    },
    {
      icon: <IconShield className="h-5 w-5 text-blue-900" />,
      title: "Secure, Reliable Network",
      desc: "Backed by trusted partners with robust infrastructure and local monitoring.",
    },
    {
      icon: <IconHeadset className="h-5 w-5 text-blue-900" />,
      title: "Local Support You Trust",
      desc: "Friendly, responsive assistance from a team based in your own city.",
    },
    {
      icon: <IconTools className="h-5 w-5 text-blue-900" />,
      title: "Expert Installation & Maintenance",
      desc: "Professional to keep your connection running smoothly.",
    },
  ];

  const stats = [
    { label: "Years Serving", value: "25+" },
    { label: "Partnership with", value: "BSNL • Airtel • RailTel " },
    { label: "Service Areas", value: "BHEL, Jhansi & nearby" },
    { label: "Service Type", value: "Cable TV & Broadband" },
  ];

  return (
    <section
      id="about-us"
      className="relative bg-white"
      aria-labelledby="about-title"
    >
      {/* Top border accent */}
      <div className="" />

      <div className="mx-auto max-w-7xl px-6 py-10 md:py-15">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Content */}
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-900 ring-1 ring-inset ring-blue-100">
              <span className="h-2 w-2 rounded-full bg-orange-500" />
              Who We Are
            </p>

            <h2
              id="about-title"
              className="mt-4 text-pretty text-4xl font-bold tracking-tight text-blue-900 md:text-4xl"
            >
              About Aman Cable
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
              Serving <strong>BHEL, Jhansi</strong> and surrounding areas for{" "}
              <strong>25+ years</strong>. We began as a local cable TV provider
              and expanded in <strong>2021</strong> to high‑speed broadband in
              partnership with <strong>BSNL, Airtel, and RailTel</strong>. Our
              promise is simple: dependable service, transparent pricing, and
              responsive local support.
            </p>

            {/* Key bullets */}
            <ul className="mt-6 grid gap-3 text-sm text-slate-700">
              {[
                "Smooth streaming, meetings, and online classes",
                "Clear TV with consistent uptime",
                "Hassle‑free installation and quick issue resolution",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-blue-50 text-blue-900 ring-1 ring-inset ring-blue-100">
                    <IconCheck className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Feature cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-lg border border-slate-200 p-4 transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <div className="rounded-md bg-blue-50 p-2 ring-1 ring-inset ring-blue-100">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-slate-900">
                        {f.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image side */}
          <div>
            <figure className="relative">
              <img
                src={aboutImage || "/placeholder.svg"}
                alt="Aman Cable Network equipment and setup"
                className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg ring-1 ring-slate-200"
              />
            </figure>

            {/* Stats */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-lg border border-slate-200 bg-white p-4"
                >
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                    {s.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-slate-900">
                    {s.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

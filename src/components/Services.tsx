export default function Services() {
  const services = [
    {
      title: "Sourcing & Catch Handling",
      desc: "Partner vessels & certified landing sites with immediate chilling for peak freshness.",
    },
    {
      title: "Processing & Grading",
      desc: "Hygienic filleting, trimming, glazing, and calibrated grading for consistent specs.",
    },
    {
      title: "Cold Storage",
      desc: "Blast freezing and -18°C storage with redundancy and continuous data logging.",
    },
    {
      title: "Packaging & Labeling",
      desc: "Retail and bulk formats, barcoding, and multilingual labeling for target markets.",
    },
    {
      title: "Documentation & Compliance",
      desc: "Health certs, catch certs, and export paperwork aligned to EU/MENA standards.",
    },
    {
      title: "Logistics & Distribution",
      desc: "Reefer trucking, port handling, and air/sea freight coordination with real-time updates.",
    },
  ];

  return (
    <section id="services" className=" bg-white ">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div className="max-w-2xl mb-12">
          <h2 className="section-heading">Services</h2>
          <p className="section-subheading">
            End-to-end seafood operations with rigorous cold-chain control and
            export documentation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-12">
          {services.map((service, index) => {
            // Icons for each service
            const icons = [
              // Sourcing & Catch Handling - Fish/Wave icon
              <svg
                className="shrink-0 size-6 text-[#1375bc]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 10s3-3 10-3 10 3 10 3-3 3-10 3-10-3-10-3Z" />
                <path d="M2 10v12M22 10v12" />
              </svg>,
              // Processing & Grading - Settings/Gear icon
              <svg
                className="shrink-0 size-6 text-[#1375bc]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
                <circle cx="12" cy="12" r="3" />
              </svg>,
              // Cold Storage - Snowflake icon
              <svg
                className="shrink-0 size-6 text-[#1375bc]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="2" y1="12" x2="22" y2="12" />
                <line x1="12" y1="2" x2="12" y2="22" />
                <path d="m20 16-4-4 4-4" />
                <path d="m4 8 4 4-4 4" />
                <path d="m16 20-4-4 4-4" />
                <path d="m8 4 4 4-4 4" />
              </svg>,
              // Packaging & Labeling - Package icon
              <svg
                className="shrink-0 size-6 text-[#1375bc]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                <line x1="12" y1="22.08" x2="12" y2="12" />
              </svg>,
              // Documentation & Compliance - File Check icon
              <svg
                className="shrink-0 size-6 text-[#1375bc]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <path d="m9 15 2 2 4-4" />
              </svg>,
              // Logistics & Distribution - Truck icon
              <svg
                className="shrink-0 size-6 text-[#1375bc]"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.461a1 1 0 0 0-1.131.302l-1.411 1.41A1 1 0 0 0 16 15.28V17a1 1 0 0 0 1 1Z" />
                <circle cx="17" cy="18" r="2" />
                <circle cx="7" cy="18" r="2" />
              </svg>,
            ];

            return (
              <div key={index}>
                <div className="relative flex justify-center items-center size-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-10 before:bg-linear-to-br before:from-[#1375bc] before:via-transparent before:to-[#0f5d94] before:rounded-xl shadow-sm">
                  {icons[index]}
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-semibold text-slate-800">
                    {service.title}
                  </h3>
                  <p className="mt-1 text-slate-600">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

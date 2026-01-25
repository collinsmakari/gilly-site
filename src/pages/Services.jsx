import Seo from "../components/Seo";
import { Link } from "react-router-dom";
import { FaCalculator, FaFileInvoiceDollar } from "react-icons/fa";

const services = [
  {
    icon: <FaCalculator className="text-4xl text-blue-600 mb-4" />,
    title: "Accounting & Financial Management",
    desc: "Clear, accurate, and timely financial information to support better decision-making.",
    points: [
      "Bookkeeping and financial record management",
      "Monthly and annual financial reporting",
      "Management accounts and cash flow analysis",
      "Budgeting and forecasting support",
      "Payroll and statutory deductions",
      "Financial systems setup and process improvement",
    ],
  },
  {
    icon: <FaFileInvoiceDollar className="text-4xl text-blue-600 mb-4" />,
    title: "Tax Advisory & Compliance",
    desc: "Proactive tax solutions that reduce risk and ensure compliance.",
    points: [
      "Corporate and individual tax compliance",
      "VAT, PAYE, and withholding tax filings",
      "Tax planning and advisory",
      "Tax health checks and risk assessments",
    ],
  },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Our Consulting Services | Pegrumme Consulting"
        description="Professional consulting services including accounting, tax advisory, and compliance support."
        keywords="consulting services, accounting, tax advisory, compliance"
      />

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-center">
            Pegrumme Africa provides practical, reliable consulting services
            that help businesses stay compliant, manage risk, and grow with
            confidence.
          </p>

          {/* Auto-fit grid */}
          <div className="grid gap-8 grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-stretch">
            {services.map((service, index) => (
              <div
                key={index}
                className="
  bg-white 
  p-6 
  rounded-xl 
  shadow-md
  border border-transparent
  transition 
  duration-300 
  ease-in-out
  hover:shadow-2xl
  hover:-translate-y-1
  flex 
  flex-col 
  justify-between 
  h-full
"
              >
                {/* Top Content */}
                <div className="flex flex-col items-center flex-grow">
                  {service.icon}

                  <h3 className="text-xl font-semibold mb-2 text-center">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm text-center mb-4">
                    {service.desc}
                  </p>

                  {service.points && (
                    <ul className="space-y-2 text-sm text-gray-600 w-full">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Button pinned to bottom */}
                <Link to="/contact" className="w-full mt-6">
                  <button
                    className="
                      bg-blue-700 
                      text-white 
                      px-6 sm:px-8 
                      py-2 sm:py-3 
                      rounded-lg 
                      font-semibold 
                      border border-transparent 
                      hover:bg-white
                      hover:text-blue-700
                      hover:border-blue-800
                      hover:scale-105
                      transition 
                      duration-300 
                      ease-in-out
                      w-full
                    "
                  >
                    Contact Us
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

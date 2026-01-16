import Seo from "../components/Seo";
import { FaChartLine, FaCogs, FaLaptopCode, FaUsers } from "react-icons/fa";

const services = [
  {
    icon: <FaChartLine className="text-4xl text-blue-600 mb-4" />,
    title: "Business & Growth Strategy",
    desc: "We help organizations define clear strategies, enter new markets, and achieve sustainable growth through data-driven planning.",
  },
  {
    icon: <FaLaptopCode className="text-4xl text-blue-600 mb-4" />,
    title: "Technology Consulting",
    desc: "Digital transformation, system architecture, automation, and modern software solutions tailored to your business.",
  },
  {
    icon: <FaCogs className="text-4xl text-blue-600 mb-4" />,
    title: "Operations & Process Optimization",
    desc: "Improve efficiency, reduce costs, and streamline workflows using proven operational excellence frameworks.",
  },
  {
    icon: <FaUsers className="text-4xl text-blue-600 mb-4" />,
    title: "Leadership & Team Advisory",
    desc: "Executive coaching, change management, and organizational development to build high-performing teams.",
  },
];

export default function Services() {
  return (
    <>
      <Seo
        title="Our Consulting Services | Apex Consulting"
        description="Professional consulting services including business strategy, technology consulting, operations optimization, and leadership advisory."
        keywords="consulting services, business strategy, technology consulting, operations consulting"
      />

      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-gray-600 max-w-2xl mb-12">
            We partner with businesses to solve complex challenges and unlock
            long-term value through expert consulting services.
          </p>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import PageHero from "../components/shared/PageHero";
import Process from "../components/shared/Process";
import WhyChooseUs from "../components/shared/WhyChooseUs";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";
import services from "../data/servicesData";

const Services = () => {
  return (
    <>
      <PageHero />

      <section className="bg-[#CCCCFF] py-24 overflow-hidden">
        <div className="max-w-362.5 mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="font-[Nexa] uppercase tracking-[5px] text-[#6F00FF] text-sm mb-5">
              WHAT WE CREATE
            </p>

            <h2 className="font-[Founders] text-[#111111] text-5xl lg:text-7xl leading-[0.95]">
              We create immersive
              <br />
              visual experiences
              <span className="text-[#6F00FF]"> ✱</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ServiceCard
                  key={index}
                  icon={<Icon />}
                  title={service.title}
                  items={service.items}
                />
              );
            })}
          </div>
        </div>
      </section>

      <Process />
      <WhyChooseUs />
      <Footer />
    </>
  );
};

export default Services;

import { services } from "../constants";

const Services = () => {
  return (
    <section
      className="max-conatiner flex justify-center
      flex-wrap gap-9"
    >
      {services.map((service) => (
        <div
          key={service.label}
          className="flex flex-col sm:w-[350px] sm:min-w-[350px] sm:flex-1 max-sm:w-[500px] gap-3 
          ring-1 ring-slate-50 shadow-lg px-10 py-10 rounded-[20px] "
        >
          <div
            className="w-11 h-11 bg-coral-red flex justify-center
            item-center rounded-full "
          >
            <img src={service.imgURL} alt="services" width={24} height={24} />
          </div>

          <h3
            className="mt-5 font-palanquin text-3xl leading-normal
            font-bold"
          >
            {service.label}
          </h3>
          <p
            className="mt-3 break-words font-montserrat
            leading-normal text-lg text-slate-gray"
          >
            {service.subtext}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Services;

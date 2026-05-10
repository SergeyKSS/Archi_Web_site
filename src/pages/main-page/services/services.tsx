import type { JSX } from "react";
import { services } from "../../../const/const";
import ServicesItem from "./services-item";

function Services(): JSX.Element {
  return (
    <section className="services">
      <h2 className="services__title">Our services</h2>
      {services.map((service) => (
        <ServicesItem key={service.id} servicesData={service} />
      ))}
    </section>
  );
}

export default Services;

import type { JSX } from "react";
import { services } from "../../../const/const";

type ServicesItemProps = {
  servicesData: (typeof services)[number];
}

function ServicesItem({servicesData}: ServicesItemProps): JSX.Element {
  return (
    <div className="services__item">
      <div className={`services__icon ${servicesData.modifier}`} />
      <h3 className="services__subtitle">{servicesData.header}</h3>
      <p className="services__descr">{servicesData.paragraph}</p>
    </div>
  );
}

export default ServicesItem;

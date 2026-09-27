import type { ReactNode } from "react";
import { IconCheck, IconX } from "./Icons";

interface Feature {
  text: ReactNode;
  included: boolean;
}

interface Plan {
  name: string;
  price: string;
  popular: boolean;
  features: Feature[];
}

const PLANS: Plan[] = [
  {
    name: "Starter",
    price: "$45",
    popular: false,
    features: [
      { text: <><strong>5</strong> Bootstrap Install</>, included: true },
      { text: <><strong>100,000</strong> Visits</>, included: true },
      { text: <><strong>30 GB</strong> Disk Space</>, included: true },
      { text: <>Free <strong>SSL and CDN</strong></>, included: false },
      { text: <>Free <strong>Support</strong></>, included: false },
    ],
  },
  {
    name: "Pro",
    price: "$149",
    popular: true,
    features: [
      { text: <><strong>20</strong> Bootstrap Install</>, included: true },
      { text: <><strong>400,000</strong> Visits</>, included: true },
      { text: <><strong>50 GB</strong> Disk Space</>, included: true },
      { text: <>Free <strong>SSL and CDN</strong></>, included: true },
      { text: <>Free <strong>Support</strong></>, included: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="scrollspyPricing" className="bsb-pricing-1 bsb-tpl-bg-sea-shell py-5 py-xl-8 bsb-section-py-xxl-1">
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-center">
          <div className="col-12 col-lg-4">
            <h2 className="display-3 fw-bolder mb-4">
              Our{" "}
              <mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow">
                <span className="bsb-tpl-font-hw display-1 text-accent fw-normal">Pricing</span>
              </mark>
            </h2>
            <p className="fs-4 mb-4 mb-xl-5">Explore our flexible pricing to find an excellent fit to run your business.</p>
            <a href="#!" className="btn bsb-btn-2xl btn-primary rounded-pill">More Plans</a>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <div className="row gy-4 gy-md-0 gx-xxl-5">
                  {PLANS.map((plan) => (
                    <div className="col-12 col-md-6" key={plan.name}>
                      <div className={`card border-0 border-bottom border-primary ${plan.popular ? "shadow-lg pt-md-4 pb-md-4 bsb-pricing-popular" : "shadow-sm"}`}>
                        <div className="card-body p-4 p-xxl-5">
                          <h2 className="h4 mb-2">{plan.name}</h2>
                          <h4 className="display-3 fw-bold text-primary mb-0">{plan.price}</h4>
                          <p className="text-secondary mb-4">USD / Month</p>
                          <ul className="list-group list-group-flush mb-4">
                            {plan.features.map((feature, i) => (
                              <li className="list-group-item" key={i}>
                                {feature.included ? <IconCheck /> : <IconX />}
                                <span>{feature.text}</span>
                              </li>
                            ))}
                          </ul>
                          <a href="#!" className="btn bsb-btn-2xl btn-accent rounded-pill">Choose Plan</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

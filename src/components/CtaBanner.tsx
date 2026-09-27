import type { CSSProperties } from "react";

export default function CtaBanner() {
  const bannerStyle: CSSProperties = {
    backgroundImage: "url('/assets/img/cta/cta-img-1.jpg')",
  };

  return (
    <section className="bsb-cta-1 px-2 bsb-overlay" style={bannerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-9 col-lg-8 col-xl-8 col-xxl-7">
            <h3 className="fs-5 mb-3 text-white text-uppercase">
              <mark className="text-white bsb-tpl-highlight">Unlock Fresh Prospects</mark>
            </h3>
            <h2 className="display-3 text-white fw-bolder mb-4 pe-xl-5">
              We are a design agency studio delivering custom creative & unique websites.
            </h2>
            <a href="#!" className="btn btn-accent bsb-btn-3xl rounded mb-0 text-nowrap">Join Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

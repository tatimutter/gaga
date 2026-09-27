import type { CSSProperties } from "react";

export default function Hero() {
  const heroImageStyle: CSSProperties = {
    WebkitMaskImage: "url(/assets/img/hero/hero-blob-1.svg)",
    maskImage: "url(/assets/img/hero/hero-blob-1.svg)",
  };

  return (
    <section id="scrollspyHero" className="bsb-hero-2 bsb-tpl-bg-blue py-5 py-xl-8 py-xxl-10">
      <div className="container overflow-hidden">
        <div className="row gy-3 gy-lg-0 align-items-lg-center justify-content-lg-between">
          <div className="col-12 col-lg-6 order-1 order-lg-0">
            <h1 className="display-3 fw-bolder mb-3">
              We provide easy <br />
              <mark className="bsb-tpl-highlight bsb-tpl-highlight-blue">
                <span className="bsb-tpl-font-hw display-2 text-accent fw-normal">solutions</span>
              </mark>{" "}
              for startups at affordable rates.
            </h1>
            <p className="fs-4 mb-5">
              Our methods are straight, comfortable, and established to ensure evolution and acceleration.
            </p>
            <div className="d-grid gap-2 d-sm-flex">
              <button type="button" className="btn btn-primary bsb-btn-3xl rounded-pill">Free Consultation</button>
              <button type="button" className="btn btn-outline-primary bsb-btn-3xl rounded-pill">Buy Credits</button>
            </div>
          </div>
          <div className="col-12 col-lg-5 text-center">
            <img
              className="img-fluid"
              loading="lazy"
              src="/assets/img/hero/hero-home.jpg"
              alt=""
              style={heroImageStyle}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

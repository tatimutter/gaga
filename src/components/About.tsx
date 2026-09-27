interface Fact {
  value: string;
  label: string;
  badgeClass: string;
}

interface FaqItem {
  id: string;
  title: string;
  text: string;
}

const FACTS: Fact[] = [
  { value: "120K", label: "Happy Customers", badgeClass: "bsb-tpl-bg-yellow" },
  { value: "1890+", label: "Issues Solved", badgeClass: "bsb-tpl-bg-green" },
  { value: "250K", label: "Finished Projects", badgeClass: "bsb-tpl-bg-pink" },
  { value: "786+", label: "Awwwards Winning", badgeClass: "bsb-tpl-bg-cyan" },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "One",
    title: "Highly Competitive Rates",
    text: "We offer some of the most competitive rates in the industry, without sacrificing quality. We understand that cost is an important factor when choosing a service provider, and we are committed to providing our clients with the best possible value for their money.",
  },
  {
    id: "Two",
    title: "Contemporary Skills",
    text: "Our team is made up of highly skilled and experienced professionals who are up-to-date on the latest trends and technologies. We are constantly investing in our team's development to ensure that we can provide our clients with the highest level of service.",
  },
  {
    id: "Three",
    title: "Top Notch Support",
    text: "We are committed to providing our clients with top-notch support. Our team is available 24/7 to answer your questions and resolve any issues you may encounter. We believe that our support is one of our greatest strengths, and we are proud to offer it to our clients.",
  },
];

export default function About() {
  return (
    <section id="scrollspyAbout" className="bsb-tpl-bg-alice-blue py-5 py-xl-8 bsb-section-py-xxl-1">
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img className="img-fluid rounded" loading="lazy" src="/assets/img/about/about-img-1.png" alt="" />
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <h2 className="display-3 fw-bolder mb-4">
                  Our{" "}
                  <mark className="bsb-tpl-highlight bsb-tpl-highlight-blue">
                    <span className="bsb-tpl-font-hw display-1 text-accent fw-normal">optimistic</span>
                  </mark>
                  <br /> methods will let you prefer us.
                </h2>
                <p className="fs-4 mb-5">
                  Here are the leading reasons to prefer us for your brand. We believe in transparency without any hidden barriers.
                </p>
                <div className="accordion accordion-flush" id="accordionExample">
                  {FAQ_ITEMS.map((item, index) => (
                    <div className="accordion-item" key={item.id}>
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse${item.id}`}
                          aria-expanded={index === 0}
                          aria-controls={`collapse${item.id}`}
                        >
                          {item.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse${item.id}`}
                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                        aria-labelledby={`heading${item.id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">{item.text}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5 pt-xl-8 bsb-section-pt-xxl-1">
        <div className="row gy-4">
          {FACTS.map((fact) => (
            <div className="col-12 col-sm-6 col-xl-3" key={fact.label}>
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body text-center p-4 p-xxl-5">
                  <div className={`btn btn-primary bsb-btn-circle bsb-btn-circle-4xl pe-none mb-2 ${fact.badgeClass} text-primary border-0`}>
                    {/* Icona omessa per brevità: nell'originale ogni card ha un'icona diversa */}
                  </div>
                  <h3 className="h1 mb-2">{fact.value}</h3>
                  <p className="fs-5 mb-0 text-secondary">{fact.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

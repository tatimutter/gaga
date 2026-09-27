interface Testimonial {
  img: string;
  name: string;
  role: string;
  stars: number;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    img: "testimonial-img-1.jpg",
    name: "Luna John",
    role: "UX Designer",
    stars: 5,
    quote: "We were so impressed with the work they did for us. They were able to take our vision and turn it into a reality, and they did it all on time and within budget. We would highly recommend them to anyone looking for a reliable partner.",
  },
  {
    img: "testimonial-img-2.jpg",
    name: "Mark Smith",
    role: "Marketing Specialist",
    stars: 4,
    quote: "We were looking for a company that could help us develop a new website that was both visually appealing and user-friendly. We are so happy with the results, and we would highly recommend them to anyone looking for a new website.",
  },
  {
    img: "testimonial-img-4.jpg",
    name: "Luke Reeves",
    role: "Sales Manager",
    stars: 5,
    quote: "We were looking for a company that could help us with our branding. We needed a website and marketing materials. They were able to create a brand identity that we loved. They worked with us to develop a logo that represented our company.",
  },
];

export default function Testimonials(): JSX.Element {
  return (
    <section className="py-5 py-xl-8 bsb-section-py-xxl-1">
      <div className="container mb-5 mb-md-6 mb-xl-10">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
            <h2 className="display-3 fw-bolder mb-4">
              We believe in client <br />
              <mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow">
                <span className="bsb-tpl-font-hw display-1 text-accent fw-normal">satisfaction</span>
              </mark>
              . Here are some testimonials by our worthy clients.
            </h2>
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-4 gy-md-0 gx-xxl-5">
          {TESTIMONIALS.map((t) => (
            <div className="col-12 col-md-4" key={t.name}>
              <div className="card border-0 border-bottom border-primary shadow-sm">
                <div className="card-body p-4 p-xxl-5">
                  <figure>
                    <img className="img-fluid rounded rounded-circle mb-4 border border-5" loading="lazy" src={`/assets/img/testimonial/${t.img}`} alt={t.name} />
                    <figcaption>
                      <div className="bsb-ratings text-warning mb-3" data-bsb-star={t.stars} data-bsb-star-off={5 - t.stars}></div>
                      <blockquote className="bsb-blockquote-icon mb-4">{t.quote}</blockquote>
                      <h4 className="mb-2">{t.name}</h4>
                      <h5 className="fs-6 text-secondary mb-0">{t.role}</h5>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

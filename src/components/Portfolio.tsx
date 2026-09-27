interface Project {
  img: string;
  title: string;
  category: string;
}

const PROJECTS: Project[] = [
  { img: "project-landscape-1.jpg", title: "Canvas Lover", category: "Photography" },
  { img: "project-portrait-1.jpg", title: "Red Lava", category: "Nature" },
  { img: "project-landscape-2.jpg", title: "Jungle Book", category: "Adventure" },
  { img: "project-portrait-2.jpg", title: "Wavy Road", category: "Adventure" },
  { img: "project-portrait-3.jpg", title: "Golden Leaves", category: "Photography" },
  { img: "project-portrait-4.jpg", title: "Minimal Notions", category: "Design" },
  { img: "project-landscape-3.jpg", title: "Bright Winks", category: "Design" },
  { img: "project-landscape-4.jpg", title: "Innovative Day", category: "Photography" },
];

export default function Portfolio() {
  return (
    <section id="scrollspyPortfolio" className="py-5 py-xl-8 bsb-section-py-xxl-1">
      <div className="container mb-5 mb-md-6 mb-xl-10">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
            <h2 className="display-3 fw-bolder mb-4">
              Meet our portfolio to <br />
              <mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow">
                <span className="bsb-tpl-font-hw display-1 text-accent fw-normal">kickstart</span>
              </mark>{" "}
              your success.
            </h2>
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        {/* Nota: il template originale usa Isotope/Packery per il filtro animato del grid.
            Qui il grid è statico; se serve il filtro per categoria, va reimplementato
            con uno state React (categoria attiva) invece della libreria jQuery. */}
        <div className="row gy-2 g-md-2 g-xl-3">
          {PROJECTS.map((project) => (
            <div className="col-12 col-md-4" key={project.title}>
              <figure className="rounded rounded-3 overflow-hidden bsb-overlay-hover m-0">
                <a href="#!">
                  <img className="img-fluid" src={`/assets/img/portfolio/${project.img}`} alt="" />
                </a>
                <figcaption>
                  <h3 className="text-white">{project.title}</h3>
                  <div className="text-white">{project.category}</div>
                </figcaption>
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

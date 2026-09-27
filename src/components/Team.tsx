interface Member {
  img: string;
  name: string;
  role: string;
}

const TEAM: Member[] = [
  { img: "team-img-1.jpg", name: "Flora Nyra", role: "Product Manager" },
  { img: "team-img-2.jpg", name: "Evander Mac", role: "Art Director" },
  { img: "team-img-3.jpg", name: "Taytum Elia", role: "Investment Planner" },
  { img: "team-img-4.jpg", name: "Wylder Elio", role: "Financial Analyst" },
];

export default function Team(): JSX.Element {
  return (
    <section id="scrollspyTeam" className="py-5 py-xl-8 bsb-section-py-xxl-1">
      <div className="container mb-5 mb-md-6 mb-xl-10">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-9 col-xl-8 col-xxl-7 text-center">
            <h2 className="display-3 fw-bolder mb-4">
              We are a group of <br />
              <mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow">
                <span className="bsb-tpl-font-hw display-1 text-accent fw-normal">innovative</span>
              </mark>
              , experienced, and proficient teams.
            </h2>
          </div>
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row gy-4 gy-lg-0 gx-xxl-5">
          {TEAM.map((member) => (
            <div className="col-12 col-md-6 col-lg-3" key={member.name}>
              <div className="card border-0 border-bottom border-primary shadow-sm overflow-hidden">
                <div className="card-body p-0">
                  <figure className="m-0 p-0">
                    <img className="img-fluid" loading="lazy" src={`/assets/img/team/${member.img}`} alt="" />
                    <figcaption className="m-0 p-4">
                      <h4 className="mb-1">{member.name}</h4>
                      <p className="text-secondary mb-0">{member.role}</p>
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

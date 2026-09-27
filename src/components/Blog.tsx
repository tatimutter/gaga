import { IconEye, IconCalendar, IconChat } from "./Icons";

interface Post {
  img: string;
  category: string;
  title: string;
  date: string;
  comments: number;
}

const POSTS: Post[] = [
  { img: "blog-image-1.jpg", category: "Business", title: "How to Improve Your Project Management Skills", date: "7 Feb 2023", comments: 55 },
  { img: "blog-image-2.jpg", category: "Technology", title: "Modern Cybersecurity Trends to Watch in 2023", date: "12 Aug 2023", comments: 39 },
  { img: "blog-image-3.jpg", category: "Health", title: "Health Care Job Growth Outpaces Other Industries", date: "21 Dec 2023", comments: 61 },
  { img: "blog-image-4.jpg", category: "Networking", title: "Five Essential Network Security Trends to Watch", date: "21 Feb 2023", comments: 61 },
];

export default function Blog(): JSX.Element {
  return (
    <section id="scrollspyBlog" className="bsb-tpl-bg-linen py-5 py-xl-8 bsb-section-py-xxl-1">
      <div className="container">
        <div className="row gy-5 gy-lg-0 align-items-center">
          <div className="col-12 col-lg-4">
            <h2 className="display-3 fw-bolder mb-4">
              Our{" "}
              <mark className="bsb-tpl-highlight bsb-tpl-highlight-yellow">
                <span className="bsb-tpl-font-hw display-1 text-accent fw-normal">Blog</span>
              </mark>
            </h2>
            <p className="fs-4 mb-4 mb-xl-5">Stay tuned and updated by the latest updates from our blog.</p>
            <a href="#!" className="btn bsb-btn-2xl btn-primary rounded-pill">More Plans</a>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <div className="row gy-4 gy-xxl-5 gx-xxl-5">
                  {POSTS.map((post) => (
                    <div className="col-12 col-lg-6" key={post.title}>
                      <article>
                        <figure className="rounded overflow-hidden mb-3 bsb-overlay-hover">
                          <a href="#!">
                            <img className="img-fluid" loading="lazy" src={`/assets/img/blog/${post.img}`} alt="" />
                          </a>
                          <figcaption>
                            <IconEye />
                            <h4 className="h6 text-white mt-2">Read More</h4>
                          </figcaption>
                        </figure>
                        <div className="entry-header mb-3">
                          <ul className="entry-meta list-unstyled d-flex mb-2">
                            <li><a className="link-primary text-decoration-none" href="#!">{post.category}</a></li>
                          </ul>
                          <h2 className="entry-title h4 mb-0">
                            <a className="link-dark text-decoration-none" href="#!">{post.title}</a>
                          </h2>
                        </div>
                        <div className="entry-footer">
                          <ul className="entry-meta list-unstyled d-flex align-items-center mb-0">
                            <li>
                              <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                                <IconCalendar />
                                <span className="ms-2 fs-7">{post.date}</span>
                              </a>
                            </li>
                            <li><span className="px-3">&bull;</span></li>
                            <li>
                              <a className="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                                <IconChat />
                                <span className="ms-2 fs-7">{post.comments}</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </article>
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

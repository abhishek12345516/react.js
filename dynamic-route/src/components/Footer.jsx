import React from "react";

 function Footer() {
  const year = new Date().getFullYear();

  const social = [
    { name: "Twitter", href: "https://twitter.com/", icon: "bi-twitter" },
    { name: "GitHub", href: "https://github.com/", icon: "bi-github" },
    { name: "LinkedIn", href: "https://linkedin.com/", icon: "bi-linkedin" },
    { name: "Email", href: "mailto:hello@example.com", icon: "bi-envelope" },
  ];

  const columns = [
    { title: "Product", links: ["Overview", "Features", "Pricing", "Changelog"] },
    { title: "Resources", links: ["Docs", "API", "Guides", "Community"] },
    { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
    { title: "Legal", links: ["Privacy", "Terms", "Security", "DPA"] },
  ];

  function onNewsletterSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const email = data.get("email");
    console.log("Newsletter signup:", email);
    e.currentTarget.reset();
    alert("Thanks for subscribing! ✨");
  }

  return (
    <footer className="bg-light border-top mt-5">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h5>YourBrand</h5>
            <p>Build fast. Ship beautiful.</p>
            <ul className="list-unstyled">
              <li><i className="bi-geo-alt-fill me-2"/> Gurugram, Haryana</li>
              <li><i className="bi-telephone-fill me-2"/> +91-98765-43210</li>
              <li><i className="bi-globe me-2"/> www.example.com</li>
            </ul>
            <div className="d-flex gap-2 mt-3">
              {social.map(({ name, href, icon }) => (
                <a key={name} href={href} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm">
                  <i className={`${icon}`}></i>
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title} className="col-6 col-md-2">
              <h6>{col.title}</h6>
              <ul className="list-unstyled">
                {col.links.map((link) => (
                  <li key={link}><a href="#" className="text-decoration-none">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <h6>Subscribe to our newsletter</h6>
            <form className="d-flex" onSubmit={onNewsletterSubmit}>
              <input type="email" name="email" className="form-control me-2" placeholder="you@company.com" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-secondary text-white py-3 mt-4">
        <div className="container d-flex justify-content-between">
          <span>© {year} YourBrand • All rights reserved</span>
          <div>
            <a href="#" className="text-white me-3">Status</a>
            <a href="#" className="text-white me-3">Support</a>
            <a href="#" className="text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

export default function FAQNavbar() {
  return (
    <>
      <div className="faq-topbar">
        <div className="faq-container faq-topbar-inner">
          <div>Email: info@nmcn.gov.ng</div>
          <div>Plot 713, Cadastral Zone Life Camp, Gwarinpa, Abuja</div>
        </div>
      </div>

      <header className="faq-navbar">
        <div className="faq-container">
          <div className="faq-navbar-inner html-style-navbar">
            <div className="faq-brand-wrap">
              <img
                src="/public/images/nmcn-removebg-preview.png"
                alt="Nursing and Midwifery Council of Nigeria Logo"
                className="faq-real-logo"
              />

              <div className="faq-brand-text">
                <h2>Nursing and Midwifery Council of Nigeria</h2>
                { <p>Frequently Asked Questions</p> }
              </div>
            </div>

            <nav className="faq-main-nav">
              <a href="https://nmcn.gov.ng/" className="faq-nav-link">
                Main Website
              </a>
              <a href="https://nmcn.gov.ng/reach-us/" className="faq-nav-link">
                Reach Us
              </a>
              <a href="https://licence.nmcn.gov.ng/" className="faq-nav-link">
                Licence Portal
              </a>
              <a href="/faq" className="faq-nav-link active-nav-link">
                FAQ
              </a>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
import React from 'react'

const Footer = () => {
  return (
    <>


    <footer id="footer-widgets">
      <div className="container">
        <div className="go-top">
          <a href="#top">
            <i className="ti-arrow-up"></i>
          </a>
        </div>
        <div className="row">
          <div className="col-md-6 ov-h">
            <div className="row">
              <div className="col-sm-4">
                <div className="widget">
                  <h6 className="upper">About Comet</h6>
                  <p>
                    <span>Fourth Floor</span>
                    <span>New York, NY 10011</span>
                    <span>hello@comet.com</span>
                  </p><a href="#" className="btn btn-color-out btn-sm">Hire Us!</a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="widget">
                  <h6 className="upper">Culture</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="#">Team</a>
                    </li>
                    <li>
                      <a href="#">Process</a>
                    </li>
                    <li>
                      <a href="#">Story</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="widget">
                  <h6 className="upper">Case Studies</h6>
                  <ul className="list-unstyled">
                    <li>
                      <a href="portfolio-single-1.html">Neleman Cava</a>
                    </li>
                    <li>
                      <a href="portfolio-single-2.html">Sweet Lane</a>
                    </li>
                    <li>
                      <a href="portfolio-single-3.html">Jeff Burger</a>
                    </li>
                    <li>
                      <a href="portfolio-single-1.html">Juice Meds</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-md-offset-2">
            <div className="row">
              <div className="col-md-12">
                <div className="widget">
                  <h6 className="upper">Stay in touch</h6>
                  <p>Sign Up to get the latest updates.</p>
                  <div className="footer-newsletter">
                    <form data-mailchimp="true" className="inline-form">
                      <div className="input-group">
                        <input type="email" name="email" placeholder="Your Email" className="form-control"/><span className="input-group-btn"><button type="submit" data-loading-text="Loading..." className="btn btn-color">Subscribe</button></span>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- end of row--> */}
      </div>
      {/* <!-- end of container--> */}
    </footer>

    <footer id="footer">
      <div className="container">
        <div className="footer-wrap">
          <div className="row">
            <div className="col-md-4">
              <div className="copy-text">
                <p><i className="icon-heart red mr-15"></i>© 2015 Comet Agency.</p>
              </div>
            </div>
            <div className="col-md-4">
              <ul className="list-inline">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <div className="footer-social">
                <ul>
                  <li>
                    <a target="_blank" href="#"><i className="ti-facebook"></i></a>
                  </li>
                  <li>
                    <a target="_blank" href="#"><i className="ti-twitter-alt"></i></a>
                  </li>
                  <li>
                    <a target="_blank" href="#"><i className="ti-linkedin"></i></a>
                  </li>
                  <li>
                    <a target="_blank" href="#"><i className="ti-instagram"></i></a>
                  </li>
                  <li>
                    <a target="_blank" href="#"><i className="ti-dribbble"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- end of row--> */}
        </div>
      </div>
      {/* <!-- end of container--> */}
    </footer>

    </>
  )
}

export default Footer;
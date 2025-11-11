function About() {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          
          <div className="row align-items-center mb-5">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img 
                // src="https://lh3.googleusercontent.com/pw/AP1GczPRgWQcydFvuphGPis26xBM8tba17HRqwKgmRlL1eHsnXE56cfNU5LYUz6XnSSnE7AWNeeUkeZ7UCkj-Vt0KheJqgFEBkfvpnuh6myb59ZB3RfhtsmiKuYmiGxZSnLE_bmBftjjC0tD0hOfG_G0XGHm-Q=w1188-h1594-s-no-gm" 
                src="https://media.licdn.com/dms/image/v2/C4E03AQH7tlcK3woE3A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1608084675274?e=2147483647&v=beta&t=JFuVk4ciKCDHR--j3UnEk1O4qj8PRFMRblaxaKPNk-s" 
                alt="Owner of Scibelli Plumbing & Heating" 
                className="img-fluid rounded-circle shadow"
                style={{
                  width: '200px', 
                  height: '200px', 
                  objectFit: 'cover',
                  border: '4px solid #fbbf24'
                }}
              />
            </div>
            <div className="col-md-8">
              <h3 className="mb-3">Meet the Owner</h3>
              <p >
                With years of hands-on experience, Mike has built his reputation on honesty, reliability, and high-quality workmanship. As a licensed plumber, he's handled everything from small household repairs to complex plumbing installations, always with the same attention to detail and care.
              </p>
              <p>
                Mike believes plumbing is more than fixing pipes, it's about making people's lives easier and homes more comfortable. He takes the time to listen, explain solutions clearly, and ensure every job is done right the first time. His friendly, dependable approach has earned him the trust of countless homeowners and businesses who know they can rely on him in any situation.             
              </p>
              <p>
                When you call Mike, you're not just hiring a plumber, you're gaining a trusted professional who treats your home like his own.        
              </p>
            </div>
          </div>

          {/* Additional sections */}
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">Our Mission</h5>
                  <p className="card-text">
                    To provide reliable, professional plumbing and heating services while building lasting relationships with our customers through trust and quality workmanship.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-primary">Why Choose Us?</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2">✓ Licensed & Insured</li>
                    <li className="mb-2">✓ 5+ Years Experience</li>
                    <li className="mb-2">✓ Competitive Pricing</li>
                    <li className="mb-2">✓ Customer Satisfaction Guaranteed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to action */}
          <div className="text-center mt-5">
            <h4 className="mb-3">Ready to Get Started?</h4>
            <p className="mb-4">Contact us today for a free estimate on your plumbing or heating needs.</p>
            <a href="tel:4133358743" className="btn btn-outline-secondary btn-lg">
              Call (413) 335-8743
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
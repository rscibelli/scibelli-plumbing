import Img from '../pictures/IMG_4313.JPEG';

function Home() {

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 ps-5">
          <img 
            src={Img}
            alt="Scibelli Plumbing & Heating Logo" 
            className="img-fluid mb-4"
            style={{maxWidth: '400px'}}
          />
        </div>
        <div className="col-lg-6">
            <h1 className="display-4 mb-4">Welcome to Scibelli Plumbing & Heating</h1>
            <p className="lead">Your trusted partner for all plumbing and heating needs.</p>
            <p className="mb-4">Professional, reliable service with many years of experience in the industry.</p>
            <div 
                className="d-inline-flex align-items-center px-4 py-3 bg-secondary text-white rounded-3 shadow-lg"
                style={{ fontSize: '1.5rem', fontWeight: '600' }}
            >
                <a href="tel:5551234567" className="text-white text-decoration-none">
                    (413) 335-8743
                </a>
            </div>
        </div>
      </div>
      
      {/* Services Preview Section */}
      <div className="row mt-5 pt-5">
        <div className="col-md-4 text-center mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">Plumbing Services</h5>
                <p className="card-text">Complete plumbing solutions including repairs, installations, and emergency services.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">Heating Systems</h5>
                <p className="card-text">Expert heating system installation, maintenance, and repair services.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 text-center mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body">
                <h5 className="card-title">
                    Emergency Services <span className="fst-italic text-muted">(Coming soon!)</span>
                </h5>
                <p className="card-text">24/7 emergency plumbing and heating services when you need us most.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
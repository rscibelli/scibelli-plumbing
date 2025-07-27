function Home() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 ps-5">
          <img 
            src="https://chatgpt.com/backend-api/public_content/enc/eyJpZCI6Im1fNjg4MjRjODU4M2IwODE5MWFlZDM2ZDFjMjEzOGM1MDc6ZmlsZV8wMDAwMDAwMDE0ZGM2MWZkYTllZWY3MWM0MDRhODFkYSIsInRzIjoiNDg3MTIyIiwicCI6InB5aSIsInNpZyI6ImFhNmFkZDY5YWFhN2MwMjRiZGQ4ZmYxODEzMzRmOTI2OTI4ZmEzZTkxNjExNDkxYjVkNWVmN2JiM2M1MGVjNjIiLCJ2IjoiMCIsImdpem1vX2lkIjpudWxsfQ==" 
            alt="Scibelli Plumbing & Heating Logo" 
            className="img-fluid mb-4"
            style={{maxWidth: '400px'}}
          />
        </div>
        <div className="col-lg-6">
          <h1 className="display-4 mb-4">Welcome to Scibelli Plumbing & Heating</h1>
          <p className="lead">Your trusted partner for all plumbing and heating needs.</p>
          <p className="mb-4">Professional, reliable service with over years of experience in the industry.</p>
          <button className="btn btn-primary btn-lg me-3">Get a Quote</button>
          <button className="btn btn-outline-secondary btn-lg">Call Now</button>
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
              <h5 className="card-title">Emergency Services</h5>
              <p className="card-text">24/7 emergency plumbing and heating services when you need us most.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
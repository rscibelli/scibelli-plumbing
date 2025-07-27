function Services() {
  return (
    <div className="container py-5">
      <h1 className="h2 mb-5">Our Services</h1>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4">Plumbing Services</h2>
              <ul className="list-unstyled">
                <li>• Leak detection and repair</li>
                <li>• Drain cleaning</li>
                <li>• Toilet installation and repair</li>
                <li>• Faucet and sink services</li>
                <li>• Water heater installation and repair</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h2 className="card-title h4">Heating Services</h2>
              <ul className="list-unstyled">
                <li>• Boiler maintenance and repair</li>
                <li>• Radiator installation</li>
                <li>• Thermostat replacement</li>
                <li>• Central heating system diagnostics</li>
                <li>• Emergency heating repairs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;

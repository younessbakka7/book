import './Service.css';

const Service = () => {
    return (
       <div className="service-container">
        <div className="service-item">
            <i className="bi bi-truck"></i>
            <p className="service-text">Free Shipping</p>

        </div>
        <div className="service-item">
            <i className="bi bi-gift"></i>
            <p className="service-text">Card Gift</p>

        </div>
        <div className="service-item">
            <i className="bi bi-arrow-clockwise"></i>
            <p className="service-text">7 Days Return</p>

        </div>
        <div className="service-item">
            <i className="bi bi-send"></i>
            <p className="service-text">Conatct Us</p>

        </div>

       </div>
    );
}

export default Service;

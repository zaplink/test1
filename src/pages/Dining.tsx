import diningImage from '../img/dining.png';

function Dining() {
  return (
    <div className="container-dining">
      <div className="left-column-dining">
          <h1>Dining</h1>
        <div className="content">
          <ul>
            <li>Cheese Cake</li>
            <li>Rolls</li>
            <li>Kirya</li>
            <li>Mun Kewm</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      <div className="right-column-dining">
        <div className="img-div">
          <img src={diningImage} alt="Dining table with food" />
        </div>
      </div>
    </div>
  );
}

export default Dining;

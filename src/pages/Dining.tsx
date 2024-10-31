import { useNavigate } from "react-router-dom";
import '../dining.css';
import diningImage from '../dining.jpg';

function Dining() {
  const navigate = useNavigate();

  function gotoShopping() {
    navigate("/shopping");
  }
  return (
    <>
       <div className="container">
      <div className="textSection">
        <h2>Dining</h2>
        <ul>
          <li>Cheese Cake</li>
          <li>Rolls</li>
          <li>Kirya</li>
          <li>Mun Kewm</li>
          <li>Cookies</li>
        </ul>
        <button className="nextButton">→</button>
      </div>
      <div className="imageSection">
        <img src={diningImage} alt="Dining items" />
      </div>
    </div>
      <button onClick={gotoShopping}>Go to shopping</button>
    </>
  );
}
  
export default Dining;

import { useNavigate } from "react-router-dom";

function Dining() {
  const navigate = useNavigate();

  function gotoShopping() {
    navigate("/shopping");
  }
  return (
    <>
      <p>This is Dining</p>
      <button onClick={gotoShopping}>Go to shopping</button>
    </>
  );
}
  
export default Dining;

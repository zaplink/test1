
const Menu = () => {
  const handleClick = () => {
    alert('Next button clicked!');
  };

  return (
    <div className="menu">
      <h1>Dining</h1>
      <ul>
        <li>Cheese Cake</li>
        <li>Rolls</li>
        <li>Kirya</li>
        <li>Mun Kewm</li>
        <li>Coockies</li>
      </ul>
      <button onClick={handleClick} id="next-btn">→</button>
    </div>
  );
};

export default Menu;

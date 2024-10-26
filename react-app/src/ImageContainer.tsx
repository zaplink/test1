import diningImage from './dining.jpg'; // You can replace this with your own image

const ImageContainer = () => {
  return (
    <div className="image-container">
      <img src={diningImage} alt="Dining" height={400}  />
    </div>
  );
};

export default ImageContainer;

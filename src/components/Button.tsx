import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  btnlist: { id: number; label: string; link: string }[];
}

const Button: React.FC<ButtonProps> = ({ btnlist }) => {
  
    return (
    <>
      {btnlist.map((button) => (
        <button id="btn">
          <div className="idno">{button.id}</div>
          <div className="btn_label">
            <Link to={button.link}>
              {button.label}
            </Link>
          </div>
        </button>
      ))}
    </>
  );
};

export default Button;

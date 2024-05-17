import React, { useContext } from 'react';
import { PiCookingPotFill } from 'react-icons/pi';
import { FaRegHeart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Card = ({ image, label, id }) => {
    const { savedRecipeById } = useContext(AppContext);
    const navigate = useNavigate();

    return (
        <div className="card" style={{ width: '15rem', margin: '10px' }}>
            <img src={image} className="card-img-top" alt={label} style={{ height: '10rem' }} />
            <div className="card-body">
                <h6 className="card-title">{label}</h6>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '20px', cursor: 'pointer' }}>
                   
                    <PiCookingPotFill onClick={() => navigate(`/recipe/${id}`)} />
                </div>
            </div>
        </div>
    );
};

export default Card;

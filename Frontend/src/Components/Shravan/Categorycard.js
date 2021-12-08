import React from 'react';
import "./Carousel.css";
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import MainProductsPage from '../Khyati/MainProductsPage';

export default function Categorycard(props) {
    const history = useHistory();
    const {data}  = props;
    console.log(data[0]);
    function onPress(){
        console.log(data);
        history.push("/category");
    }
    return (
        <div className="catergorycard-container" onClick={onPress}>
            <div>
                <img src={data[0].image} />
            </div>
            <div className="category-name" style={{color:"#FEA91E", fontWeight:"bold"}}>
                {data[0].category}
            </div>
        </div>
    )
}

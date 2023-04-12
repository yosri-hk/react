import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import './Product.css';
import { NavLink } from 'react-router-dom';
function Product(props) {
    const  [like,setLike]=useState(props.like);
const clickHandler = () => {
    setLike(like + 1);
  };

  const cardStyle = {
    backgroundColor: like > 5 ? '#DB7090' : 'none',
    animation: like > 5 ? 'clignote 2s linear infinite' : 'none',
  };

  const keyframes = `
    @keyframes clignote {
      50% { opacity: 0.5; }
    }
  `;
  return (
    <Card  className='card' style={cardStyle}>
        <style>{keyframes}</style>

      <Card.Img  variant="top"  src={require('./assets/images/'+props.img)} width="286" height="180" />
      <Card.Body>
      <NavLink to={`${props.Title}`}>
            
            
      <Card.Title>{props.Title}</Card.Title>
      </NavLink>
            <Card.Text>
            Price : {props.price} DT
            </Card.Text>
            <Card.Text>
              Quantity : {props.quantite}
            </Card.Text>
            <Card.Text>
              Likes : {like}
            </Card.Text>
            <button className='btn btn-primary' onClick={clickHandler}>Like</button>
            <Button className='btn btn-info' disabled={props.quantite===0} onClick={props.buy} >Buy</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
function Product(props) {
    const  [like,setLike]=useState(props.like);
const clickHandler = () => {
    setLike(like + 1);
  };
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img  variant="top"  src={require('./assets/images/'+props.img)} width="286" height="180" />
      <Card.Body>
      <Card.Title>{props.title}</Card.Title>
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
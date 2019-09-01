import React from 'react';
import PropTypes from "prop-types";

const FoodILive = [
  {
    id : 1,
    name : "heart",
    image : "https://cdn.pixabay.com/photo/2019/02/15/11/04/book-3998252_960_720.jpg",
    rating : 5
  },
  {
    id : 2,
    name : "dog",
    image : "https://cdn.pixabay.com/photo/2019/08/19/07/45/pets-4415649_960_720.jpg",
    rating : 2.3
  },
  {
    id : 3,
    name : "doggy",
    image : "https://cdn.pixabay.com/photo/2015/06/08/15/02/pug-801826_960_720.jpg",
    rating : 33
  }
]


function Food({ name, picture, rating}){
  return <div>
    <h1>I love {name}</h1>
    <p>{rating} / 5.0</p>
    <img src={picture} alt={name}/>
  </div>
}

Food.propTypes  = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {FoodILive.map(dish => (
        <Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>
      ))}
    </div>
  );
}

export default App;

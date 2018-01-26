import React from 'react';
import '../styles/Card.css'

const Card = (props) => {

console.log(props.compareCards)

const cardDisplay = Object.keys(props['data'].data).map( (year, index) => 
  props['data'].data[year] > .5 ? <li className='higher' key={index}> {year} : {props['data'].data[year]} </li> : 
  <li className='lower' key={index}> {year} : {props['data'].data[year]} </li>
  );
  
  // onClick={() => props.compareCards (props['data'].location)

  return (
    <article className='card' onClick={() => props.compareCards(props['data'].location)}>
      <h2>{props['data'].location}</h2>
      <ul>{cardDisplay}</ul>
    </article>
    ) 
}

export default Card
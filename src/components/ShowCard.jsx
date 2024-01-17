import React from 'react'
import data from './data';
import Cards from './Cards';
function ShowCard() {
  return (
    <section id="core-concepts">
          <h2>DEVELOPERS</h2>
          <ul>
            {data.map((item,index) => {
              return <Cards key={index} title={item.name} discp={item.title} />;
            })}
          </ul>
    </section>
  )
}

export default ShowCard;  
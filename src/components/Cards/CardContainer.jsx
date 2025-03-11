import React from "react";
import Card from './Card';
import carData from './carData'; // ✅ Data Import

function CardContainer({ limit }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 z-0">
      {carData.slice(0, limit || 3).map((card) => (
        <Card 
          key={card.id} 
          id={card.id}  //  ✅ Pass the id here!  
          images={card.images} 
          title={card.title}
          model={card.model} 
          capacity={card.capacity} 
          average={card.average} 
          vehicle={card.vehicle}
          Transmission={card.Transmission}
          price={card.price} 
        />
      ))} 
    </div>
  );
}

export default CardContainer;

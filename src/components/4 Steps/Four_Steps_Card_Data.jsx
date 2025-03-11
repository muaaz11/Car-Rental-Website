import React from 'react'
import Four_Steps from './Four_Steps';

function Four_Steps_Card_Data() {

  const fourStepsData = [ 
    {
      id: 1,
      title: 'Create a profile',
      description: 'Register on our platform to access a personalized car rental experience.'
    },
    {
      id: 2,
      title: 'Search for a car',
      description: 'Choose from a variety of cars and filter based on your preferences.'
    },
    {
      id: 3,
      title: 'Book a car',
      description: 'Book a car of your choice with just a few clicks.'
    },
    {
      id: 4,
      title: 'Drive away',
      description: 'Pick up the car from your nearest location and start your journey.'
    }
  ]
  return (
    <div>
      {fourStepsData.map((step) =>  (
        <Four_Steps key={step.id} title={step.title} description={step.description} />
      ))}
    </div>
  )
}

export default Four_Steps_Card_Data;

import React from 'react'

interface PersonProp {
  firstName: string
  destination: string
  instrument: string
}
const Text: React.FC<PersonProp> = ({firstName, destination, instrument}) => {
  return (
    <div>
      <h3>My name is {firstName}, I play the {instrument}, I just got back from {destination}</h3>
    </div>
  )
}

export default Text
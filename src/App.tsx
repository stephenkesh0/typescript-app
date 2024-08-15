import React from 'react'
import Text from './components/Text'
import Count from './components/Count'
import Form from './components/Form'

const App: React.FC = () => {
  return (
    <div>
      <Text firstName = "Taiwo" destination = "Lokoja" instrument = "Gan gan"/>
      <Text firstName = "CM" destination = "Epe" instrument = "Sekere"/>
      <Text firstName = "Apostle" destination = "Rome" instrument = "Drum"/>
      <Text firstName = "Bolu" destination = "Londo" instrument = "Cello"/>

      <Count/>

      <Form/>
    </div>
  )
}

export default App
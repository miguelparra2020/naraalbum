import './App.css'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import imagePortada from './assets/portada-nara.jpeg'
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    setTimeout(() => {
      console.log("Hola")
    }, 5000);
  }, [])

  return (
    <>
      <h1>Bienvenidos a mi albúm fotográfico</h1>
      <div style={{display: 'flex', justifyContent: 'center'}}>
      <MDBCard >
      <MDBCardImage src={imagePortada} position='top' alt='...' 
      width={180}
      height={320}
      />
      <MDBCardBody>
        <MDBCardTitle>Nara Páez Aguirre</MDBCardTitle>
        <MDBCardText>
          24/08/2024 9:18 pm
        </MDBCardText>
      </MDBCardBody>
      
    </MDBCard>
    </div>
    </>
  )
}

export default App

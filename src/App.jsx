import './App.css'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';
import imagePortada from './assets/portada-nara.jpeg'
function App() {

  return (
    <>
      <h1>Bienvenidos a mi albúm fotográfico</h1>
      <MDBCard>
      <MDBCardImage src={imagePortada} position='top' alt='...' 
      width={200}
      height={320}
      />
      <MDBCardBody>
        <MDBCardTitle>Nara Páez Aguirre</MDBCardTitle>
        <MDBCardText>
          24/08/2024 9:18 pm
        </MDBCardText>
      </MDBCardBody>
    </MDBCard>
    </>
  )
}

export default App

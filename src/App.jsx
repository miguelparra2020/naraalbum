import './App.css'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn
} from 'mdb-react-ui-kit';
import imagePortada from './assets/portada-nara.jpeg'
function App() {

  return (
    <>
      <h1>Albúm fotográfico</h1>
      <MDBCard>
      <MDBCardImage src={imagePortada} position='top' alt='...' 
      width={"200"}
      height={"320"}
      />
      <MDBCardBody>
        <MDBCardTitle>Nara Páez Aguirre</MDBCardTitle>
        <MDBCardText>
          24/08/2024 9:18 pm
        </MDBCardText>
        <MDBBtn href='https://www.appsheet.com/start/e275bb84-455b-477a-bf38-6ed3b1e283e5' target='_blanck' color='danger'>Agregar fotografía <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera-fill" viewBox="0 0 16 16">
  <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
  <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
</svg></MDBBtn>
      </MDBCardBody>
    </MDBCard>
    </>
  )
}

export default App

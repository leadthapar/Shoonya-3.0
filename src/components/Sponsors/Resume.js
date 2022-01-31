import {Container} from 'react-bootstrap'
import FlipCard from './FlipCard';
import Sponsor from './ConstDataSponsors';
function Resume() {


  return (
    <div >
    <Container fluid className='resume-section'>
  <h1 className="my-5 text-light font-weight-bold" style={{textAlign:"center"}}>Our Sponsors</h1>
  <Container className="my-5 text-light">
  <div className="row">
  {
    Sponsor.map((elem)=>{
      return (
        <FlipCard
          name={elem.name}
          desc={elem.desc}
          image={elem.image}
        />
      )
    })
  }
   
   
    </div>
    
  </Container>
  </Container> 
  </div>
  );
}

export default Resume;

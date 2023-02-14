import { About } from './About/About';
import { Hero } from './Hero/Hero';
import { ElementorWidget } from './ElementorWidget/ElementorWidget';
import { MainContainer } from './Home.styled';
import { Service } from './Service/Service';

const Home = () => {
  return (
<>
  <Hero />
    <MainContainer>   
      <About />
        <ElementorWidget />
      <Service/>  
    </MainContainer>
</>    
  );
};

export default Home;

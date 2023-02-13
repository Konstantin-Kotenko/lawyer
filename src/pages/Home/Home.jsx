import { About } from './About/About';
import { Hero } from './Hero/Hero';
import { ElementorWidget } from './ElementorWidget/ElementorWidget';
import { MainContainer } from './Home.styled';

const Home = () => {
  return (
<>
  <Hero />
    <MainContainer>   
      <About />
      <ElementorWidget/>
    </MainContainer>
</>    
  );
};

export default Home;

import { About } from './About/About';
import { Hero } from './Hero/Hero';
import { ElementorWidget } from './ElementorWidget/ElementorWidget';
import { MainContainer } from './Home.styled';
// import { Service } from './Service/Service';
import { Container } from '../../components/Container/Container';

const Home = () => {
  return (
<>
<Container>
<Hero />
    <MainContainer>   
      <About />
        <ElementorWidget />
      {/* <Service/>   */}
    </MainContainer>
</Container>
</>    
  );
};

export default Home;

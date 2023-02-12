// import { Header } from '../common/Header/Header';
// import {Navigation} from '../common/Navigation/Navigation'
import { About } from './About/About';
import { Hero } from './Hero/Hero';
import { HomePageContainer } from './Home.styled';
import { ElementorWidget } from './ElementorWidget/ElementorWidget';

const Home = () => {
  return (
    <HomePageContainer>
      {/* <Header />
      <Navigation /> */}
      <Hero />
      <About />
      <ElementorWidget/>
    </HomePageContainer>
    
  );
};

export default Home;

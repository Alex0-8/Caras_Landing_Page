import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyles from './theme/GlobalStyles';
import Theme from './theme';
import SubscriptionForm from './components/SubscriptionForm';
import { SubscriptionData } from './hooks/useSubscription';
import FeaturedSection from './components/FeaturedSection';
import Testimonials from './components/Testimonials';
import FooterSection from './components/Footer';

function App() {
  const handleSubscribe = (data: SubscriptionData) => { // funcion que imprime en consola los datos de  la suscripcion
    console.log("Haz sido suscrito: ", data)
  }

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
        <div className="App">
          <Header />
          <main role='main'>
            <SubscriptionForm onSubscribe={handleSubscribe}/>
            <FeaturedSection />
            <Testimonials />
          </main>
          <FooterSection />
        </div>
    </ThemeProvider>
  );
}

export default App;
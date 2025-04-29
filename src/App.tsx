import { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import GlobalStyles from './theme/GlobalStyles';
import Theme from './theme';
import SubscriptionForm from './components/SubscriptionForm';
import { SubscriptionData } from './hooks/useSubscription';

function App() {
  const handleSubscribe = (data: SubscriptionData) => {
    console.log("Haz sido suscrito: ", data)
  }

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
        <div className="App">
          <Header />
          <main>
            <SubscriptionForm onSubscribe={handleSubscribe}/>
          </main>
        </div>
    </ThemeProvider>
  );
}

export default App;
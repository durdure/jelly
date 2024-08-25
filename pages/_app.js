import '../styles/globals.css';
import Header from '../Components/Header/Header';

function MyApp({ Component, pageProps }) {
  return (
    <> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

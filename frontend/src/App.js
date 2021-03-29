
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';




function App() {



  return (
    <BrowserRouter>
      <Header />


      <main>
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path='/' component={HomeScreen} exact />
        <Route path='/signin' component={SigninScreen} />
        <Route path='/product/:id' component={ProductScreen} />
      </main>
      <Footer />

    </BrowserRouter>
  )
}

export default App;

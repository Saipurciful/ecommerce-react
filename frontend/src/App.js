import react from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';



function App() {
  return (
    <BrowserRouter>
      <Header />


      <main>

        <Route path='/' component={HomeScreen} exact></Route>
        <Route path='/product/:id' component={ProductScreen}></Route>
      </main>
      <Footer />

    </BrowserRouter>
  )
}

export default App;

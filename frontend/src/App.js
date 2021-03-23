import react from 'react'
import Product from './components/Product';

import data from './data'


function App() {
  return (

    <div className='grid-container'>
      <header className="row">
        <div>
          <a className="brand" href="/">Embroider</a>
        </div>
        <div>
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>

      </header>
      <main>
        <div className="row center">

          {data.products.map((products) => (

            <Product key={products._id} product={products} />

          )

          )}s

        </div>
      </main>
      < footer className="row center">All right reserved/</footer>
    </div>
  )
}

export default App;

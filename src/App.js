import { Route } from 'react-router-dom'
import './App.css'
import Wellcome from './pages/Wellcome'
import Products from './pages/Products'
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductDetail'


function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path='/wellcome'>
          <Wellcome />
        </Route>
        <Route path='/products'>
          <Products />
        </Route>
        <Route path='/product-detail/:productId'>
          <ProductDetail />
        </Route>
      </main>
    </div>
  )
}

export default App

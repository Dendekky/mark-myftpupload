import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/app.scss'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import BoutiqueWomen from './pages/BoutiqueWomen'

function App () {
  return (
    <BrowserRouter>
      <div className='site-container'>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/boutique-women' component={BoutiqueWomen} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Redashcomponent from './Redashcomponent'
import Finvasia from './Finvasia'
import Zerodha from './Zerodha'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (  
    <Router>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Switch>
          <Route exact path="/">
             <Home />
          </Route>
          <Route path="/Redashcomponent">
             <Redashcomponent />
          </Route>
          <Route path="/Finvasia">
             <Finvasia />
          </Route>
          <Route path="/Zerodha">
             <Zerodha />
          </Route>
        </Switch>
      </div>
    </Router> 
  ) 
}

export default App
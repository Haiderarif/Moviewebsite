import React from 'react'
import Signin from './Signin'
import Emptystate from './Emptystate'
import Movielist from './Movielist'
import Createnewmovie from './Createnewmovie'
import Edit from './Edit'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path='/'>
        <Signin/>
        </Route>
       <Route path='/Emptystate'>
       <Emptystate/>
       </Route>
   <Route path='/movielist'>
   <Movielist/>
   </Route>
   

<Route path='/createnewmovie'>
<Createnewmovie/>
</Route>
  
    
     <Route path='/edit'>
     <Edit/>
     </Route>
      </Switch>
   
    </div>
    </Router>

  )
}

export default App
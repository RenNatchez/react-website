import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home.js'
import Gallery1 from './pages/Gallery1.js'
import Gallery2 from './pages/Gallery2.js'
import Services from './pages/Services.js'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/gallery1" component={Gallery1}/>
        <Route exact path="/gallery2" component={Gallery2}/>
        <Route exact path="/services" component={Services}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

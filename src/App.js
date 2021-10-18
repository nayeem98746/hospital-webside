import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from './component/Home/Home';
import NotFound from './component/NotFound/NotFound';
import Services from './component/Services/Services';
import Login from './component/Login/Login/Login';
import Header from './component/Shared/Header/Header';
import Register from './component/Register/Register';
import AuthProvider from './Context/AuthProvider';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route  path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;

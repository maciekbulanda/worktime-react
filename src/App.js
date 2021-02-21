import './App.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import MainPage from "./MainPage/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar bg='primary' variant='dark'>
        <Navbar.Brand>Karta pracy</Navbar.Brand>
        <Nav>
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
        </Nav>
      </Navbar>
      <Switch>
        <Route exact path='/'><MainPage/></Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Destinations from './pages/Destinations/Destinations';
import News from './pages/News/News';
import Details from './components/Details';
import PrivateRoute from './components/PrivateRoute';
import AuthProvider from './context/AuthProvider';
import Login from './pages/Login/Login';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';
import Orders from './pages/Orders/Orders';
import Footer from './pages/shared/Footer';
import Header from './pages/shared/Header';
import Success from './pages/Success/Success';
import Blog from './pages/Blog/Blog';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/destinations'>
              <Destinations></Destinations>
            </Route>
            <PrivateRoute path='/booking/:locationId'>
              <Details></Details>
            </PrivateRoute>
            <Route path='/blog'>
              <Blog></Blog>
            </Route>
            <Route path='/news'>
              <News></News>
            </Route>
            <PrivateRoute path='/myorders'>
              <Orders></Orders>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/success'>
              <Success></Success>
            </Route>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
      </AuthProvider>
    </div>
  );
}

export default App;

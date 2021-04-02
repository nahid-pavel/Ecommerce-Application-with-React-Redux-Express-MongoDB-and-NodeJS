import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';
import Home from './components/Home/Home';
import MainNavigation from './components/Navigation/MainNavigation';




function App() {
  return (
    <Router>
      <MuiThemeProvider theme={theme} />
      <CssBaseline />
      
      <Switch>
        <MainNavigation  />
        <Route exact path="/" component={Home} />
      </Switch>


    </Router>
  );
}

export default App;

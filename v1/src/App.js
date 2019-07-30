import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  HashRouter
} from 'react-router-dom';

import NavigationBar from './Components/NavigationBar';
import MaterialDesignColors from './Components/MaterialDesignColors';
import FlatUIColors from './Components/FlatUIColors';
import MetroColors from './Components/MetroColors';
import SocialColors from './Components/SocialColors';
import ColorPicker from './Components/ColorPicker';
import FamousColors from './Components/FamousColors';
import ColorCombination from './Components/ColorCombination';
import AboutUs from './Components/AboutUs';
import ToastMsg from './Components/ToastMessage';
import Loader from './Components/Loader';


function App() {
  return (
    <HashRouter>
      <div className="App">
        <NavigationBar />
        <div className="body-w">
          <div className="row">
            <div className="col col-md-12">
              <Switch>
                <Route path="/" exact component={MaterialDesignColors} />
                <Route path="/flatcolors" component={FlatUIColors} />
                <Route path="/metrocolors" component={MetroColors} />
                <Route path="/colorpicker" component={ColorPicker} />
                <Route path="/socialcolors" component={SocialColors} />
                <Route path="/popularcolors" component={FamousColors} />
                <Route path="/colorcombination" component={ColorCombination} />
                <Route path="/about" component={AboutUs} />
                <Route path="*" render={() => <Redirect to={{ pathname: "/" }} />} />
              </Switch>
            </div>
          </div>
          <ToastMsg />
          <Loader />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from './Components/NavigationBar';
import MaterialDesignColors from './Components/MaterialDesignColors';
import FlatUIColors from './Components/FlatUIColors';
import MetroColors from './Components/MetroColors';
import SocialColors from './Components/SocialColors';
import ColorPicker from './Components/ColorPicker';
import FamousColors from './Components/FamousColors';
import ColorCombination from './Components/ColorCombination';


function App() {
  return (
    <Router>
    <div className="App">
      <NavigationBar />
      <Route path="/" exact component={MaterialDesignColors} />
      <Route path="/flatcolors" exact component={FlatUIColors} />
      <Route path="/metrocolors" exact component={MetroColors} />
      <Route path="/colorpicker" exact component={ColorPicker} />
      <Route path="/socialcolors" exact component={SocialColors} />
      <Route path="/famouscolors" exact component={FamousColors} />
      <Route path="/colorcombination" exact component={ColorCombination} />
    </div>
    </Router>
  );
}

export default App;

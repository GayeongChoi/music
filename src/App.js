import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import '@fortawesome/fontawesome-free/js/all.js';
import Main from "./components/pages/Main";
import Mypages from "./components/pages/Mypages";
import Today from "./components/pages/Today";
import Chart from "./components/pages/Chart";
import Hot from "./components/pages/Hot";
import New from "./components/pages/New";
import Month from "./components/pages/Month";
import MyMusic from "./components/pages/MyMusic";
import PlayList from "./components/pages/PlayList";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Main} />
      <Route path="/mypages" exact component={Mypages} />
      <Route path="/today" exact component={Today} />
      <Route path="/chart" exact component={Chart} />
      <Route path="/hot" exact component={Hot} />
      <Route path="/new" exact component={New} />
      <Route path="/month" exact component={Month} />
      <Route path="/mymusic" exact component={MyMusic} />
      <Route path="/playlist" exact component={PlayList} />
    </Router>
  );
}

export default App;
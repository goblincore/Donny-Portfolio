import React from 'react';
import {Route, withRouter} from 'react-router-dom';
import Header from './Header';
// import About from './About';
// import Explore from './Explore';
import WorkPage from './WorkPage';
import Lines from './Lines.js';



export class App extends React.Component {

    render() {
      
        return (
            <div className="shell">
                <Header /> 
                <Route exact path="/" component={WorkPage} />
                {/* <Route exact path="/about" component={About} />
                <Route exact path="/explore" component={Explore} /> */}
               <Lines />
            </div>
        );
    }


}

export default withRouter(App);
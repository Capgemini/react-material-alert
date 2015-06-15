var React = require('react');

import Alert from './components/Alert';
import Alerts from './components/AlertsSample';
var App = React.createClass({
    
    render: function() {
        return <div>
                <Alert alert={Alerts[0]}/>
                
                <Alert alert={Alerts[1]}/>
                
                <Alert alert={Alerts[2]}/>
                
                <Alert alert={Alerts[3]}/>
            </div>;
    }
});
React.render(<App />,
             document.getElementById('app'));
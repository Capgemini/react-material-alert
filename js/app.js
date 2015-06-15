var React = require('react');

import Alert from '../lib/Alert';
import Alerts from './components/AlertsSample';
var App = React.createClass({
    
    render: function() {
        return <div>
                <Alert alert={Alerts[0]} id={"alert1"} />
                
                <Alert alert={Alerts[1]} id={"alert2"} />
                
                <Alert alert={Alerts[2]} id={"alert3"} />
                
                <Alert alert={Alerts[3]} id={"alert4"} />
            </div>;
    }
});
React.render(<App />,
             document.getElementById('app'));
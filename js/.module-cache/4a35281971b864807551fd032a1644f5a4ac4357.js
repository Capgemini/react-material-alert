var ReactGridLayout = require('react-grid-layout');

module.exports = React.createClass( {displayName: "exports",
        render: function() { 
            var grille = [1,2,3,4,5];
        React.createElement(ReactGridLayout, {className: "layout", layout: grille, 
            cols: 12, rowHeight: 30}, 
                React.createElement("div", {key: 1}, "1"), 
                React.createElement("div", {key: 2}, "2"), 
                React.createElement("div", {key: 3}, "3")
        )
        }
});
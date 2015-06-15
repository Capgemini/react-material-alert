var Menu = require('./model/menu.js');
//var FormulaireAjoutOffre = require('./model/formulaireAjoutOffre.js');
var React = require('react-addons');
var React = require('react-tools');
var React = require('react');

React.render(React.createElement(Menu, null), document.getElementById('menuDiv'));
//React.render(<FormulaireAjoutOffre/>, document.getElementById('mainDiv'));
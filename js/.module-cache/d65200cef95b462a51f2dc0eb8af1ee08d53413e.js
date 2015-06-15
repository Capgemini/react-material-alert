var React = require('react');

var Menu = require('./model/menu.js');
//var FormulaireAjoutOffre = require('./model/formulaireAjoutOffre.js');

React.render(<div><Menu/></div>
            , document.getElementById('menuDiv'));
//React.render(, document.getElementById('mainDiv'));

$('.datepicker').datetimepicker();
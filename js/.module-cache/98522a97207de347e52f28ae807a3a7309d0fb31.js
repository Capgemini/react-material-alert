var Publish = require('./publish.js');
var Search = require('./search.js');
var SearchForm = require('./searchForm.js');
var FormulaireAjoutOffre = require('./formulaireAjoutOffre.js');

module.exports = React.createClass( {displayName: "exports",
        render: function() { 
            return (React.createElement("div", null, React.createElement(Publish, null), React.createElement(Search, null), React.createElement(SearchForm, null), React.createElement(FormulaireAjoutOffre, null)));
        }
        
  });
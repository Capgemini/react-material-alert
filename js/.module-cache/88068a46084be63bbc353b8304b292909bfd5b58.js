var ReactGridLayout = require('react-grid-layout');
var React = require('react');
var _ = require('lodash');
var Offre = require("./offre.js");

module.exports = React.createClass( {displayName: "exports",
getInitialState() {
    var cols = 4;
    return {
      cols: cols
    };
  },        
generateDOM() {
    return _.map(this.props.listeOffres, function(offre, i) {
        return (<div key={i}><Offre nomFournisseur={offre.nomFournisseur} contenu={offre.contenu} localisation={offre.localisation} dateDisponibilite={offre.dateDisponibilite}/></div>);
    });
  },

generateLayout(cols) {
    var p = this.props;
    return _.map(p.listeOffres, function(offre, i) {
        var x = i < cols ? i : i % cols;
        var y = Math.floor(i / cols);
        return {x: x, y: y, w: 1, h: 1, i : i};
    });
  },

render: function() {
        if(this.props.listeOffres.length === 0) {
            return <div className="alert alert-danger" role="alert">Aucune offre trouvée</div>;
        }
        return (<ReactGridLayout className="layout" layout={this.generateLayout(this.state.cols)} cols={this.state.cols} rowHeight={250} initialWidth={3000}> 
                                   {this.generateDOM()}
                </ReactGridLayout>)
        }
});
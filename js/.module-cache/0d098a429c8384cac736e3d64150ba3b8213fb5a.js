   var Offre = React.createClass( {displayName: "Offre",
        render: function() {
            return React.createElement("a", {href: "#", className: "list-group-item"}, 
                               React.createElement("h4", {className: "list-group-item-heading"}, " ",  this.props.nomFournisseur
                               ), 
                               React.createElement("p", {className: "list-group-item-text"}, " ",  this.props.contenu
                               ), 
                               React.createElement("p", {className: "list-group-item-text"}, " ",  this.props.localisation
                               ), 
                               React.createElement("p", {className: "list-group-item-text"}, " ",  this.props.dateDisponibilite
                               )
                            ); 
        }
    });
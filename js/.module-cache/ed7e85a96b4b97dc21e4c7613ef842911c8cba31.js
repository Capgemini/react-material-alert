var Offre = require('./offre.js');

module.exports = React.createClass({displayName: "exports", 
            render: function () { 
                var offre = function (offre) {
                    return React.createElement(Offre, {
                    nomFournisseur: offre.nomFournisseur, 
                    contenu: offre.contenu, 
                    localisation: offre.localisation, 
                    dateDisponibilite: offre.dateDisponibilite}
                        )
                };
                
                var offres = "Pas d'offre pour le moment";
                if(this.props.items) {
                    offres = this.props.items.map(offre);
                }

                return React.createElement("div", {class: "list-group"}, " ",  offres, " "); 
                }
        });

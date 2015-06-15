var ListeOffres = require('./listeOffres.js');
module.exports = React.createClass( {displayName: "exports",
      getInitialState: function () { 
        return { offres: [ ] }; },
        
        handleSubmit: function (e) { 
        console.log("hello");
        
        e.preventDefault(); 
        this.state.offres.push(
        {
            nomFournisseur: React.findDOMNode(this.refs.nomFournisseur).value.trim(), 
            contenu: React.findDOMNode(this.refs.contenu).value.trim(),
            localisation: React.findDOMNode(this.refs.localisation).value.trim(),
            dateDisponibilite: React.findDOMNode(this.refs.dateDisponibilite).value.trim()
        }); 
            
            var body = { 
             'nomFournisseur': React.findDOMNode(this.refs.nomFournisseur).value.trim(),
             'contenu': React.findDOMNode(this.refs.contenu).value.trim(),
             'localisation': React.findDOMNode(this.refs.localisation).value.trim(),
             'dateDisponibilite': React.findDOMNode(this.refs.dateDisponibilite).value.trim()
            };
        $.ajax({
            type: "POST",
          url: "http://localhost:8080/sauvegarder-offre",
          dataType: 'json',
          cache: false,
          data: body
        });
                this.setState({ items: this.state.offres }); 
    },
    
    onChange: function (e) { 
            this.props.items.setState({ text: e.target.value }); 
    },
    
    render: function() {
        return (
                React.createElement("div", null, 
                    React.createElement("div", {className: "alert alert-success", role: "alert", id: "publishForm", style: { display: 'none', marginLeft: 10 + 'px', width: 700 + 'px'}}, 
                        React.createElement("form", {onSubmit: this.handleSubmit}, 
                          React.createElement("div", {className: "form-group"}, 
                            React.createElement("input", {type: "text", className: "form-control", placeholder: "Nom du fournisseur", ref: "nomFournisseur"}), React.createElement("br", null), 

                            React.createElement("textarea", {className: "form-control", rows: "3", ref: "contenu"}), 

                            React.createElement("input", {type: "text", className: "form-control", placeholder: "Localisation", ref: "localisation"}), React.createElement("br", null), 

                            React.createElement("input", {type: "text", id: "dateDispo", className: "form-control", placeholder: "Date de disponibilité", ref: "dateDisponibilite"}), React.createElement("br", null), 

                            React.createElement("div", null, 
                                React.createElement("button", {type: "submit", className: "btn btn-default"}, " Envoyer")
                            )
                         )
                    )
                ), 
                        React.createElement(ListeOffres, {items: this.state.items})
            )
            );
    }
});
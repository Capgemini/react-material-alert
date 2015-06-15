var ListeOffres = require('./listeOffres.js');
var LocalisationsCombobox = require('./localisationsCombobox.js');
var React = require('react');

import {PublishOfferFormController} from '../controller/PublishOfferFormController.js';

module.exports = React.createClass( {displayName: "exports",
      getInitialState: function () { 
        return { offres: [ ] }; },
        
        handleSubmit: function (e) { 
             var listElements = {
                "nomFournisseur": React.findDOMNode(this.refs.nomFournisseur).value.trim(),
                "contenu": React.findDOMNode(this.refs.contenu).value.trim()
            }
            
            var p = new PublishOfferFormController(listElements);
            var vPassed = true;
            vPassed = p.checkerLengthNomFournisseur();
            e.preventDefault(); 
        /*this.state.offres.push(
        {
            nomFournisseur: React.findDOMNode(this.refs.nomFournisseur).value.trim(), 
            contenu: React.findDOMNode(this.refs.contenu).value.trim(),
            localisation: React.findDOMNode(this.refs.localisation).value.trim(),
            dateDisponibilite: React.findDOMNode(this.refs.dateDisponibilite).value.trim()
        });*/ 
            
            if(vPassed === true) {
                var body = { 
                 'nomFournisseur': React.findDOMNode(this.refs.nomFournisseur).value.trim(),
                 'contenu': React.findDOMNode(this.refs.contenu).value.trim(),
                 'localisation': React.findDOMNode(this.refs.localisation).value.trim(),
                 'dateDisponibilite': React.findDOMNode(this.refs.dateDisponibilite).value.trim(),
                 'quantite': React.findDOMNode(this.refs.quantity).value.trim(),
                 'modePaiement':  React.findDOMNode(this.refs.paymentMode).value.trim()
                };
                $.ajax({
                    type: "POST",
                  url: "http://localhost:8080/sauvegarder-offre",
                  dataType: 'json',
                  cache: false,
                  data: body
                });
                this.setState({ items: this.state.offres });
            }
    },
    
    onChange: function (e) { 
            this.props.items.setState({ text: e.target.value }); 
    },
                                     
    render: function() {
            
        return (
    <form className="grid-form" id="publishForm" style={{ display: "none"}} onSubmit={this.handleSubmit}>
    <fieldset>
        <legend>Ajout d'une nouvelle offre</legend>
        <div data-row-span="3">
            <div data-field-span="1">
                <label>Nom du fournisseur</label>
                <input type="text" ref="nomFournisseur"></input>
            </div>
            <div data-field-span="1" style={{ position: 'relative'}}>
                <label>Date de disponibilité</label>
                <input type="text" ref="dateDisponibilite" className="datepicker"></input>
            </div>
            <div data-field-span="1">
                <label>Quantité</label>
                <input type="text" ref="quantity"></input>
            </div>
        </div>
        <div data-row-span="2">
            <div data-field-span="1">
                <label>Localisation</label>
                <input type="text" className="location" ref="localisation"></input>
            </div>
            <div data-field-span="1">
                <label>Description de l'offre</label>
                <textarea type="text" rows={3} ref="contenu"></textarea>
            </div>
        </div>
            
        <div data-row-span="1">
            <div data-field-span="1">
                <label>Mode de paiement</label>
                <input type="radio" ref="paymentMode"></input>
                <label>Comptant</label>&nbsp;
                <input type="radio" ref="paymentMode"></input>
                <label>30 jours</label>&nbsp;
                <input type="radio" ref="paymentMode"></input>
                <label>30 jours, fin de mois</label>
            </div>
        </div>
    </fieldset>
    <button type="submit" className="btn btn-default">Envoyer</button>
</form>
            );
    }
});
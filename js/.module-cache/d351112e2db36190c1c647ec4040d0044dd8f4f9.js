var React = require('react');

module.exports = React.createClass( {displayName: "exports",
        render: function() { 
            return (<form className="grid-form" id="searchForm" style={{ display: "none"}}>
                            <fieldset>
                            <legend>Rechercher des offres</legend>
                            <div data-row-span="1">
                                <div data-field-span="1">
                                    <label>(Exemple : cadres fenêtres métaliques 3mx3)</label>
                                    <input type="text" className="searchFormInput"></input>
                                </div>
                            </div>
                        </fieldset>
                    </form>       
        );
        }
});
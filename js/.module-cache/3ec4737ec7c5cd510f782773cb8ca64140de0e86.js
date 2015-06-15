module.exports = React.createClass( {displayName: "exports",
        render: function() { 
            return (React.createElement("div", {className: "alert alert-info", style: { display: 'none', width: 700 + 'px', marginLeft: 10 + 'px'}, id: "searchForm"}, 
                        React.createElement("form", null, 
                            React.createElement("input", {className: "searchFormInput form-control", placeholder: "Rechercher des offres de matière première (Exemple : cadres fenêtres métaliques 3mx3)", id: "searchInput"})
                        )
                    ));
        }
  });
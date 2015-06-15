var React = require('react');

module.exports = React.createClass( {displayName: "Offre",
        render: function() {
            return (
<div className="panel panel-default">
  <div className="panel-heading clearfix">
        <img src="/images/capgemini.jpg" className="img-rounded pull-left" style={{marginRight: 2 + 'px', width: 40 + 'px', height: 40 + 'px'}}></img>
     <h2 className="panel-title pull-left">{this.props.nomFournisseur}</h2>
    <a className="btn btn-primary pull-right" href="#">
        <span className="glyphicon glyphicon-envelope"></span>
    </a>
    </div>
    <div className="list-group">
      <div className="list-group-item">
        <p className="list-group-item-text"><span className="glyphicon glyphicon-map-marker"></span></p>
        <h4 className="list-group-item-heading">{this.props.localisation}</h4>
      </div>
      <div className="list-group-item">
        <p className="list-group-item-text"><span className="glyphicon glyphicon-calendar"></span></p>
        <h4 className="list-group-item-heading">{this.props.dateDisponibilite}</h4>
      </div>
      <div className="list-group-item">
        <p className="list-group-item-text">{this.props.contenu}</p>
      </div>
    </div>
  <div className="panel-footer">
    <small></small>
  </div>
</div>
            );
        }
    });
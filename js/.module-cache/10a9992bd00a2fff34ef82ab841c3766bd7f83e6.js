var React = require('react');

module.exports = React.createClass( {displayName: "exports",
        
      handleClick: function() {
            if($("#searchForm").css("display") === "none") {
                $("#publishForm").css("display", "none");
                $("#updateProfileForm").css("display", "none");
                $("#searchForm").css("display", "inline");
            } else {
                $("#searchForm").css("display", "none");
            }
      },
      render: function() { 
            return React.createElement("span", {onClick: this.handleClick, className: "glyphicon glyphicon-search", "aria-hidden": "true", style: {fontSize: 50 + 'px', marginLeft: 50 + 'px'}});
        }
        
  });
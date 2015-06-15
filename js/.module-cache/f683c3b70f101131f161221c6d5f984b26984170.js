module.exports = React.createClass( {displayName: "exports",
      handleClick: function() {
        $(document).ready(function(){
            if($("#publishForm").css("display") == "none") {
                $("#searchForm").css("display", "none");
                $("#publishForm").css("display", "block");
            } else {
                $("#publishForm").css("display", "none");
            }
        });
      },
      
      render: function() { 
            return React.createElement("span", {onClick: this.handleClick, className: "glyphicon glyphicon-bullhorn", "aria-hidden": "true", style: {fontSize: 50 + 'px'}});
        }
        
  });
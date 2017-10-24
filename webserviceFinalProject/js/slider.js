          //slider for equipment & supplies
          $( "#premierDropdown" ).click(function() {
            if ($("#premierDropdown").is(":visible")){
                $( "#premierDropdownMenu" ).slideUp( "slow", function() {
                  // Animation complete.
                });
            }
            else{
                $("#premierDropdownMenu").slideDown( "slow", function() {
                  // Animation complete.
                });
            }
          });
          
          //slider for process tech pages
          $("#euroDropdown").click(function() {
            if ($("#euroDropdownMenu").is(":visible")){
                $("#euroDropdownMenu").slideUp( "slow", function() {
                  // Animation complete.
                });
            }
            else{
                $("#euroDropdownMenu").slideDown( "slow", function() {
                  // Animation complete.
                });
            }
          });
//All Goal Keepers
$(document).ready(function(e){

        var items = [];
        $.ajax({
            url: "http://footballpool.dataaccess.eu/data/info.wso/AllGoalKeepers/JSON/debug?sCountryName=",
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data){
                $(data).each(function(index, value){
                    //$("#data1").html(value.countryCode + "-" + value.postalCode);
                    
                    items.push('<tr><td>' + value + "-"+ value + '</td></tr>');
                    console.log(value);
                });
                $("#menuItems").append(items.join(''));
                
            }

       });
        
});//end inclusive function


//All Goal Scorers
$(document).ready(function(e){

        var items = [];
        $.ajax({
            url: "http://footballpool.dataaccess.eu/data/info.wso/TopGoalScorers/JSON/debug?iTopN=",
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data){
                $(data).each(function(index, value){
                    
                    items.push("<tr><td>" + value.sName + "</td><td>"+ value.iGoals +"</td><td><img src=' " + value.sFlagLarge  + " '></td></tr>");
                });
                $("#menuItems").append(items.join(''));
                
            }

       });
        
});//end inclusive function
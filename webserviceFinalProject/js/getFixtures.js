$(function(){
    $("#fixturesBtn").click(function(e){
        var teamCode = $('#selectedTeam option:selected').val();
        var items = [];
        $("#fixtureItems tr").remove();
        $.ajax({
            
            headers: { "X-Auth-Token": "cc10af434b3042b6b9928d2f3b7c426a" },
            url: "http://api.football-data.org/v1/teams/" + teamCode + "/fixtures",
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data){
                items.push("<tr><th>Fixture #</th><th>Home Team</th><th>Away Team</th><th>Result(Home - Away)</th></tr>");
                
                $(data).each(function(index, value){
                        console.log(data);
                    for(i=0; i < value.fixtures.length; i++){
                     items.push("<tr><td>" + value.fixtures[i].matchday + "</td><td>"+ value.fixtures[i].homeTeamName +"</td><td>" + value.fixtures[i].awayTeamName + "</td><td>" + value.fixtures[i].result.goalsHomeTeam + " - " + value.fixtures[i].result.goalsAwayTeam  + "</td></tr>");
                    }
                });
                $("#fixtureItems").append(items.join(''));
                
            }

       });//end ajax call
        
    });//end click function
        
});//end inclusive function
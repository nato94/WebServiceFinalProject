$(function(){
    $(document).ready(function(e){
        //var teamCode = $('#selectedTeam option:selected').val();
        var items = [];
        $.ajax({
            headers: { "X-Auth-Token": "cc10af434b3042b6b9928d2f3b7c426a" },
            url: "http://api.football-data.org/v1/competitions/426/leagueTable",
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data){
                $(data).each(function(index, value){
                    console.log(data);
                    var count = 1;
                    for(i=0; i < value.standing.length; i++){
                        
                        items.push("<tr><td>" + count + "</td><td><img src=' " + value.standing[i].crestURI + " '>" + " - " + value.standing[i].teamName  +"</td><td>" + value.standing[i].points + "</td><td>" + value.standing[i].wins + "</td><td>" + value.standing[i].losses + "</td></tr>");
                        count++;
                    }
                });
                $("#premierItems").append(items.join(''));
                
            }

       });//end ajax call
        
    });//end click function
        
});//end inclusive function
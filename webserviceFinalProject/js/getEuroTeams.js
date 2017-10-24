//All Euro Teams
$(document).ready(function(e){

        var items = [];
        $.ajax({
            headers: { "X-Auth-Token": "cc10af434b3042b6b9928d2f3b7c426a" },
            url: "http://api.football-data.org/v1/competitions/424/teams",
            dataType: 'json',
            type: 'get',
            cache: false,
            success: function(data){
                $(data).each(function(index, value){
                    console.log(data);
                    for(i=0; i<value.teams.length; i++){
                        items.push("<tr><td>" + value.teams[i].name + "</td><td>"+ value.teams[i].crestUrl +"</td><td><img src=' " + value.teams[i].crestUrl  + " '></td></tr>");
                        console.log(value);
                        console.log(i);
                    }
                });
                $("#teamItems").append(items.join(''));
                
            }

       });
        
});//end inclusive function
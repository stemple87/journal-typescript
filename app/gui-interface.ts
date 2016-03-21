/// <reference path="classes.ts" />

var entryArray = [];

$(document).ready(function(){
  $('#entryForm').submit(function(event){
    event.preventDefault();

    var title = $('#title').val();
    var body = $('#body').val();

    entryArray.push(new Journal.Entry(title, body));


    $('#all').text("");
    for(var i in entryArray){
      $('#all').append("<h4>"+entryArray[i].title+"</h4>");
      $('#all').append("<p>"+entryArray[i].body+"</p>");
      var count = entryArray[i].wordCount();
      $('#all').append("<h5>There are " + count + " words in this entry, good job!</h5>");
      $('#all').append("<p>Total points: " + entryArray[i].points + "</p>");

      $('#all').append("<div class='votes'><button id='u"+i+"' class='up' type='button'>Up</button><button id='d"+i+"' class='down' type='button'>Down</button></div>")
      $('#all').append("<hr />");
    }

  });
  $('#all').on("click", ".up",function(){
    // console.log(alert('test alert on up'));
    var thisUp = $(this).attr('id');
    thisUp = parseInt(thisUp.slice(1));

    entryArray[thisUp].upVote();
  console.log("up:" + entryArray);

  });
  $('#all').on("click", ".down",function(){
    event.preventDefault();
    // console.log(alert('test alert on down'));
    var thisDown = $(this).attr('id');
    thisDown = parseInt(thisDown.slice(1));

    entryArray[thisDown].downVote();
    console.log("down:" + entryArray[0].points);


  });

});

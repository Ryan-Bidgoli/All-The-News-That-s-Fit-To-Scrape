
$.getJSON("/all", function(data){
   console.log(data);
   for (var i = 0; i < data.length; i++){
      $("#results").append( "<tr><td>" + data[i].title + "</td>" +
                            "<td><a href='" + data[i].link + "'>" + data[i].link + "</a></td>" +
                            "<td><img src='" + data[i].image +  " '/></td>" + 
   }
});


function setActive(selector) {
  
}

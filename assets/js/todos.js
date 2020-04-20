// alert("JS Connected!")

// Check Off Specific Todos By Clicking:

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
});

//Click on X to delete Todo:
$("ul").on("click", "span", function(event){
   $(this).parent().fadeOut(500, function(){
     $(this).remove();
   });
   event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    //grabbing a new todo from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span>X</span> " + todoText + "</li>");
  }
});






















// $("li").click(function(){
//   $(this).css("color", "gray");
//   $(this).css("text-decoration", "line-through");
// })
// $("li").click(function(){
//   //if li gray
//     //turn it black
//   //else 
//     //turn it gray

//     if($(this).css("color") === "rgb(128, 128, 128)")  {
//       $(this).css({
//         color: "black",
//         textDecoration: "none"
//       }); 
//     } else {
//       $(this).css({
//         color: "gray",
//         textDecoration: "line-through"
//       }); 
//     }
// })



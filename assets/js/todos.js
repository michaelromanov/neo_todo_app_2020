// alert("JS Connected!")

// Check Off Specific Todos By Clicking:

$("li").click(function(){
  $(this).toggleClass("completed");
})

//Click on X to delete Todo:
$("span").click(function(event){
   $(this).parent().fadeOut(500, function(){
     $(this).remove();
   });
   event.stopPropogation();
})






















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



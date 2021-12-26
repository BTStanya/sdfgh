var images= [
  "https://th.bing.com/th/id/OIP.TDork9u9880eRN4Aa_lptAAAAA?pid=ImgDet&rs=1","https://i.pinimg.com/originals/52/cf/60/52cf604272bb680b7a30153776641b1b.jpg","https://esthesis.org/wp-content/uploads/2018/04/publicdomainq-anime.png",
]

var i=0;
function changeslide()
{
  document.getElementById("family_member_image").innerHTML=images[i]; i++;
 document.getElementById("button_click").innerHTML=changeslide[i];i++
} 

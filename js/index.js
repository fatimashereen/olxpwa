
if(document.getElementById('adBTN')){
  document.getElementById('adBTN').addEventListener('click',function(){
	  window.location.href="layout/post.html";
  });
}
function openCat(a){
  var name = a.getAttribute('data-name');
  localStorage.setItem('tmpCatName',name);
  window.location.href="layout/category.html";
}
function search(){
  var searchTxt = document.getElementById('searchTxt').value;
  localStorage.setItem('searchTxt',searchTxt);
  window.location.href="layout/search.html";
}



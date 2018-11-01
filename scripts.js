document.getElementById('login').addEventListener('click', 
	function() {
		document.querySelector('.bg-modal').style.display = 'flex';
	});

window.onload=function(){
  document.querySelector('.close').addEventListener('click',
	function() {
		document.querySelector('.bg-modal').style.display = "none";
	});
    document.querySelector('.close2').addEventListener('click',
	function() {
		document.querySelector('.signup-modal').style.display = "none";
	});
	document.querySelector('.close3').addEventListener('click',
	function() {
		document.querySelector('.post-modal').style.display = "none";
	});
}


document.getElementById('signup').addEventListener('click', 
	function() {
		document.querySelector('.signup-modal').style.display = 'flex';
	});

document.getElementById('post').addEventListener('click', 
	function() {
		document.querySelector('.post-modal').style.display = 'flex';
	});


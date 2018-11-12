/*
CS 146 Project HTML and CSS
Mathew Seedhom, Tobias Dalton, Princeton Nwosu, Hannah Sancilio
I pledge my honor that I have abided by the Stevens Honor System.
*/
function init(){
	document.querySelectorAll('.class').forEach( function(clas, box) {
		box = clas.querySelector('.desc');
		box.style.display = 'none';
		clas.addEventListener('mouseover',function(e){
			if (box.style.display === 'none') { clas.style['box-shadow'] = '0px 0px 3px black'; }
		});
		clas.addEventListener('mouseout',function(e){
			if (box.style.display === 'none') { clas.style['box-shadow'] = ''; }
		});
		clas.addEventListener('click',function(e){
			if (box.style.display !== 'flex') {
				box.style.display = 'flex';
				clas.style['box-shadow'] = '0px 0px 7px black';
			} else {
				box.style.display = 'none';
				clas.style['box-shadow'] = '0px 0px 3px black'
			}
		});
	})
}

document.addEventListener('readystatechange', function() {
    if (document.readyState === "complete") init();
});
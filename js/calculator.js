
var tablo = document.getElementById('tablo'),
    panel = document.getElementById('panel');

panel.addEventListener('click', function( event ) {
    
    'use strict';
	
	var data = event.target.value || window.event.srcElement.value;

	if( !data ) return;
 
	if( data == 'clean' ) {
		tablo.value = '';
		
	} else if( data == 'total' && tablo.value ) {
		try {
			tablo.value = eval( tablo.value );
            
		} catch(e) {
			console.log( e.name + ': ' + e.message );
		}
        
	} else if( data == 'deletion' ) {
		tablo.value = tablo.value.slice(0, -1);
		
	} else if( data != 'total' ) {
		tablo.value += data;
	}
});
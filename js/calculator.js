const tablo = document.getElementById('tablo');
const panel = document.getElementById('panel');

panel.addEventListener('click', function (event) {
    'use strict';

    let data = event.target.value;

    if (!data) return;

    if (data === 'clean') {
        tablo.value = '';

    } else if (data === 'total' && tablo.value !== '') {
        try {
            tablo.value = eval( tablo.value );
        } catch (e) {}

    } else if (data === 'deletion') {
        tablo.value = tablo.value.slice( 0, -1 );

    } else if (data !== 'total') {
        tablo.value += data;
    }
});

(function (doc) {
    'use strict';

    var tablo = doc.getElementById('tablo');
    var panel = doc.getElementById('panel');

    panel.addEventListener('click', function (event) {

        var data = event.target.value;

        if (!data) return;

        if (data === 'clean') {
            tablo.value = '';

        } else if (data === 'total' && tablo.value !== '') {
            try {
                var calc = new Function('return ' + tablo.value);
                tablo.value = calc();

            } catch (e) {
                console.log(e);
            }

        } else if (data === 'deletion') {
            tablo.value = tablo.value.slice( 0, -1 );

        } else if (data !== 'total') {
            tablo.value += data;
        }
    });

})(document);

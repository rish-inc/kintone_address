( () => {
	'use strict';
	kintone.events.on( 'app.record.create.change.zipcode', ( event ) => {
		loadaddress( event );
		return event;
	} );
	kintone.events.on( 'app.record.edit.change.zipcode', ( event ) => {
		loadaddress( event );
		return event;
	} );
} )();

const loadaddress = ( event ) => {
	const record = event.record;
	const zipcode = record.zipcode.value;

	$.ajax ( {
		url: 'https://api.zipaddress.net/?zipcode=' + zipcode,
		datatype: 'jsonp',
		async: false,
		success: ( response ) => {
			record.fullAddress.value = response.data.fullAddress;
		},
		error: ( response ) => {
			alert( '郵便番号からの住所検索に失敗しました' );
		}
	} );
}

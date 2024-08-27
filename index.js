let intervalID;

const dec = () => {
	let mm = parseInt($('#mm').val());
	let ss = parseInt($('#ss').val());
	ss--;
	if (ss < 0) {
		ss = 59;
		mm--;
	}
	if (mm < 0) {
		mm = 0;
	}
	if (mm === 0 && ss === 0) {
		clearInterval(intervalID);
		intervalID = null;
	}
	const mmString = mm.toString().padStart(2, '0');
	const ssString = ss.toString().padStart(2, '0');
	$('#mm').val(mmString);
	$('#ss').val(ssString);
}

const stopClock = () => {
	clearInterval(intervalID);
	intervalID = null;
}

const toggleClock = () => {
	if (intervalID) {
		stopClock();
	} else {
		intervalID = setInterval(dec, 1000);
	}
}

$('.num').on('focus', stopClock);

$(window).on('dblclick', toggleClock);

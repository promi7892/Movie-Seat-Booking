const container = document.querySelector('.container');
const seat = document.querySelectorAll('.row .seat .occupied');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

let ticketPrice = movieSelect.value;
console.log(ticketPrice);

container.addEventListener('click', (e) => {
	// console.log(e);
	if (
		e.target.classList.contains('seat') &&
		!e.target.classList.contains('occupied')
	) {
		e.target.classList.toggle('selected');
		updateSelectedCount();
	}
});

movieSelect.addEventListener('change', (e) => {
	ticketPrice = e.target.value;
	updateSelectedCount();
});

updateSelectedCount = () => {
	const selectedSeats = document.querySelectorAll('.row .seat.selected');
	// console.log(selectedSeats);
	let totalSelectedSeats = selectedSeats.length;
	console.log(totalSelectedSeats);
	count.innerText = totalSelectedSeats;
	total.innerText = totalSelectedSeats * ticketPrice;
};

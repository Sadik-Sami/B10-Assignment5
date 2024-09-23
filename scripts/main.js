// * buttons
const donateToNowakhalibtn = document.getElementById('donateToNowakhaliButton');
const donationPageBtn = document.getElementById('donation-pageBtn');
const historyPageBtn = document.getElementById('history-pageBtn');
const donateToFenibtn = document.getElementById('donateToFeniButton');
const donateToQuotaBtn = document.getElementById('donateToQuotaButton');
// *get available amounts
const availableAmountNowakhali = document.getElementById(
	'availableAmountNowakhali'
);

// * pages
const donationPage = document.getElementById('donation-page');
const historyPage = document.getElementById('history-page');

// *Page Controls
donationPageBtn.addEventListener('click', function () {
	donationPage.classList.add('flex');
	donationPage.classList.remove('hidden');
	historyPage.classList.add('hidden');

	donationPageBtn.classList.add('bg-accent');
	historyPageBtn.classList.remove('bg-accent');
});
historyPageBtn.addEventListener('click', function () {
	historyPage.classList.add('flex');
	historyPage.classList.remove('hidden');
	donationPage.classList.add('hidden');

	historyPageBtn.classList.add('bg-accent');
	donationPageBtn.classList.remove('bg-accent');
});

// *Nowakhali Fund Collection
donateToNowakhalibtn.addEventListener('click', function () {
	donate(
		'donateToNowakhaliAmount',
		'availableAmountNowakhali',
		'availableAmount',
		'Nowakhali'
	);
});
// *Feni Fund Collection
donateToFenibtn.addEventListener('click', function () {
	donate(
		'donateToFeniAmount',
		'availableAmountFeni',
		'availableAmount',
		'feni'
	);
});
// *Quota Fund Collection
donateToQuotaBtn.addEventListener('click', function () {
	donate(
		'donateToQuotaAmount',
		'availableAmountQuota',
		'availableAmount',
		'Quota Movement'
	);
});

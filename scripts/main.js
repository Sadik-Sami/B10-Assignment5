const donateToNowakhalibtn = document.getElementById('donateToNowakhaliButton');
const donationPageBtn = document.getElementById('donation-pageBtn');
const historyPageBtn = document.getElementById('history-pageBtn');
const availableAmountNowakhali = document.getElementById(
	'availableAmountNowakhali'
);
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
	const newCoins = moneyDonate('donateToNowakhaliAmount', 'availableAmount');
	const amount = getInputValue('donateToNowakhaliAmount');
	const time = getTime();
	if (isNaN(newCoins)) {
		return;
	}
	setInnerText('availableAmount', newCoins);
	const nowakhaliCollected = collectedDonations(
		'donateToNowakhaliAmount',
		'availableAmountNowakhali'
	);
	setInnerText('availableAmountNowakhali', nowakhaliCollected);
	const notification = document.createElement('div');
	notification.classList.add('rounded-lg', 'p-6', 'border', 'border-gray-300');
	notification.innerHTML = `
            <div>
              <h3 class="font-bold text-2xl">${amount} Taka is Donated for famine-2024 at Feni, Bangladesh</h3>
              <div class="text-base">Date : ${time}</div>
            </div>
    `;
	historyPage.appendChild(notification);
	if (nowakhaliCollected) {
		openModal();
	}
	setInputValue('donateToNowakhaliAmount', '');
});

const modal = document.getElementById('my_modal');

function getInputValue(inputId) {
	const inputValue = parseFloat(document.getElementById(inputId).value);
	return inputValue;
}
function setInputValue(inputId, valueToSet) {
	document.getElementById(inputId).value = valueToSet;
}
function getInnerText(innerTextId) {
	const innerText = parseFloat(document.getElementById(innerTextId).innerText);
	return innerText;
}
function setInnerText(innerTextId, textToSet) {
	document.getElementById(innerTextId).innerText = textToSet;
}
function moneyDonate(inputId, currentAvailableCoins) {
	const inputValue = getInputValue(inputId);
	if (!inputValue) {
		alert('Please enter valid amount');
		return;
	}
	const availableCoins = getInnerText(currentAvailableCoins);
	const currentAmount = availableCoins - inputValue;
	if (inputValue > availableCoins) {
		alert('Insufficient Funds');
		return;
	} else {
		return currentAmount;
	}
}
function collectedDonations(inputId, currentAvailableCoins) {
	const inputValue = getInputValue(inputId);
	const availableCoins = getInnerText(currentAvailableCoins);
	const currentAmount = availableCoins + inputValue;
	return currentAmount;
}
function getTime() {
	const now = new Date();
	const currentDateTime = now.toString();
	return currentDateTime;
}

// Function to open the modal
function openModal() {
	modal.showModal();
}

// Function to close the modal
function closeModal() {
	modal.close();
}

// ?? donateToAmount = input box id
// ?? collectedDonationAmount = donation card chip id
// ?? availableChipId
function donate(
	donateToAmount,
	collectedDonationAmount,
	availableChipId,
	location
) {
	const newCoins = moneyDonate(donateToAmount, availableChipId);

	const amount = getInputValue(donateToAmount);
	const time = getTime();
	if (isNaN(newCoins)) {
		return;
	}
	setInnerText(availableChipId, newCoins);
	const collected = collectedDonations(donateToAmount, collectedDonationAmount);
	setInnerText(collectedDonationAmount, collected);
	const notification = document.createElement('div');
	notification.classList.add('rounded-lg', 'p-6', 'border', 'border-gray-300');
	notification.innerHTML = `
            <div>
              <h3 class="font-bold text-2xl">${amount} Taka is Donated for famine-2024 at ${location}, Bangladesh</h3>
              <div class="text-base">Date : ${time}</div>
            </div>
    `;
	historyPage.appendChild(notification);
	if (collected) {
		openModal();
	}
	setInputValue(donateToAmount, '');
}

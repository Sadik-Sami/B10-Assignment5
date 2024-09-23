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

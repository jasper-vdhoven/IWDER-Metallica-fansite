let i = 0;

window.onload = function () {
	let shopItems = document.getElementsByClassName("shop-list");
	for (i = 0; i < shopItems.length; i += 1) {
		shopItems[i].addEventListener("click", showDetails);
	}
	document.getElementById("details-cancel").addEventListener("click", hideDetails);
	document.getElementById("details-background").addEventListener("click", hideDetails);
};

function showDetails(event) {
	if (event) {
		details.style.display = "block";

		document.getElementById("details-title").innerText = event.target.offsetParent.dataset.title;
		document.getElementById("details-description").innerText = event.target.offsetParent.dataset.description;

		timer = setTimeout(function () { details.className = "is-visible"; }, 20);
	}
}

function hideDetails() {
	details.className = "";

	timer = setTimeout(function () { details.style.display = "none"; }, 300);
}

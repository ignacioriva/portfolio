function darkMode () {

	let darkMode = localStorage.getItem("darkMode");
	const darkModeToggle = document.querySelector("#dark-mode");

	function enableDarkMode () {
		let body = document.getElementsByTagName("body")[0];
		body.classList.add("darkMode");
		localStorage.setItem("darkMode", "enabled");
	}

	function disableDarkMode () {
		let body = document.getElementsByTagName("body")[0];
		body.classList.remove("darkMode");
		localStorage.setItem("darkMode", null);

	}

	darkModeToggle.addEventListener("click", function () {
		darkMode = localStorage.getItem("darkMode");
		if (darkMode !== "enabled") {
			enableDarkMode();
		} else {
			disableDarkMode();
		}
		});
}

darkMode();



function responsiveToggleMenu () {
	const btnToggle = document.getElementById('btnToggle');
	const nav = document.querySelector('.nav-links');
	let i = true;
	const btnBars = document.getElementById('barsToggle');

	btnToggle.addEventListener("click", function () {
		console.log('click dado');
		if (i == true) {
			nav.classList.add("nav-responsive");
			btnBars.classList.remove('fa-bars');
			btnBars.classList.add('fa-xmark');
			i = false;
			return;
		}

		if (i == false) {
			nav.classList.remove("nav-responsive");
			btnBars.classList.remove('fa-xmark');
			btnBars.classList.add('fa-bars');
			i = true;
			return;
		}
	});
}

responsiveToggleMenu();





// 	const sr = ScrollReveal({
//     distance: '90px',
//     duration: 3000,
// })

// sr.reveal(`.content-div`, {origin: 'top', delay: 300})
// sr.reveal(`.image-div`, {origin: 'bottom', delay: 500})
// sr.reveal(`.title-div`, {origin: 'right', delay: 300})


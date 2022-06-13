function darkMode () {

	let darkMode = localStorage.getItem("darkMode");
	const darkModeToggle = document.querySelector("#dark-mode");

	function enableDarkMode () {
		let body = document.getElementsByTagName("body")[0];
		body.classList.add("darkMode");
		localStorage.setItem("darkMode", "enabled");
		let moon = document.querySelector('.fa-moon').style.visibility = 'hidden';
		let sun = document.querySelector('.fa-sun').style.visibility = 'visible';
	}

	function disableDarkMode () {
		let body = document.getElementsByTagName("body")[0];
		body.classList.remove("darkMode");
		localStorage.setItem("darkMode", null);
		let sun = document.querySelector('.fa-sun').style.visibility = 'hidden';
		let moon = document.querySelector('.fa-moon').style.visibility = 'visible';


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
		if (i == true) {
			nav.classList.add("nav-responsive");
			btnBars.classList.remove('fa-bars');
			btnBars.classList.add('fa-xmark');
			i = false;
		} else  {
			nav.classList.remove("nav-responsive");
			btnBars.classList.remove('fa-xmark');
			btnBars.classList.add('fa-bars');
			i = true;
		}
	});
}

responsiveToggleMenu();





	const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal(`.content-div`, {origin: 'top', delay: 300})
sr.reveal(`.image-div`, {origin: 'bottom', delay: 500})
sr.reveal(`.title-div`, {origin: 'right', delay: 300})




// const intervalSection2 = () => { setInterval( () => {
// 	let section2 = window.getComputedStyle(document.querySelector('.section-2')).display;
// 	 if (section2 == 'flex') {
//  	sr.reveal(`.content-div-2`, {origin: 'top', delay: 300})
//  	clearInterval(intervalSection2); //paramos la ejecución del check

//  }
// }, 4000)};

// const intervalSection3 = () => { setInterval( () => {
// 	let section3 = window.getComputedStyle(document.querySelector('.section-3')).display;
// 	 if (section3 == 'flex') {
//  	sr.reveal(`.content-div-3`, {origin: 'top', delay: 300})
//  	clearInterval(intervalSection1); //paramos la ejecución del check

//  }
// }, 1000)};

// intervalSection2();
// intervalSection3();





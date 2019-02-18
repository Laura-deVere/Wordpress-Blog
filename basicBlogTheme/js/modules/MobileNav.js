class MobileNav {
	constructor() {
		this.openBtn = document.getElementById('mobile-menu');
		this.navMenu = document.getElementsByClassName('web-nav');
		this.navContainer = document.getElementsByClassName('nav-container');
		this.visible = false;
		this.events();
	}

	events() {
		this.openBtn.addEventListener('click', this.openMenu.bind(this));
		this.navContainer[0].addEventListener('click', this.addBackgroundColor.bind(this));
	}

	openMenu() {
		if (this.visible == false) {
			this.navMenu[0].style.height = '320px';
			this.visible = true;
		} else {
			this.navMenu[0].style.height = '0';
			this.visible = false;
		}
	}

	addBackgroundColor() {
		this.navContainer[0].style.background = '#c2b4a3';
	}
}

export default MobileNav;
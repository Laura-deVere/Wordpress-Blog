class Gallery {
	constructor() {
		this.container = document.getElementById('selected-img-container');
		this.gallery = document.getElementById('gallery-list');
		this.selectedImg;
		this.events();
	}

	events() {
		if (this.gallery) {
			this.gallery.addEventListener('click', this.selectImg.bind(this));
			this.selectFirstImg();
		}
	}

	selectFirstImg() {
		let setImg = document.createElement('img');
		if (this.gallery.firstChild.nextElementSibling.childNodes[1]) {
			let imgInit = this.gallery.firstChild.nextElementSibling.childNodes[1];

			setImg.id = imgInit.dataset.id;
			setImg.src = imgInit.dataset.src;

			this.container.appendChild(setImg);

			this.selectedImg = setImg;
		} else {
			return null;
		}
		
	}

	selectImg(e) {
		let img = e.target;

		this.selectedImg.id = img.dataset.id;
		this.selectedImg.src = img.dataset.src;
	}
}

export default Gallery;

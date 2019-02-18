class Search {
	constructor() {
		this.searchInput = document.getElementById('search-input');
		this.resultsDiv = document.getElementById('results-box');
		this.events();
		this.timer;
		this.previousValue;
	}

	events() {
		this.searchInput.addEventListener('keyup', this.typingLogic.bind(this));
	}

	typingLogic() {
		if (this.searchInput.value !== this.previousValue) {
			clearTimeout(this.timer);
			if (this.searchInput.value) {
				this.timer = setTimeout(this.getResults.bind(this), 1000);
				this.previousValue = this.searchInput.value;
			} else {
				this.resultsDiv.innerHTML = '';
			}
		}
	}

	getResults() {
		fetch(`${blogData.root_url}/wp-json/wp/v2/posts?search=${this.previousValue}`)
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				console.log(data);
				this.resultsDiv.innerHTML = `
					<h2>Search Results</h2>
					${data.length ? '<ul>' : '<p>No Results</p>'}
						${data.map(item => `<li><a href="${item.link}">${item.title.rendered}</li>`).join('')}		
					${data.length ? '</ul>' : ''}
				`;
			})
			.catch((error) => { console.log(error) });
	}
}

export default Search;
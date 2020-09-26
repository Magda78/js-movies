const addBtn = document.getElementById('add-btn');
const openWidow = document.getElementById('open-window');
const addMovieBtn = document.getElementById('form-add-btn');
const cancelMovieBtn = document.getElementById('from-cancel-btn');
const inputTitle = document.getElementById('title');
const inputCover = document.getElementById('cover');
const movieList = document.getElementById('list');

let movies = [];

addBtnHandler = () => {
	openWidow.classList.toggle('visible');
	console.log('click');
};

cancelBtnHandler = () => {
	openWidow.classList.remove('visible');
};

addMovieHandler = (e) => {
	const title = inputTitle.value;
	const cover = inputCover.value;
	const movie = {
		id: Math.floor(Math.random * 100),
		title: title,
		cover: cover
	};

	movies.push(movie);
	e.preventDefault();
	movieListHandler();
};

const movieListHandler = () => {
	movies.map((item) => {
		const li = document.createElement('li');
		li.innerHTML = `
        <div class='img'>
        <img src=${item.cover}>
        </div>
        <div>
        <h5>${item.title}</h5>
        </div>
        `;
		movieList.appendChild(li);
	});

	console.log(movies);
};

addBtn.addEventListener('click', addBtnHandler);
addMovieBtn.addEventListener('click', addMovieHandler);
cancelMovieBtn.addEventListener('click', cancelBtnHandler);

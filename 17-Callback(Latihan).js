// $('#button-addon2').on('click', function () {
//     const keyword = $('.search-movie').val();
//     searchMovie(keyword);
// });

// function searchMovie(keyword) {
//     return $.ajax({
//         url: `http://www.omdbapi.com/?s=${keyword}&apikey=964e3858`,
//         success: result => {
//             const movies = result.Search;
//             let isiCard = '';
//             movies.forEach(movie => {
//                 return isiCard += showCard(movie);
//             });
//             $('.movie-container').html(isiCard);
//             $('.modal-detail-button').on('click', function () {
//                 const id = $(this).attr('data-imdbid');
//                 $.ajax({
//                     url: `http://www.omdbapi.com/?i=${id}&apikey=964e3858`,
//                     success: result => {
//                         const movieDetail = result;
//                         let isiModal = showModal(result);
//                         $('.modal-body').html(isiModal);
//                     },
//                     error: () => {
//                         console.log(e.responseText);
//                     }
//                 });
//             });
//         },
//         error: () => {
//             console.log(e.responseText);
//         }
//     });
// }


// fetch
// const searchButton = document.querySelector('#button-addon2');
// searchButton.addEventListener('click', function () {
//     const keyword = document.querySelector('.search-movie').value;
//     fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=964e3858`)
//     .then(response => response.json()).then(response => {
//         const movies = response.Search;
//         let isiCard = '';
//         movies.forEach(movie => {
//             return isiCard += showCard(movie);
//         });
//         document.querySelector('.movie-container').innerHTML = isiCard;
//         document.querySelector('.modal-detail-button').addEventListener('click',function () {
//             const id = this.getAttribute('data-imdbid');
//             fetch(`http://www.omdbapi.com/?i=${id}&apikey=964e3858`)
//             .then(result => result.json()).then(result => {
//                 let isiModal = showModal(result);
//                 document.querySelector('.modal-body').innerHTML = isiModal;
//             })
//         });
//     });
// });

// Refactoring Fetch
async function firstRun() {
    try {
        const inputKeyword = document.querySelector('.search-movie');
        const movies = await getMovies(inputKeyword);
        updateUI(movies)
    } catch (error) {
        alert(error);
    }
}

firstRun();

// Search Form dan Search Button
const searchButton = document.querySelector('#button-addon2');
searchButton.addEventListener('click', async function () {
    try {
        const inputKeyword = document.querySelector('.search-movie');
        const movies = await getMovies(inputKeyword);
        updateUI(movies);
    } catch (error) {
        alert(error);
    }
});


// Fetch movie dari API
function getMovies(keyword) {
    return fetch(`http://www.omdbapi.com/?s=${keyword.value}&apikey=964e3858`)
        .then(response => {
            if (!response.ok) throw new Error(response.statusText);
            return response.json();
        })
        .then(response => {
            if (response.Response === 'False') {
                throw new Error(response.Error);
            }
            return response.Search;
        });
}

// Update UI movies Card
function updateUI(movies) {
    let isiCard = '';
    movies.forEach(movie => {
        return isiCard += showCard(movie);
    });
    document.querySelector('.movie-container').innerHTML = isiCard;
}

// event binding Show movie Details Button
document.addEventListener('click', async function (e) {
    if (e.target.classList.contains('modal-detail-button')) {
        const id = e.target.dataset.imdbid;
        try {
            const movieDetail = await getMovieDetails(id);
            let isiModal = showModal(movieDetail);
            document.querySelector('.modal-body').innerHTML = isiModal;
        } catch (error) {
            document.querySelector('.modal-body').innerHTML = `<p>${error}</p>`;
        }
    }
});


// fetch movie detail API
function getMovieDetails(id) {
    return fetch(`http://www.omdbapi.com/?i=${id}&apikey=964e3858`)
        .then(result => {
            if(!result.ok) throw new Error(result.statusText);
            return result.json();
        })
        .then(result => {
            console.log(result);
            return result;
        });
}

// function untuk menampilkan HTML Card
function showCard(movie) {
    return `<div class="col-md-4 my-3">
                <div class="card" style="width: 18rem;">
                ${movie.Poster === "N/A" ? `<div class="mx-auto"> Image Not Found  <div>` : `<img src="${movie.Poster}" alt="" class="img-fluid ">`}
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
};


// function untuk menampilkan HTML modal
function showModal(result) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        ${result.Poster === "N/A" ? `<div class="mx-auto"> Image Not Found  <div>` : `<img src="${result.Poster}" alt="" class="img-fluid">`}
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item"><h4>${result.Title} (2016)</h4></li>
                            <li class="list-group-item"><strong>Director : </strong>${result.Director}</li>
                            <li class="list-group-item"><strong>Actors : </strong>${result.Actors}</li>
                            <li class="list-group-item"><strong>Wirter : </strong>${result.writer}</li>
                            <li class="list-group-item"><strong>Plot : </strong><br>${result.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
};
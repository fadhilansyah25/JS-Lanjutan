$.ajax({
    url: 'http://www.omdbapi.com/?s=avengers&apikey=964e3858',
    success: result => {
        const movies = result.Search;
        let isiCard = '';
        movies.forEach(movie => {
            return isiCard += `
            <div class="col-md-4 my-3">
                <div class="card" style="width: 18rem;">
                    <img src="${movie.Poster}" class="card-img-top" alt="${movie.Title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary">Show Details</a>
                    </div>
                </div>
            </div>
            `;
        });
        $('.carousel-movies').html(isiCard);
    },
    error: () => {
        console.log(e.responseText);
    }
});
const europeMain = document.getElementById('europeMain');

fetch('https://restcountries.com/v3.1/region/europe')
    .then((response1) => response1.json())
    .then((data1) => {
        data1.forEach(europe => {
            let europeBlock =
            `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                <div class="card mb-4">
                    <div class="card-body">
                        <div class="text-center">
                            <a href="${europe.maps.googleMaps}">
                                <img src="${europe.flags.png}" alt="${europe.name.official}" class="card-img-top photo">
                            </a>
                            <h3 class="card-title mt-3">${europe.name.common}</h3>
                            <h5 class="card-subtitle mb-2 text-muted">${europe.subregion}</h5>
                        </div>
                        <p class="card-text mt-3">
                            <b>Capital city:</b> ${europe.capital}
                        <br><b>Population:</b> ${europe.population}
                        <br><b>Area:</b> ${europe.area} km<sup>2</sup>
                        <br><b>Czech:</b> ${europe.translations.ces.official}
                        <br><b>Status:</b> ${europe.status}
                        <br><b>Start of week:</b> ${europe.startOfWeek}
                        </p>
                    </div>
                </div>
            </div>`;
            europeMain.innerHTML += europeBlock;
        });
    });
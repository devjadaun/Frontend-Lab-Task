
function searchUniversities() {

    let country = document.getElementById("country").value;
    let results = document.getElementById("results");

    results.innerHTML = "";

    if (country == "") {
        results.innerHTML = "Please enter country name";
        return;
    }

    fetch("http://universities.hipolabs.com/search?country=" + country)

    .then(function(response) {
        return response.json();
    })

    .then(function(data) {

        if (data.length == 0) {
            results.innerHTML = "Ohh man! this country does not exist on earth. Go to your planet🪐😩";
            return;
        }

        data.forEach(function(university) {

            results.innerHTML +=
                "<h3>" + university.name + "</h3>" +
                "<a href='" + university.web_pages[0] +
                "' target='_blank'>Visit Website</a><hr>";

        });

    })

    .catch(function(error) {
        results.innerHTML = "Something went wrong in finding your future try again in next life☠️💀";
        console.log(error);
    });

}

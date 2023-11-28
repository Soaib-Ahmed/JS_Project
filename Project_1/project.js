const loadData = () => {
    const searchText = document.getElementById("search-box").value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchText}`)
    .then(response => response.json())
    .then((data) => displayDtat(data.meals));
}

const displayDtat = (data) => {
    document.getElementById("total-meals").innerText=data.length;
    const mealsContainer = document.getElementById("meals-container");

    data.forEach((meal) => {
        const card = document.createElement("div");
        card.innerHTML=`

        <img src="" alt="">
        <h2>${meal?.strMeal}</h2>
        <p></p>
        <button>Details</button>
        `;
        mealsContainer.appendChild(card);
    })
}
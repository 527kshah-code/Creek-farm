// starting the js for the store page
// this is the function that will be called when the page loads
function displayStore() {
    const container = document.getElementById("food-container");
    container.innerHTML = "";
    foodItems.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("col");
        card.innerHTML = `
            <div class="card h-100">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text"><strong>Price: $${item.price.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}
const filter = document.getElementById("filter");

filter.addEventListener("change", () => {

    const selected = filter.value;

    if (selected === "all") {
        displayStore();
    } else {
        const filtered = foodItems.filter(item =>
            item.category === selected
        );

        displayStore(filtered);
    }
});

const foodItems = [
    {
        name: "apple pie",
        description: "A delicious apple pie made with fresh apples and a flaky crust.",

    }
]
//end of js for the store page
// starting the js for the store page

const foodItems = [
    {
        image: "apple-pie-bakery.png",
        name: "Apple Pie",
        category: "bakery",
        description: "A homemade apple pie baked with fresh local apples, warm spices, and a buttery flaky crust.",
        price: "$14.99"
    },
    {
        image: "blueberry-preserves-jar.png",
        name: "Blueberry Preserves",
        category: "pantry & preserves",
        description: "Sweet handcrafted blueberry preserves made from ripe berries and simple ingredients.",
        price: "$8.99"
    },
    {
        image: "fresh-apple-cider-jug.png",
        name: "Apple Cider",
        category: "juices",
        description: "Fresh-pressed apple cider with a naturally sweet and crisp flavor, perfect for any season.",
        price: "$6.99"
    },
    {
        image: "fresh-eggs-dozen-carton.png",
        name: "Fresh Eggs",
        category: "animal products",
        description: "Farm-fresh eggs gathered daily from free-roaming hens.",
        price: "$6.49"
    },
    {
        image: "raw-honey-jar.png",
        name: "Raw Honey",
        category: "animal products",
        description: "Pure local raw honey with a rich flavor, harvested straight from the hive.",
        price: "$10.99"
    },
    {
        image: "seasonal-produce-basket.png",
        name: "Seasonal Produce Basket",
        category: "produce",
        description: "A colorful assortment of fresh, in-season fruits and vegetables handpicked from the farm.",
        price: "$24.99"
    },
    {
        image: "sourdough-bread-loaf.png",
        name: "Sourdough Bread",
        category: "bakery",
        description: "Freshly baked artisan sourdough bread with a crispy crust and soft, flavorful center.",
        price: "$7.99"
    },
    {
        image: "strawberry-preserves-jar.png",
        name: "Strawberry Preserves",
        category: "pantry & preserves",
        description: "Classic strawberry preserves bursting with sweet berry flavor.",
        price: "$8.99"
    },
    {
        image: "strawberry.png",
        name: "Strawberries",
        category: "produce",
        description: "Juicy, sun-ripened strawberries picked at peak freshness from our fields.",
        price: "$5.99"
    },
    {
        image: "blueberries.png",
        name: "Blueberries",
        category: "produce",
        description: "Fresh, plump blueberries packed with natural sweetness and flavor.",
        price: "$5.99"
    },
    {
        image: "carrots.png",
        name: "Carrots",
        category: "produce",
        description: "Freshly harvested carrots with a crisp texture and naturally sweet taste.",
        price: "$3.99"
    },
    {
        image: "spinach.png",
        name: "Spinach",
        category: "produce",
        description: "Tender, nutrient-rich spinach picked fresh from the garden.",
        price: "$4.49"
    },
    {
        image: "corn.png",
        name: "Sweet Corn",
        category: "produce",
        description: "Fresh-picked sweet corn with golden kernels, bursting with natural sweetness.",
        price: "$0.75 each"
    },
    {
        image: "bell-peppers.png",
        name: "Bell Peppers",
        category: "produce",
        description: "Colorful, crisp bell peppers grown with care and packed with fresh garden flavor.",
        price: "$2.49 each"
    },
    {
        image: "tomatoes.png",
        name: "Tomatoes",
        category: "produce",
        description: "Juicy vine-ripened tomatoes harvested at peak freshness.",
        price: "$4.99 per lb"
    },
    {
        image: "cucumber.png",
        name: "Cucumbers",
        category: "produce",
        description: "Cool, crisp cucumbers picked fresh from the garden.",
        price: "$1.50 each"
    },
    {
        image: "pickles-jar.png",
        name: "Homemade Pickles",
        category: "pantry & preserves",
        description: "Crunchy handcrafted pickles made with fresh cucumbers, herbs, and a traditional recipe.",
        price: "$8.99"
    },
    {
        image: "t-shirts.png",
        name: "Farm T-Shirt",
        category: "farm merch",
        description: "Comfortable cotton t-shirt featuring our farm logo.",
        price: "$19.99"
    },
    {
        image: "hoodie.png",
        name: "Farm Hoodie",
        category: "farm merch",
        description: "Soft and cozy hoodie designed with our farm branding.",
        price: "$24.99"
    },
    {
        image: "mug.png",
        name: "Farm Mug",
        category: "farm merch",
        description: "A durable ceramic mug featuring a charming farm design.",
        price: "$12.99"
    },
    {
        image: "milk.png",
        name: "Fresh Milk",
        category: "animal products",
        description: "Creamy farm-fresh milk sourced from local dairy cows.",
        price: "$5.49"
    },
    {
        image: "yogurt.png",
        name: "Homemade Yogurt",
        category: "animal products",
        description: "Smooth and creamy yogurt made with fresh milk and natural ingredients.",
        price: "$4.99"
    },
    {
        image: "butter.png",
        name: "Farm Butter",
        category: "animal products",
        description: "Rich and creamy butter crafted from fresh cream.",
        price: "$7.99"
    },
    {
        image: "muffins-blueberry.png",
        name: "Blueberry Muffins",
        category: "bakery",
        description: "Freshly baked muffins packed with juicy blueberries and a soft, fluffy texture.",
        price: "$3.99 each"
    }
];

// this is the function that will be called when the page loads
function displayStore(list) {
    const container = document.getElementById("food-container");
    container.innerHTML = "";

    list.forEach((item) => {
        const card = document.createElement("div");
        card.classList.add("col");

        card.innerHTML = `
            <div class="card h-100">
                <img src="${item.image}" class="card-img-top" alt="${item.name}">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>
                    <p class="card-text">
                        <strong>Price: ${item.price}</strong>
                    </p>
                </div>
            </div>
        `;

        container.appendChild(card);
    });
}
// button filtering
const buttons = document.querySelectorAll(".category");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        if (category === "all") {
            displayStore(foodItems);
        } else {
            const filteredItems = foodItems.filter(
                item => item.category === category
            );

            displayStore(filteredItems);
        }
    });
});
displayStore(foodItems);
//end of js for the store page
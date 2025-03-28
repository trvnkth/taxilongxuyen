// next car
// const carImages = ["img/car1.png", "img/car2.png", "img/car3.png"];
// let currentCarIndex = 0;
// document.addEventListener("DOMContentLoaded", function () {
//     document.getElementById('next-car').addEventListener('click', () => {
//         currentCarIndex = (currentCarIndex + 1) % carImages.length;
//         document.getElementById('car-image').src = carImages[currentCarIndex];
//     });

//     document.getElementById('prev-car').addEventListener('click', () => {
//         currentCarIndex = (currentCarIndex - 1 + carImages.length) % carImages.length;
//         document.getElementById('car-image').src = carImages[currentCarIndex];
//     });
// });

// select option cho form điểm đến, điểm đón
document.getElementById("pickup-select").addEventListener("change", function () {
    let inputField = document.getElementById("pickup-input");
    if (this.value === "Khác") {
        inputField.classList.remove("hidden");
    } else {
        inputField.classList.add("hidden");
        inputField.value = ""; // Xóa nội dung nếu chọn lại
    }
});

document.getElementById("destination-select").addEventListener("change", function () {
    let inputField = document.getElementById("destination-input");
    if (this.value === "Khác") {
        inputField.classList.remove("hidden");
    } else {
        inputField.classList.add("hidden");
        inputField.value = ""; // Xóa nội dung nếu chọn lại
    }
});


// search function
function searchWebsite() {
    let query = document.getElementById("search-input").value;
    if (query) {
        let url = `https://www.google.com/search?q=${query}`;
        window.open(url, "_blank");
    }
}

function handleKeyPress(event) {
    if (event.key === "Enter") {
        searchWebsite();
    }
}

// select option nội thành/liên tỉnh
function selectOption(type) {
    const cityBtn = document.getElementById("cityBtn");
    const provinceBtn = document.getElementById("provinceBtn");

    if (type === "city") {
        cityBtn.classList.add("text-yellow-600", "border-yellow-600");
        cityBtn.classList.remove("text-gray-600", "border-gray-200");

        provinceBtn.classList.add("text-gray-600", "border-gray-200");
        provinceBtn.classList.remove("text-yellow-600", "border-yellow-600");
    } else {
        provinceBtn.classList.add("text-yellow-600", "border-yellow-600");
        provinceBtn.classList.remove("text-gray-600", "border-gray-200");

        cityBtn.classList.add("text-gray-600", "border-gray-200");
        cityBtn.classList.remove("text-yellow-600", "border-yellow-600");
    }
}

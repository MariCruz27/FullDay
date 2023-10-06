document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("cookie-customization-form");
    const totalPriceSpan = document.getElementById("total-price");
    const orderSuccessMessage = document.getElementById("order-success-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obten el valor seleccionado del sabor de la galleta y su precio
        const selectedCookieType = document.getElementById("cookie-type");
        const selectedOption = selectedCookieType.options[selectedCookieType.selectedIndex];
        const cookiePrice = parseInt(selectedOption.getAttribute("data-price"));

        // Obten el valor de la cantidad
        const quantity = parseInt(document.getElementById("quantity").value);

        // Calcula el precio total
        const totalPrice = cookiePrice * quantity;

        // Actualiza el contenido del elemento "total-price"
        totalPriceSpan.textContent = "$" + totalPrice.toLocaleString();

        // Muestra el mensaje de éxito
        orderSuccessMessage.textContent = "Su orden se creó con éxito";

        // Puedes agregar aquí la lógica para agregar el producto al carrito si es necesario
    });
});

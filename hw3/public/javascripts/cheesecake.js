$(document).ready(function() {

    // initially hide the order details
    $("#orderDetails").hide()

    $("#formSubmitButton").click(handleFormSubmit);

    function handleFormSubmit() {
        const notes = $("#notesTextArea")[0].value

        // use toLowerCase so both "vegan" and "Vegan" are detected
        if (notes.toLowerCase().includes("vegan")) {
            alert("Warning! Our cheesecakes contain dairy.")

        // hide form, show and update order details
        } else {
            $("form").hide()
            $("#orderDetails").show()

            const quantity = $("select")[0].value
            const topping = $("input[name='topping']:checked")[0].value

            $("#quantityText")[0].textContent = quantity
            $("#toppingText")[0].textContent = topping
            $("#notesText")[0].textContent = notes
        }
    }

    // change the button title to whichever month was clicked
    $(".dropdown-option").click(function(eventData) {
        const month = eventData.target.textContent
        $(".dropbtn")[0].textContent = month
    });
});
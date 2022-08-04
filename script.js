let rating;

function clickRatingButton() {
    let clickButton = $(this);
    clickButton.removeClass("circle-button-inactive");
    clickButton.addClass("circle-button-active");
    rating = clickButton.text();

    for (sibling of clickButton.siblings()) {
        $(sibling).removeClass("circle-button-active");
        $(sibling).addClass("circle-button-inactive")
    }
}

function submit() {
    if (! rating) {
        alert("Please, select a rating");
        return;
    } 

    /*Fade out, change text (callback) and then fade in*/
    $(".main-box").fadeOut(300, () => {
        $(".main-box").html(`\
        <img src='images/illustration-thank-you.svg' alt='phone registering rating' class='phone'>\
        <p class='rating-message'>You selected ${rating} out of 5</p>\
        <div class='text thanks'>\
            <h3>Thank you!</h3>\
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!</p>\
        </div>`).fadeIn(300);
    });
}

$(document).ready(function() {
    /* Selecting the rating */
    $(".rating-buttons .circle-button").click(clickRatingButton);

    /* Submitting and changing to 'thank you' page */
    $(".submit-button").click(submit);
});
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submit-btn').addEventListener('click', function() {
        var pickupLocation = document.getElementById('pickup-location').value;
        var dropoffLocation = document.getElementById('dropoff-location').value;
        var pickupDate = document.getElementById('book_off_date').value;
        var dropoffDate = document.getElementById('book_off_date').value;
        var pickupTime = document.getElementById('time_pick').value;

        var message = "Pick-up location: " + pickupLocation + "\n" +
                      "Drop-off location: " + dropoffLocation + "\n" +
                      "Pick-up date: " + bookoffdate + "\n" +
                      "Drop-off date: " + bookoffdate + "\n" +
                      "Pick-up time: " + timepick;

        var whatsappLink = "https://t.ly/1De99" + encodeURIComponent(message);
        window.location.href = whatsappLink;
    });
});

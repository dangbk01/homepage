$(document).ready(function () {
    var search = $('#search');
    var tableContainer = $('#table-container');
    function adjustTableContainerHeight() {
        if (search.is(":visible")) {
            tableContainer.css("margin-top", search.outerHeight() + 40 + "px");
        } else {
            tableContainer.css("margin-top", "20px");
        }
    }
    /////////////////
    updateOverlayTop();
    updateIntervalTop = setInterval(updateOverlayTop, 1000);
    /////////
    $('#icon-search').on('click', function (e) {
        e.preventDefault();
        if (search.is(":visible")) {
            search.hide("blind", { direction: "vertical" }, 500, function () {
                adjustTableContainerHeight();
            });
        } else {
            search.show("blind", { direction: "vertical" }, 500, function () {
                adjustTableContainerHeight();
            });
        }
    });

    $('#close-search').on('click', function () {
        search.hide("blind", { direction: "vertical" }, 500, function () {
            adjustTableContainerHeight();
            updateOverlayTop();
            clearInterval(updateIntervalTop);
        });
    });
    $(window).resize(function () {
        if ($(window).width() < 767) {
            search.hide(0, function () {
                adjustTableContainerHeight();
                updateOverlayTop();
                clearInterval(updateIntervalTop);
            });
        }
        else{
            adjustTableContainerHeight();
            updateOverlayTop();
        }
    });
    adjustTableContainerHeight();
});



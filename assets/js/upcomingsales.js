(function () {
    'use strict';

    var initialPastSalesToShow = $('.js-viewMorePastSales').data('initial_count');

    if ($('.sale--past').length <= initialPastSalesToShow) {
        $('.js-viewMorePastSales').hide();
    }

    if (!$('.sale--upcoming').length) {
        $('.upcoming-sales-container__list').hide();
        $('.upcoming-sales-container__message').show();
    }

    $('.js-viewMorePastSales').on('click', function (e) {
        e.preventDefault();
        togglePastSales();
        updateViewMoreButton.call($(this));
    });



    function togglePastSales() {
        var startingNumber = initialPastSalesToShow - 1;

        // Site wants 15 extra past sales to show.
        // If using this for other sites, we should put the '16' as data-max_count in the cms website html code.
        var pastSalesToToggle = $('.sale--past:gt(' + startingNumber + '):lt(16)');
        pastSalesToToggle.toggle();
    }

    function updateViewMoreButton() {
        var maxInitialPastSaleShowing = initialPastSalesToShow + 1;
        if ($('.sale--past:nth-child(n+' + maxInitialPastSaleShowing + '):visible').length) {
            this.html('VIEW LESS PAST SALES');
        } else {
            this.html('VIEW MORE PAST SALES');
        }
    }
}());
$(document).ready(function () {
    if ($(window).width() < 719) {
        $('body').on('click', '.js-collaboration-toggle', function (e) {
            const button = $(this);
            const parent = button.parents('.collaboration-item');
            const panel = parent.find('.collapse-panel');

            button.toggleClass('open');
            panel.slideToggle('show');
        })
}
});

$(document).ready(function () {
    $('.modal__close').click(function () {
        $('.modal').toggleClass('modal-visible');
    });

    $('.head-block__photo-link').click(function () {
        $('.modal').toggleClass('modal-visible');
    });

    $('.faq__accordeon .faq__acc-head').on('click', acc);

    function acc() {
        $('.faq__accordeon .faq__acc-body').not($(this).next()).slideUp(250);
        $(this).next().slideToggle(250);

        let data = $('faq__acc-mark').attr('mark-data');

        if (data == "closed") {
            $("faq__acc-mark").addClass('faq__acc-mark_opened');
            data = ('opened');
        } else {
            $("faq__acc-mark").removeClass('faq__acc-mark_opened');
            data = ('closed');
        }
    }
});
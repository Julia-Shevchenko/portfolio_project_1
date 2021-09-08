// faq selector block

const FAQ_ACCORDEON_HEADER_SELECTOR = '.faq__acc-head';
const FAQ_ACCORDEON_BODY_SELECTOR = '.faq__acc-body';
const FAQ_ACCORDEON_BUTTON_OPEN_CLASS = 'opened';

function accordeonToggle(accordeonOptions) {
    const accordeonBodySelector = $(accordeonOptions.element).data('target');
    const $accordeonBody = $(accordeonBodySelector);
    $(FAQ_ACCORDEON_HEADER_SELECTOR).not(accordeonOptions.element).removeClass(accordeonOptions.openButtonClass);
    $(accordeonOptions.element).toggleClass(accordeonOptions.openButtonClass);
    $(accordeonOptions.accordeonBodyClass).not($accordeonBody).slideUp(250);
    $accordeonBody.slideToggle(250);
}

function accordeonInit() {
    $(FAQ_ACCORDEON_HEADER_SELECTOR).on('click', function () {
        accordeonToggle({
            element: $(this),
            openButtonClass: FAQ_ACCORDEON_BUTTON_OPEN_CLASS,
            accordeonBodyClass: FAQ_ACCORDEON_BODY_SELECTOR
        });
    });
}

$(document).ready(function () {
    $('.modal__close').click(function () {
        $('.modal').toggleClass('modal-visible');
    });

    $('.head-block__photo-link').click(function () {
        $('.modal').toggleClass('modal-visible');
    });

    accordeonInit();
});
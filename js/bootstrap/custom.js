jQuery.noConflict();
jQuery(document).ready(function() {
    jQuery('[data-toggle=offcanvas]').click(function() {
        jQuery('.row-offcanvas').toggleClass('active');
    });
    jQuery('ul#nav li a.level-top').addClass('dropdown-toggle').attr('data-toggle','dropdown');
    jQuery('ul#nav li ul.level0').addClass('dropdown-menu');
    jQuery('ul#nav li a.level-top span').append('<b class="caret"></b>');
});
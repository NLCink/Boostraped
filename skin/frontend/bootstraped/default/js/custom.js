jQuery.noConflict();
jQuery(document).ready(function() {
    jQuery('div.categories li.parent a.level-top').addClass('dropdown-toggle').attr('data-toggle','dropdown');
    jQuery('div.categories li.parent ul.level0').addClass('dropdown-menu');
    jQuery('div.categories li.parent a.level-top span').before(' <b class="glyphicon glyphicon-chevron-down"></b> ');
    jQuery('div.categories li:not(.parent) a.level-top span').before(' <b class="glyphicon glyphicon-arrow-right"></b> ');
});
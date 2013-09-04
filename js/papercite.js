
jQuery(document).ready(function() {
    // Toggle Single Bibtex entry
    jQuery('a.papercite_toggle').click(function() {
        jQuery( "#" + jQuery(this).attr("id") + "_block" ).toggle();
	    return false;
    });
});

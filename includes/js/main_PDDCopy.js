var siteFolder = '/concessions';
var slideDuration = 700;	// Amount of sliding time in seconds (i.e. 1000 = 1 second)
var slideDistance = 30;		// Percentage of image for directional sliding
var ezViewOpac 	  = 0.35;	// EZ View opacity
var imgWidth;
var imgHeight;
var ezViewOn;
var selectedLot   = 0;
var browserWidth  = $(window).width();
var browserHeight = $(window).height();
/*****************************************************************/
jQuery.fn.center = function (h,v) {
    this.css("position","absolute");
	if (v==1) {
		this.css("top", ( $(window).height() - this.height() ) / 2+$(window).scrollTop() + "px");
	}
	if (h==1) {
		this.css("left", ( $(window).width() - this.width() ) / 2+$(window).scrollLeft() + "px");
	}
    return this;
}
/*****************************************************************/
function toggleDialog(d) {
	if ($('#dialog-container').css("display") == 'none' || d == 1) {
		$('#page-overlay').fadeIn("fast");
		$('#dialog-container').center(1,1).fadeIn("fast");
	} else {
		$('#dialog-container').hide();
		$('#page-overlay').fadeOut("fast");
		$("#dialog-container .title").html('');
		$("#dialog-container .content").html('');
	}
}
/*****************************************************************/
function loadDialog(title,content,file,ok) {
	$("#dialog-container .title").html(title);
	var controls;
	controls += '<div class="buttons">';
	controls += '<a href="javascript:void(0);" class="jquery-button ui-state-default jquery-button-icon-left ui-corner-all" onclick="toggleDialog()" title="OK"><span class="ui-icon ui-icon-circle-check"></span>OK</a> ';
	controls += '</div>';
	controls += '<div class="clearer"></div>';	
	if (file != '') {
	    $('#dialog-container .content').load(siteFolder+"/includes/php/"+file, function () {
			if (ok) {
	  			$(controls).appendTo('#dialog-container .content');
			}
			$('#dialog-container').center(1,1);
			activateButtons();
		});
	} else {
		$('#dialog-container .content').html(content);
		if (ok) {
			$(controls).appendTo('#dialog-container .content');
		}
		activateButtons();
	}
	toggleDialog(1);
}
/*****************************************************************/
function activateButtons() {
	$('.jquery-button').hover(
		function(){ 
			$(this).addClass("ui-state-hover"); 
		},
		function(){ 
			$(this).removeClass("ui-state-hover"); 
		}
	)
}


$(document).ready(function () {
    $("#control_logout").click(function () { window.location.replace(siteFolder + "/logout.php"); });
});



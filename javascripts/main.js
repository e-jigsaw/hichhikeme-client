document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$("#find").live("click", function(e) {
		$("#success").append("Clicked");
		$("form").submit();
	});
}

(function() {
	
})();

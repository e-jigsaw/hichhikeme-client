document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
	$.support.cors = true;
	$.mobile.allowCrossDomainPages = true;
	$("#find").live("click", function(e) {
		var sendData = {
			id: "test",
			from: $("#hitchFrom").val(),
			to: $("#hitchTo").val(),
			description: $("#hitchDesc").val()
		};
		$.post("http://hichhikeme.herokuapp.com/post", JSON.stringify(sendData), function(e) {
			$("#success").append("Success!");
		});
	});
}
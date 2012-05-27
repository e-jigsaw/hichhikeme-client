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
		$("#success").append("append test");
		$.post("http://hichhikeme.herokuapp.com/post", {json: JSON.stringify(sendData)}, function(e) {
			$("#success").append("Success!");
		});
	});
}
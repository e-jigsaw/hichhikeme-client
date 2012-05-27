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
		$.ajax({
			url: "http://hichhikeme.herokuapp.com/post", 
			data: JSON.stringify(sendData), 
			success: function(e) {
				$("#success").append("Success!");
			}
		});
	});
}
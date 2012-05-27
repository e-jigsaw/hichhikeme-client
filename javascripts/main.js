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
		$.ajax({
			url: "http://hichhikeme.herokuapp.com/post", 
			type: "POST",
			data: JSON.stringify(sendData), 
			success: function(e) {
				$("#success").append("Success!");
			}
		});
	});
}

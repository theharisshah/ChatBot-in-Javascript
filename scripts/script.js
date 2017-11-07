		var username="";
		function send_msg(message){
			var prevState=$("#container").html();
				if(prevState.length>6){
					prevState=prevState+"<br>";
					}
				$("#container").html(prevState+"<span class='current_msg'>" + "<span class='bot'>Bot: </span>" +message+"</span>");
			    $(".current_msg").hide();
				$(".current_msg").delay(1000).fadeIn();
				$(".current_msg").removeClass("current_msg");
			}
		function get_username(){
			send_msg("Hello, what is your name?");
			}
		function ai(message){
			if(username.length<3){
				username=message;
				send_msg("Nice to meet you "+username+", how are you doing?");
				}
			if(message.indexOf("how are you")>=0){
				send_msg("I am fine! thank you...");
			}
			}
    	$(function(){
			get_username();
			$("#textbox").keypress(function(event){
				if(event.which===13){
					if($("#enter").prop("checked")){
						$("#send").click();
						event.preventDefault();
						}
					}
					
			});		
			$("#send").click(function(){
						var username ="<span class='username'>You: </span>";
						var newmsg=$("#textbox").val();
						$("#textbox").val("");
						var prevState=$("#container").html();
						if(prevState.length>6){
							prevState=prevState+"<br>";}
						$("#container").html(prevState+username+newmsg);
						$("#container").scrollTop($("#container").prop("scrollHeight"));
						ai(newmsg);					
						});
			
			});


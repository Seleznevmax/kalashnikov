$(".toggle_a").click(function(){
	$(this).toggleClass("open");
	$(this).parent().find(".hideForm").toggle();
});

$(function(){


$("input#minCost").change(function(){

	var value1=$("input#minCost").val();
	var value2=$("input#maxCost").val();

	if(parseInt(value1)>parseInt(value2))
	{
			value1 = value2;
		$("input#minCost").val(value1);
	}
	$("#slider").slider("values",0,value1);
});

	
$("input#maxCost").change(function(){
		
	var value1=$("input#minCost").val();
	var value2=$("input#maxCost").val();
	
	if (value2 > 20000) { value2 = 20000; $("input#maxCost").val(20000)}

	if(parseInt(value1) >parseInt(value2)){
		value2 = value1;
		$("input#maxCost").val(value2);
	}
	$("#slider").slider("values",1,value2);
});

// фильтрация ввода в поля
	$('#minCost, #maxCost').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;
		
		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;
	
		if(key==null||key==0||key==8||key==13||key==9||key==46||key==37||key==39)return true;
		keyChar=String.fromCharCode(key);
		
		if(!/\d/.test(keyChar))	return false;
	
	});


});

//сортировка товара по цене
$(".sort .up").click(function(){
				$(".sort .up").css("background","url(img/sort_up_click.png)");
				$(".sort .down").css("background","url(img/sort_down.png)");
		});

		$(".sort .down").click(function(){
				$(".sort .down").css("background","url(img/sort_down_click.png)");
				$(".sort .up").css("background","url(img/sort_up.png)");
		});


//текст в инпутах
$(function(){
	$('input.podpiska_inp').each(function() {
		var default_value = this.value;
		$(this).focus(function(){
			if(this.value == default_value) {
				this.value = '';
				$(this).css('color','black');
				
				
			}
		});
		$(this).blur(function(){
			if(this.value == '') {
				this.value = default_value;
				$(this).css('color','#d8d8d8');
				
			}
		});
		});
});
//развернуть текст
$(function(){
	var height=$('.hidden_text div').height();
	$('.next').click(function(){
		$('.hidden_text').animate({height:height+60});
	});
});





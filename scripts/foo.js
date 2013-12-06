(function($){
	$.fn.redify=function(){
		this.css('color','red');
		return this;
	}
	$.bar=function(){
		console.log("Welcome to bar()");
	}
}(jQuery));
$(document).ready(function()
{
	var close = 0;
	var think = 0;
	$("#pic1").mouseenter(function()
	{
		$("#pic1").css("background-color", "#0B3B0B");
		$("#pic1").animate({height:"+=20px", width:"+=20px"},"fast");
	});	
	$("#pic1").mouseleave(function()
	{
		$("#pic1").css("background-color", "");
		$("#pic1").animate({height:"-=20px", width:"-=20px"},"fast");
	});	
	$("#pic2").mouseenter(function()
	{
		$("#pic2").css("background-color", "#0B3B0B");
		$("#pic2").animate({height:"+=20px", width:"+=20px"},"fast");
	});	
	$("#pic2").mouseleave(function()
	{
		$("#pic2").css("background-color", "");
		$("#pic2").animate({height:"-=20px", width:"-=20px"},"fast");
	});	
	$("#pic3").mouseenter(function()
	{
		$("#pic3").css("background-color", "#0B3B0B");
		$("#pic3").animate({height:"+=20px", width:"+=20px"},"fast");
	});	
	$("#pic3").mouseleave(function()
	{
		$("#pic3").css("background-color", "");
		$("#pic3").animate({height:"-=20px", width:"-=20px"},"fast");
	});
	$("#pic3").click(function()
	{
		if (close == 0)
		{
			$("#para").css("display", "block");
			close = close + 1;
		}
		else
		{
			$("#para").css("display", "none");
			close = close - 1;
		}
	});
	$("#pic4").mouseenter(function()
	{
		$("#pic4").css("background-color", "#0B3B0B");
		$("#pic4").animate({height:"+=20px", width:"+=20px"},"fast");
	});
	$("#pic4").mouseleave(function()
	{
		$("#pic4").css("background-color", "");
		$("#pic4").animate({height:"-=20px", width:"-=20px"},"fast");
	});
	$("#pic5").mouseenter(function()
	{
		$("#pic5").css("background-color", "#0B3B0B");
		$("#pic5").animate({height:"+=20px", width:"+=20px"},"fast");
	});
	$("#pic5").mouseleave(function()
	{
		$("#pic5").css("background-color", "");
		$("#pic5").animate({height:"-=20px", width:"-=20px"},"fast");
	});
	$("#switch").click(function()
	{
		prompt("Nouveau mot de passe");
	});
	$("#add").click(function()
	{
		var todo = prompt("Ne pas oubliez de ...");
		think = think + 1;
		$("#task"+think).empty();
		$("#task"+think).append("<h3>"+todo+"</h3>");
		if (think == 3)
			think = 0;
	});
});

// ----------------------------------------------------------------------
//  doughnut
// ----------------------------------------------------------------------
var drawGraph = function(data){
	var ctx = document.getElementById('chart_doughnut').getContext('2d');
	var datas = {
	labels: data[0],
	datasets: [{
		backgroundColor: ["rgba(200,20,20,0.3)","rgba(20,200,20,0.3)","rgba(20,20,200,0.3)"],
		hoverBorderColor: ["rgba(250,250,250,0)","rgba(250,250,250,0)","rgba(250,250,250,0)"],
		//hoverBackgroundColor: ["rgba(250,20,20,0.3)","rgba(20,250,20,0.3)","rgba(20,20,250,0.3)"],
		hoverBorderColor: ["rgba(250,250,250,0)","rgba(250,250,250,0)","rgba(250,250,250,0)"],
		data: [30, 40, 30]
	}]
	};
	var config = {
		type: 'doughnut',
		data: datas
	};
	var myChart = new Chart(ctx, config);
};
window.onload=function () {
	var data = [['A', 'B', 'C'],
				[200, 100, 50]]
	drawGraph(data);
};

// ----------------------------------------------------------------------
//  bar
// ----------------------------------------------------------------------
jQuery (function ()
{
	const config = {
		type: 'bar',
		data: barChartData,
		responsive : true
	}
	const context = jQuery("#chart_bar")
	const chart = new Chart(context,config)
})
const barChartData = {
	labels : ["1","2","3","4","5"],
	datasets : [
		{
			label: "1年目",
			backgroundColor: "rgba(179,181,198,0.5)",
			data : [25,45,5,20,19]
		},
		{
			label: "2年目",
			backgroundColor: "rgba(255,99,132,0.5)",
			data : [10,54,77,32,9]
		}
	]
}

// ----------------------------------------------------------------------
//counter
// ----------------------------------------------------------------------
$(function(){
	var shuffleElm = $('.shuffle'),
	shuffleSpeed = 40,
	shuffleAnimation = 1000,
	shuffleDelay = 500;
	shuffleElm.each(function(){
		var self = $(this);
		self.wrapInner('<span class="shuffleWrap"></span>');
		var shuffleWrap = self.find('.shuffleWrap');
		shuffleWrap.replaceWith(shuffleWrap.text().replace(/(\S)/g, '<span class="shuffleNum">$&</span>'));
		var shuffleNum = self.find('.shuffleNum'),
		numLength = shuffleNum.length;
		shuffleNum.each(function(i){
			var selfNum = $(this),
			thisNum = selfNum.text(),
			shuffleTimer;
			function timer(){
				shuffleTimer = setInterval(function(){
					rdm = Math.floor(Math.random()*(9))+1;
					selfNum.text(rdm);
				},shuffleSpeed);
			}
			timer();
			var i = -i + numLength;
			setTimeout(function(){
				clearInterval(shuffleTimer);
				selfNum.text(thisNum);
			},shuffleAnimation + (i*shuffleDelay));
		});
		self.css({visibility:'visible'});
	});
});
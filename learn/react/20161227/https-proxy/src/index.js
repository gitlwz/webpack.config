//http://web.juhe.cn:8080/finance/exchange/rmbquot

$.get('/finance/exchange/rmbquot',function(data){
	$('#app').html(data);
})
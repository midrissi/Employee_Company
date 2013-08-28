ds.Company.remove();

var content = loadText(getFolder('path') + '_tmp/dataComp.json'),
	list	= JSON.parse(content);

for(var i = 0 , obj ; obj = list[i] ; i++){
	try{
		new ds.Company(obj).save();
	}catch(e){

	}
}
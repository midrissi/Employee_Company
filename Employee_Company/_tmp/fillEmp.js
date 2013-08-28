

(function(){
	ds.Employee.remove();

	var content = loadText(getFolder('path') + '_tmp/dataEmp.json'),
		list	= JSON.parse(content);

	var maleC = 0,
		femaleC = 0,
		companies = ds.Company.toArray('ID');
		
	for(var i = 0 , obj ; obj = list[i] ; i++){
		try{
			var emp = new ds.Employee(obj),
				isMale = obj.firstname.meta? obj.firstname.meta.gender !== 'female': false,
				folder = Folder(getFolder('path') + 'assets/women/');
				
			emp.firstname = obj.firstname.value;

			if(isMale){
				folder = Folder(getFolder('path') + 'assets/men/');
			}
			
			emp.image = loadImage(random(folder.files));
			
			var comp = random(companies);
			var fixedStr = fixStr(obj.firstname.value + ' ' + obj.lastname);
			
			emp.company = ds.Company(comp);
			emp.division = random(emp.company.divisions);
			
			emp.facebook = 'https://www.facebook.com/' + fixedStr.toLowerCase();
			emp.twitter = '@' + fixedStr;
			emp.googleplus = 'https://plus.google.com/' + fixedStr.toLowerCase();
			emp.blog = 'https://www.blog.com/' + fixedStr.toLowerCase();
			
			emp.mail = obj.mail.replace('[object Object]', 'fn')
			emp.city = obj.city.replace('[object Object]', 'Charles ')
			emp.address = obj.address.replace('[object Object]', 'Charles ')
			emp.save();
		}catch(e){
			debugger;
		}	
	}

	function format(nb, length){
		nb = nb + '';
		while(nb.length < length){
			nb = '0' + nb;
		}
		return nb;
	}

	function random(array){
		return array[parseInt(Math.random()*array.length)];
	}

	function fixStr(str){
		return str.replace(/ /g, '_');
	}
})()
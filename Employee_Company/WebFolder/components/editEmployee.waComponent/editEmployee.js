
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'editEmployee';
	// @endregion// @endlock

	this.load = function (data) {// @lock
	
	// @region namespaceDeclaration// @startlock
	var imageButton1 = {};	// @buttonImage
	var imageButton2 = {};	// @buttonImage
	// @endregion// @endlock
	
	// eventHandlers// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		state = 'display';
		sources.state.sync();
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		sources.employees.serverRefresh({
			forceReload: true,
			onSuccess: function(){
				state = 'display';
				sources.state.sync();
			}
		});
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener(this.id + "_imageButton2", "click", imageButton2.click, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock

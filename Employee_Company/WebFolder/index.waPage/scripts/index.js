
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var image3 = {};	// @image
	var image2 = {};	// @image
	var edit_div_imageButton1 = {};	// @buttonImage
	var edit_div_imageButton2 = {};	// @buttonImage
	var imageButton1 = {};	// @buttonImage
	var imageButton2 = {};	// @buttonImage
	var stateEvent = {};	// @dataSource
	var documentEvent = {};	// @document
// @endregion// @endlock
	WAF.DataSourceEm.prototype.cancel = function(){
	    var
	    that    = this,
	    curElem    = that.getCurrentElement()
	    key        = curElem.getKey();
	    
	    if(that.isNewElement()){
	        that.removeCurrent();
	        return;
	    }
	    
	    that.getDataClass().getEntity( key , {
	        onSuccess: function(e){
	            var
	            attributes    = that.getDataClass().getAttributes(),
	            entity     = e.entity;
	            
	            for(var i = 0 , attr ; attr = attributes[i] ; i++){
	                that[attr.name] = entity[attr.name].getValue();
	            }
	            
	            that.autoDispatch();
	        }
	    });
	}
// eventHandlers// @lock

	image3.click = function image3_click (event)// @startlock
	{// @endlock
		sources.company.selectPrevious();
	};// @lock

	image2.click = function image2_click (event)// @startlock
	{// @endlock
		sources.company.selectNext();
	};// @lock

	edit_div_imageButton1.click = function edit_div_imageButton1_click (event)// @startlock
	{// @endlock
		sources.employees.save({
			onSuccess: function(){
				state = "display";
				sources.state.sync();
			}
		});
	};// @lock

	edit_div_imageButton2.click = function edit_div_imageButton2_click (event)// @startlock
	{// @endlock
		sources.employees.cancel();
		state = "display";
		sources.state.sync();
	};// @lock

	imageButton1.click = function imageButton1_click (event)// @startlock
	{// @endlock
		state = "edit";
		sources.state.sync();
	};// @lock

	imageButton2.click = function imageButton2_click (event)// @startlock
	{// @endlock
		sources.employees.addNewElement();
		state = "edit";
		sources.state.sync();
	};// @lock

	stateEvent.onAttributeChange = function stateEvent_onAttributeChange (event)// @startlock
	{// @endlock
		switch(state){
			case 'display':
				$$('edit_div_container2').hide();
				$$('display_div_container2').show();
				break;
			case 'edit':
				$$('edit_div_container2').show();
				$$('display_div_container2').hide();
				break;
		}
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$('dataGrid1').gridController.gridView._private.globals.rowHeight = 50;
		$$('dataGrid1').redraw();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("image3", "click", image3.click, "WAF");
	WAF.addListener("image2", "click", image2.click, "WAF");
	WAF.addListener("edit_div_imageButton1", "click", edit_div_imageButton1.click, "WAF");
	WAF.addListener("edit_div_imageButton2", "click", edit_div_imageButton2.click, "WAF");
	WAF.addListener("imageButton1", "click", imageButton1.click, "WAF");
	WAF.addListener("imageButton2", "click", imageButton2.click, "WAF");
	WAF.addListener("state", "onAttributeChange", stateEvent.onAttributeChange, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock

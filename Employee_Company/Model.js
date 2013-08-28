
guidedModel =// @startlock
{
	Employee :
	{
		division :
		{
			events :
			{
				onSet:function(attributeName)
				{// @endlock
					if(!this.company || !this[attributeName] || !this[attributeName].company || this.company.getKey() != this[attributeName].company.getKey() ){
						debugger;
					}
				}// @startlock
			}
		},
		fullname :
		{
			onGet:function()
			{// @endlock
				return this.lastname.toUpperCase() + ' ' + this.firstname.capitalize();
			}// @startlock
		}
	}
};// @endlock

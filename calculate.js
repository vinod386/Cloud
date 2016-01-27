function calculate()
{
	var x = document.getElementById("num").value;
	for(var n = 2; n <= sqrt(x); n++)
	{
	if((x % n) == 0)
	 window.alert("This is not a prime number");
	 else
	 window.alert("This is a prime number");
	}
}
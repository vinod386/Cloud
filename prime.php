
		<?php
function isPrime($n)
{
for($x=2;$x<=sqrt($n);$x++)
{
if(($n % $x)==0)
	echo "The given number is not a prime!";
else
	echo "The given number is a prime!";
}
}
isPrime($_POST['num']);
?>
	

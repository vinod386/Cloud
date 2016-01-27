
		<?php
function isPrime($n)
{
for($x=2;$x<=sqrt($n);$x++)
{
if(($n % $x)==0)
	echo '<div class="printr" >The given number is not a prime!</div>';
else
	echo '<div class="printg">The given number is a prime!</div>';
}
}
isPrime($_POST['num']);
?>
	

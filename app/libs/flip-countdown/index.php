<html>
	<head>
<title>Flip Countdown For New Year</title>
		<link rel="stylesheet" href="flipclock.css">

		<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

		<script src="flipclock.min.js"></script>	
	</head>
	<body>
<div style="text-align:right; font-size:18px; width:95%; margin-top:1%"><a href="http://www.iamrohit.in/create-simple-jquery-flip-countdown-timer-flipclockjs" >Download Page | <a href="http://iamrohit.in">Home Page</a></div>
<h1>There are only</h1>
		<div class="clock"></div>

	<h1>New Year <?= date('Y')+1 ?></h1>	
		<script type="text/javascript">
			var clock;
			$(document).ready(function() {
				// Grab the current date
				var currentDate = new Date();
				// Set some date in the future. In this case, it's always Jan 1
				var futureDate  = new Date(currentDate.getFullYear() + 1, 0, 1);
				// Calculate the difference in seconds between the future and current date
				var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
				// Instantiate a coutdown FlipClock
				clock = $('.clock').FlipClock(diff, {
					clockFace: 'DailyCounter',
					countdown: true
				});
			});
		</script>
		
	</body>
</html>
<!DocType html>

<style>
form{
display:flex;
flex-direction:column;
}

.inlineBlock
{
	display:inline-block; 
	width:200px;
	height:30px;
	background:lightgreen;
}
.blockCss
{
	display:block; 
	background:lightgreen;
}
.inline
{

	display:inline; 
	background:lightgreen;
}
.none
{
	display:none; 
	background:lightgreen;
}
</style>
<form action="register" method="post">
<label>Name</label>
<input type="text" placeholder="Enter Name">
<label>Age</label>
<input type="number" placeholder="Enter Age">
<label>Email</label>
<input type="email" placeholder="Enter Email id">
<button>Submit</button>
</form>

<h1>Inline-block</h1>
<p class="inlineBlock">In website we see content in HTML</p>
<h1>Block</h1>
<p class="blockCss">In website we see content in HTMLIn website we see content in HTMLIn website we see content in HTML</p>


<h1>Inline</h1>
<p class="inline">In website we see content in HTMLIn website</p>


<h1>None</h1>
<p>Not display content</p>
<p class="none">In website we see content in HTMLIn website</p>


<h1>Label And radio Button</h1>
<h3>Choose favorite language</h3>
<label for="html">HTML</label>
<input type="radio" name="favoritelanguage" id="html"><br>
<label for="css">CSS</label>
<input type="radio" name="favoritelanguage" id="css"><br>
<label for="javascript">JavaScript</label>
<input type="radio" name="favoritelanguage" id="javascript"></br>
<h3>If we have same name in input tag for select radio button we can select one only</h3>
<span> Does name grouping work only for radio buttons YES this behavior is special to radio buttons only.</span>

<h1>Check Box</h1>
<label for ="vechile1">I have Bike</label>
<input type="checkbox" id="vechile1"><br>
<label for="vechile2">I have Car</label>
<input type="checkbox" id=""vechile2><br>
<label for="vechile3">I have Boat </label>
<input type="checkbox" id=""vechile3><br>
<p>Check box use to select limit number multiple value</p>

<h1>testarea</h1>
<label id="comment">Comment</label><br>
<textarea rows="8" cols="50" name="comment" id="comment">
</textarea>

<h1>Select</h1>
<label for ="chooseCar">Choose the car</label>
<select name="car" id ="chooseCar">
<option value="BMW">BMW</option>
<option value="audi">Audi</option>
<option value="volvo">Volvo</option>
</select>

<style>
table,tr,td,th{
border:1px solid black;
border-collapse:collapse;
padding:15px;
}
table
{
	width:800px;
	text-align:center;
	margin:10px;
}

</style>
<table>
<thead>
	<tr>
	<th>Name</th>
	<th>Place</th>
	<th>Age</th>
	</tr>
</thead>
<tbody>
	<tr>
	<td>sundar</td>
	<td>Tenkasi</td>
	<td>26</td>
	</tr>
	<tr>
	<td>Raj</td>
	<td>Tenkasi</td>
	<td>22</td>
	</tr>
</tbody>
</table>

<h1>Semtric tag</h1>
<div>
<header>
header
</header>
<main>
main
</main>
<section>
section
</section>
<article>
article
</article>
<aside>
aside
</aside>
<footer>
footer
</footer>

<h1>

y>
    <h1>Video</h1>
    <video style="width: 600px;" controls autoplay>
        <source src="media/joints.mp4" type="video/mp4">
    </video><br>
    <h1>Audio</h1>
    <audio controls>
        <source src="media/WhatsApp Ptt 2026-02-12 at 8.56.17 PM.ogg" type="audio/mpeg">
    </audio>
    <h1>ifram</h1>
    <iframe src=""></iframe>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/FLvxuM1_rDk?si=zvc-XbLGK62BQr4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</h1>
</div>


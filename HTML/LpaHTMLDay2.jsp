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
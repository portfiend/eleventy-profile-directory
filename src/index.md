---
layout: main.njk
---

Hello world! Feel free to edit this description; it supports **Markdown**.

The "include" below will import a button navigation list automatically. This navigation collects all of the "profile" links and creates a button for each one automatically.

This description can be used to introduce the group! If you'd like to create a navigation button other than the profiles, apply the `.nav-button` class to your link. For example:

	<ul class="profile-navigation">
	  <li>
	    <a href="#your-link-here" class="nav-button">
	      Here's a link!
	    </a>
	  </li>
	</ul>

will look like this:

<ul class="profile-navigation">
	<li>
		<a href="#your-link-here" class="nav-button">
			Here's a link!
		</a>
	</li>
</ul>

---

## Navigation

{% include "_nav.njk" %}
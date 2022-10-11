---
layout: profile.njk

# links to a stylesheet in /assets/css/; used for individual profile stylesheets
stylesheet: test.css

# optional setting, sets the name of the button in navigation
buttonTitle: Button Text

# this sets the title of the page when you're on it.
# if there is no buttonTitle, this will also be the name of the button
pageTitle: Test Page

# data used in the gallery below
gallery:
- ["test_a.png", "This is your first image"]
- ["test_c.png", "This is your second image"]
- ["test_b.png", "This is your third image"]
- ["test_c.png", "This is your fourth image"]
- ["test_b.png", "This is your fifth image"]
- ["test_a.png", "This is your sixth image"]
- ["test_a.png", "This is your seventh image"]
- ["test_c.png", "This is your eighth image"]
- ["test_b.png", "This is your ninth image"]
- ["test_b.png", "This is your tenth image"]
- ["test_c.png", "This is your eleventh image"]
- ["test_a.png", "This is your twelfth image"]
- ["test_b.png", "This is your thirteenth image"]
- ["test_c.png", "This is your fourteenth image"]

# comment this out and it'll appear in navigation
# eleventyExcludeFromCollections: true
---

This is an example of a profile page. Notice how it has a custom stylesheet (teal with gold accent) as well as a gallery. If you click on a gallery photo, it will open the "lightbox", which makes the image take up the whole screen until clicked away.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc laoreet eros nibh, sed suscipit ex venenatis sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer rutrum lobortis libero tincidunt commodo. 

Morbi at mauris gravida, auctor odio eu, feugiat quam. Nullam id blandit lorem. Vivamus et est at massa varius dapibus auctor sit amet mauris. Sed sodales nec magna non sodales. Quisque blandit est tortor, vestibulum imperdiet purus finibus vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus non eleifend dui. Nam vitae ornare velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

## Gallery

{% set _galleryImages = gallery %}
{% include "_gallery.njk" %}
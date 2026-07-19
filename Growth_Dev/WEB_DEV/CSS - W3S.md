Officially CSS = Cascading Style Sheets
CSS in simple is just the looks and "clothes" of a page.
Very Usually its more effective to use an external .css file, as its save time if you want to use it across multiple files (pages)

the syntax is pretty simple; p {color: red;}, for example in which is red text

there are a few ways to select and element (which is what CSS calls Selectors, as you are selecting what to style)
simple as; p, h1, h2..., pre, code.. basically most elements that have some real content, and even divs can be styled

by id, and thats by #... (id)

by class, and that is with a . ; i.e .critical{color: crimson; font-size: 50px}

there is universal selector "*") which applies it to ALL, elements

if multiple elements share the same changes it is easier to *group* them;
i.e 
p, h1, div, ... {changes...}

in which all of those will apply the same changes.

there are three forms to use CSS, External (usually better), internal within head section, and inline (directly on same line of element)

the order and way to use multiple CSS methods is in this order;
inline, internal/external, and browser default
then the order of using iternal/external also matters, as the one that is called last is what applies over the previous one; order dont matter; if internal first, external calls first (or whichever is last), if external first, internal overwrites it.

CSS comments in in such a form "/* .... */"

to lessen errors, always remember to add semicolons. to not forget if you set CSS first to actually apply said id/class in the html code. inproper form for values will also error and not apply, forgetting closing brace "}", extra braces and or colons

CSS/HTML cover 140 standard color names (i.e calling an name just by.. name)

for very specifics colors the only other way then is to use; hex/rbg/hsl (rgba/hsla)

i will skip explaining this as i did in html section.

though colors and the different forms will always need some tinkering for exactly what one wants. so just try ya'self

now multiple background forms; color, image, repeat, attachment, position

background-color is.. color of background
background-image is.. to make an image the background

background-repeat has quite a few options; by default it will be both vertically and horizontally,
to be only horizontally; repeat-x
for vertical; repeat-y (if out audience has entered basic like algebra x and y plane is not too crazy)
no-repeat, makes it only appear once
background-position, sets which area the background is to spawn (placed)
background-attachment, specifies if the image follows or is fixed;
fixed or scroll

to make it quote shorthand one can simply do; 
background: color, img, repeat, position...

there is also a few more not mentioned options;
list of options are;

color, image, position, size, repeat, attachment, origin, clip
(if not set, will just be default)

Whole shite ton of border options and values so i will make this short as possible;
border-style: dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden

you can combine up to 4 border forms
and the order is; top, right, bottom, left. (if four, idk guys what it is if 2 or 3 values)

groove to outset depends upon border-color.

width is.. width.. which has a few forms; measure in px, pt, cm, em.. so forth? or three preset values; thin, medium, thick

like the styles you can have up to 4 values (now i really dont know what 3 would do..) if 2 its top/bottom and side. but the order is like above, top, right, bottom, left.

colors is.. colors, like everything border it seems you can set up to 4 values as well.. 

guys ive finally figured the formula; 4 is each 4, 3 is top, sides, bottom, 2 is top/bottom and sides, and 1 is all.

also you could if you wanted to style specifically; border-top/right/bottom/left

likely easier to just use one and tinker around imo.

there too is a shorthand method; border: width, style (required), color
i.e border: 50px dashed orange. or whatever crazier combos.

you can round borders via border-radius, presumably no real limit of how crazy it might be able to get (dont quote me)

that "short" amount is as short of covering borders.

now there is an new element that is pretty similar to borders; margins
in short basically is similar to borders like above but a bit less;

can set margin-top/right/bottom/left

values can be; auto(browser calcs it), length (in whatever measurement), % (however much), inherit (from whatever the parent element styled may be)

you can also set negative values.

now i partially take my words back only similarities is the four side logic
anyways to set 4 would be; 25,50,75,100 px, same side logic

4 - each 4 sides
3 - top, sides, bottom
2- top/bottom and sides
1 - all

in short the difference between border and margin, is margin simply consumes and creates distance between elements.

there is quote margin-collapse, where like top and bottom margins partialyl fuse into a distance quote different than what it should be (only top/bottom not sides)

another 4 side element; padding (top, right, bottom left)

padding is another similar but greater visual difference of spatial setting; length, %, inherit

negative values are not allowed

same 4 side logic
all 4 (or specifically each side per)
top, sides, bottom
top/bottom and sides
all

now here is something that combines all 3 of the 4 side elements

set width and height of element;

box-sizing; default is content-box (only content)
border-box (accounts for content, padding, and border)

border-box is if regardless however much you change those 3 you want and need it to be a set value. you say its 300px it will be 300px.

now onto width and height;

values can be; auto, length, %, initial (revert to default value.. idk what that be), inherit

base height/width dont account for surround; padding, border and margins

there is min/max (holy gaming terms)
min-width , max -width
min-height , max-height

using max-width will help for dealing with smaller windows.

if both width and max-width, be used same element, if width is larger, max-width will overtake and be used instead.

the CSS Box Model is this; content -> padding -> border -> margin.
where content is the center and it moves outwards.

margin affects how much visual space a box takes but doesnt affect the size of the box itself, ironically is "outside-the-box" in a sense.
the sizing calc stops at border.

there is an new outline element that seems effectively same values as border, as having quite a bit

outline does not affect the element's width and height. is drawn outside the border

outline: style, color, width, offset

style can be: dotted, dashed, solid, double, groove, ridge, inset, outset, none, hidden

same three preset for width; thin, medium, thick. can be like whatever size you want

colors can be; name, hex, rgb, hsl, invert (if white background, makes black, and such)

shorthand is such; width, style (required), color

you can round outline as well with... border-radius

outline offset adds an transparent distance between edge/border of element, can be negative

if negative outline is **within** the border

now to text.. 
text color can be; name, hex, rbg
you could set background color and text color at same time 
text-align: left, right, center, justify
center is center
justify tries to make sure every line has equal width.

text-align-last affects last line of text, values can be;
auto, left, right, center, justify, start, end
auto is default; last line is justified and aligned left
start is last line aligned start of line
end is aligned end of line

vertical-align sets.. vertical alignment of a element;
baseline (default; aligned with parent)
length/% (raise/lower by percent or length)
sub (subscript form)
super (superscript form)
top (tallest element on line)
text-top (top of parent element font)
middle (middle of parent element)
bottom (lowest element on line)
text-bottom (bottom of parent element font)

direction.. can be set to rtl, and should be used with unicode-bidi to set or return if text should be overridden to support multiple languages

text decoration.. 
text-decoration-line sets; none, underline, overline, line-through, can combine values.

shouldnt underline if not text, may confuse others.

text-decoration-color.. sets color of such decorations.

text-decoration-style: solid, double, dotted, dashed, wavy

text-decoration-thickness: can be auto, set value x/%


shorthand is such; line, color, style, thickness

text-transform: none, capitalize = same as the name implies first character to uppercase, uppercase.. uppercase, lowercase.. lowercase
upper/lower case affect all characters.

text-indent, changes indent, if negative shifts to left.
letter-spacing, changes space between characters, negative allowed
line-height, change height between lines, negative is no-go
word-spacing, changes space between words in text, negative allowed
white-space: normal, nowrap, pre, pre-line, pre-wrap (dont really know myself what those really do so, eh)

text-shadow, adds shadow effect to text
at simplest is vert and hori shadow
can add color(s)
add blur
multiple shadows can stack





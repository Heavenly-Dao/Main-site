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

Fonts.. fonts are to ideally be good color, and size to be readable. and look cool as an second (or first if only local project)

fonts are a little odd.. the element is font-family, you should have multiple fonts for sakes of if one doesnt work the next does, and end with a generic "family" 

those familes are; serif , sans-serif, monospace, cursive, fantasy. and like that is the 5 generic font family ideas.
sans-serif is considered the easier to read. (versus solely serif)

core idea of fonts again is many fallback fonts. some examples are; arial, verdana, tohoma, times new roman, georgia, garamond, courier new, brush script mt. 

though never really 100% safe fonts

three font styles; normal, italic, oblique
font weight is how fat the characters are; normal, bold, bolder, lighter, 100-900 (possibly beyond or below)

there is quite an unique case of font-variant in which lowercase turn in uppercase form but still remain smaller size of normal uppercase letters.

now onto quite a niche area.. font-size.. quote on quote one should not change size to make paragraph like header or vice versa (though again lot of this dont matter *in* scope of local projects) 
some absolute sizes are; in px, xx-small, x-small, small, medium, large, x-large, xx-large.

relative sizes are; em (to parent element), rem (to root html element), % to parent element, smaller and larger to parent element.

for quite most precise sizing in px, but to "lazy" deal use relative form.

many forms again for simple sakes just try and error.. all css specifically is very subjective

if you want to use google fonts you very much can, but using many might slow page loading down

and as well even if you "load" such from google you still can style said fonts however you desire

then as well is to use google font effects..

you should as well quote use font pairing, idea of using fonts that are not too similar nor too different.. might be useful knowledge might not.

there is like many an shorthand form for font which is slightly odd but is such;

if used, style, variant and weight must be before size, if height is used it must be with size in this form 20px/40px (where 40 is the height), and family is last

though two required (if not default'd) are size and family.

now specifically the shorthand "font" can be of; style, variant, weight, stretch, size, height, family

icons.. you could source them from font awesome, bootstrap, or google.

links can be styled basically as any text (and likely already mentioned by now), but some more specific special parts are changed based on state; link, visited, hover, active. quote rules are, hover comes after link and visited, and active after hover

you can as well pretty obviously create buttons for links. (though in a sense some magic of css and just a href can replicate simple "jumps" and all)

lists.. they can be styled (ul or ol), style type, image, position, and shorthand of list-style

type just changes the shape or such of the lists (fairly sure has been mentioned as well somewhere)

image replaces the list-item marker (shape or number and all) with an image, though add fallback of type if it doesnt load.

position makes the marker outside or inside. in short to be part of text and shove the text in front of it

there is also an type of none that removes marker, but to also remove the default margin and padding, set both to 0 ":0"

and shorthand can be listed of whatever to change, if not set default is.

can like everything.. be styled lest, it likely would not be mentioned

remember borders? those can be set to help make tables look better (but like who uses tables unless quite literally its some data sheet)

to make borders more cohesive one can set collapse to make it an singular border.. why? would default to two different as th and td have different borders.

width and height.. dictate size of table.

recall normal text styling? applies to text within tables as well. 

**tbf now i will just outright say that CSS is very subjective and has too much for one to really recall and know so just experiment**

anyways nough with my slowly going crazy self; tables be get padding, dividers, hoverability, zebra stripe, color and all changed around.

overflow-x is to make it so if too big it can fit by adding hori scroll

now onto a core part of all modern pages; display.
block and inline the two basic forms; block takes up all width that can be, and inline simply takes as much as needed for itself

now the full list are; inline, block, contents, flex, grid, inline-block, none.
though recall an important detail is that this is *display* not quite transformation, thus changing how it looks doesnt change how it functions.

(changing inline to block, cant have block within it)

now visibility.. there is one value hidden

there is an slight difference. display:none takes it away from the page space, but structurally it still exists, visibility:hidden changes it around a bit.. it hides it but the *space* that it is still is, hiding it wont take back the space it quote is..

width. width is cool but max-width, is generally better as if display area is smaller it will fit, width cuts off content, max-width doesnt quite do such. browser might add a scroll to see the rest but not guaranteed.

now position.. there is; static, relative, fixed, absolute, sticky.
static is not affect by right, left, top, bottom
relative keeps it *mostly* to where it should be but top,bottom,left, right can changed around
fixed makes it so no matter the element will exist on page and all
absolute is a little odd, its like static to an extent as in the idea of set position but absolute can overlap elements which not be so nice..
now.. sticky, an more useful in general sense thing; it toggles of relative and fixed based on scroll position. examples of usage are; headers (top of page), sidebars, and in tables (but again except for literal datasheets who really uses tables..?)

"position offsets" are top, bottom, left, right. that only work with anything not static. (static is quote as pure as can be in position)

Now i will be relatively diverging beyond basic css context (i.e not exactly that common usage, but not really "advanced")

z-index.. is order of elements, to allow stacking of content. if you can handle math concepts it is as simple as depth. 3d space. x and y are "height and width (or length)" in a sense, but z is length (or depth). x is a line, x+y is a grid, x+y+z is a 3d space. dont overthink it too much.

overflow.. has 4 values; visible, hidden, scroll, auto
visible breaks styling if content is too large to fit (i.e text leaving set box), hidden just hides anything that cant fit and cant see rest, scroll and auto effectively are the same, allows scrolling to see the rest.

you can also set x and y overflow (overflow-x/y) 
to set if add vert or hori scrolling.
another overflow-wrap, not explained though (just if browser can break long words across lines)

there is float, that is more or less to place images side by text; left, right or none. (plus inherit). kinda random

there is a clear property but its wonky so ill be skipping it. (for now maybe)

though fairly sure grid and later flex likely are better forms..

there for display like mentioned eariler, inline-block, which makes it an hybrid form, it acts more like inline but can have block like properties.

there is align. where the quote two forms are;
hori; margin atuo, text-aligh cetner, flaot or position
vert; flexbox, grid, position + transform (for unknown dimensions)

combinators..? the hell? im skipping this

pseudo classes.. something interestingly to be.. skipped (for now)

psuedo elements.. also for now skipping

opacity i believe has been mentioned atleast quite a bit by now but simply is quote how transparent or not something is

nav(igation) bars.. are basically just a bunch of links, supposedly commonly just ul/li elements.. (an "a href="..." works just fine if you want an actual new page with an large "list" of links with better styling)

dropdowns.. are cool, though again kinda just skipping

attributes.. quite fun to.. skip (more or less likely to be used in co-existence with JS, so yeah.. skipping for now)

now of within file specificiality of css.. (within html file)
the order of control is; just element "p", class, id, inline style. in said order left to right. inline the strongest and just element quote weakest.

though there of course is an exception if you use !important it overwrites said order logic and makes it the most important instead. meaning just "p" is applied with such will overwrite an class or id, and even inline styling.

vague wording for when to use !important, one example is if you have an option for x reason, i.e colorblind, if you set it to fit colorblindness friendly colors such case might be true.

there quote is outright math functions in css.. but erm guys this aint math class, ill be skipping that.

to quote optimize CSS, just follow my "guide-book" of dev mentality as it covers my version and wording of "DRY" and such (that if you search is real concepts)

there is quote ideal website layout but all you have to consider is three things; header, nav menu(s) and a footer (bottom of page) however else the in between content is..? dont really matter.

Now to the core areas First flexbox then grid;

flexbox; "Flexible Box Layout" arrange hori or vert in a container, in flexible and responsive way, main this without float or positioning

now before moving to grid later, lets clear it up flex is for one direction ("dimensional") either rows or columns, grid is.. a grid thus for *both*

flexbox simply has a flex container, where display is flex/inline-flex
and well atleast one item in said container

flex container; display, flex-direction, flex-wrap, flex-flow, justify-content, align-items, align-content

direction can be; row, column, row-reverse, column-reverse
simple sakes reverse is just reverse order, if was 1,2,3, now 3,2,1

wrap is just if to create an new line (row or column) if too many items

flow is shorthand of both direction and wrap.

justify-content is; center, flex-start, flex-end, space-around, space-between, space-evenly

center is center
flex start iis left
flex end is right
the space ones are wonky but simple as; space.. around items, space between them, and.. even space

align-items is same essence as above but vertical;
normal, stretch, center, start/end, baseline
center is middle
start is top
end is bottom
stretch, stretches as supposedly is same as normal
baseline is..?

align-content; stretch, center, start/end, the three spaces (applies and matter only is wrap like enabled)

center is center (middle)
space between is like top and bottom
then like uhh idk guys not much more but likely effectively same as above.

elements within a flex container automatically are flex items. 
they can have; order, flex-grow, flex-shrink, flex-basis, flex, align-self

order is to set a specific order.. you want four to be; 4,2,1,3 go ahead (not very.. orderly though)

grow is to just make an item fatter (wider)
shrink is to make it less wider
basis is initial width

flex is shorthand for the three above

align-self is a child saying "nuh-uh" to parent element and setting its own alignment.. (real life reference..?)

once you get into media queries you can make it so based on such the layout of a page changes to fit better the screen size; i.e 3 columns on large screen, 1 on like a phone.

Grids now.. and there is quite.. a bit to cover..?, like flex is a way to not need to use float nor positioning

like flex, display of an element is; grid or inline-grid. and atleast one child element

Now i will be dumping every quote grid property if all get covered..? idk;
align-content, align-items, align-self, display, column-gap, gap, grid, grid-area, grid-auto-columns, grid-auto-flow, grid-auto-rows, grid-column, grid-column-end, grid-column-start, grid-row, grid-row-end, grid-row-start, grid-template, grid-template-areas, grid-template-columns, grid-template-rows, justify-content, justify-self, place-self, place-content, row-gap.

like 20 properties gawdamm.

just a note before diving into grids, a wise warning if the 20 properties is not enough of a scare.. it is already quite a lot.

grid-template-columns = number and width of columns
grid-template-rows = number and height of rows
grid-template-areas = how to display the cols and rows

first common value of cols, auto. do "auto auto auto" which makes 3 cols, presumably if you do x number of set things that equals the num of cols. if the words are not clear enough; "auto" likely is just 1, "auto auto" is two, example of three, so forth...

mixed width is just using different values i.e "120px, 240px, auto"

general caution is if you add more items than the num of cols, it will auto make new rows

new unit "fr" (is this.. fr (for real..?)) which is "fraction", it hurts and seems weird to visibly see the word "fraction" but if we are past middle school its just basic '1/2' '1/3' '1/4' stuff (likely 1fr equals about the num of cols; 3 is 33.33.... 2 is 50, 4 is 25% and so forth)

some new crazy math variants; repeat. i dont get it quite yet but example is "repeat(3, 1fr)" which though should be simple as three with same 1fr width.

minmax.. guys if we play games this term is obvious no..? simple as setting the smallest (minimal size) to the max (largest size) numbers are subjective.

now to rows. pretty simple; again "num" is affecting first/one row "num num" is 2 rows and the 1 and 2 row.. so forth. 

now to the gaps.. three relevant things are; column, row gaps. and the shorthand gap

column gap just sets the.. gap between columns

row-gap does same but for.. rows

gap is both (shorthand) if one value is both parts, if two, 1st is row, 2nd is columns

now onto alignment..  justify-content, i feel i have mentioned already, if not simple enough to search later values can be; space-evenly, space-around, space-between, center, start, end. this is for horizontal space

simple words of the 6 values;
space.. evenly the items
space.. around the items
space.. between the items
center.. center
start.. left
end.. right

a note is content width has to be less than containers for justify content to apply


align-content has same values as above. but is vertical space, same not as above content must have less height than containers height

the three space forms are a bit wonky so i wont even mentioned them again

center is center, start is top, end is bottom

place-content is shorthand for both above things. if one value it applies to both vert and hori space, if two first is align (vert), second is just (hori)

same note of content height and width gotta be less than containers

now to grid items.. which is the bulk of the properties..

this all is some alien speech but ill still go forth; grid-column-start/end just is where an item starts and then ends in column line..?

grid-column is shorthand for both of that, example? is "1 / span 2" starts 1st then spans 2 cols

grid-row-start/end is same as above but for rows. start is where it starts, end is where it.. ends

grid-row is shorthand for both things same as grid-column. example again is "1 / span 2" starts 1st spans 2.

now to.. naming grid items..

grid-template-areas and specifies area in.. the grid

first method is to have 2 named elements already a container and item
container having "grid-template-areas: 'name name name name name' " for a 5 col grid, and item just gets "grid-area: name"

pretty wonky.

say you have 7 col grid, but want something to take only 3 or 4 simple as adding "." to not name a space example is container "name name name (name) . . ." {notice the space between the dots}

then item gets "grid-area: name"

to set another set row just add another area within a set of "''"s if thats confusing to read another set of *''* 

if you can think and trial and error it is a way to make a quote webpage template form.

alignment is breezed over so i will breeze over it as well;

you can use; justify-self for hori, align-self for vert, and place-self as shorthand for both.

mentioned before im fairly sure but these "self" ones are just each item as a child saying nah to their parent (grid). and going wherever they want

values can be for justify; auto (default), normal, stretch, start, left, center, end, right

for align is; auto (default), normal, stretch, start, end, center

order is if you want to be a menace to assistance tech; order property allows to re-order around content (items) however you want, got 6 items you can order it in such a way; 3,6,1,2,4,5
absolute menace trait.

there is a 12-column grid layout i will breeze over, might be a good "base" layout but idk guys.

steps are;
apply display: grid to container 

use grid-template-columns to make 12 columns via "repeat(12, [col-start] 1fr)"

in short is makes 12 columns, names each line as col-start, and makes size 1fr

then using previous concepts place the items however ye wish.

then you could use mediaqueries to make it real responsive form for mobile first then other sizes and all but i have skipped that so idk

there is a concept of @supports, to like if a browser dont support certain element use base css styling, if it does use the arguably usually better css elements.

Now an new section of Topic; Responsive Web Design (RWD)

simple terms, look good any device, size, and such.

quote core parts are; viewport meta tag, *flex*ible layout (grid /+ flex), mediaqueries

first off is viewport; simple example is 
"``<meta name="viewport" content="width=device-width, initial-scale=1.0">"
notice how this is the first time i properly can display a tag? something new i learnt and may start using (in relative scale of current, later other things will have more proper examples.)

width part just is to correctly scale to device width, simple as such.

initial-scale just makes the zoom auto 100% to correctly seem right size. (or id assume)

now some rules of RWD is; dont use large fixed-width elements as it makes the page function wonky
dont rely on content of a certain width to render right, it should quote scale to viewport (what that exactly means. idk guys 🤷)
then to use mediaqueries to get the screen size and all in css for good appropriate css rules and scaling.

idk about this and will just mention and skip it; RWD - grid view (6 or 12 cols)

now to simple RWD - media queries;
can add breakpoints which basically means at certain screen sizes change layout and such

you cant really scale to *any* device size and all but the 5 basically type screen size to scale of are the following

max-width 600px, min-width 600px, min-width 768px, min-width 992px, min-width 1200px

sizes correlate roughly to these device types;
600 (and below) extra small phone and all
600+ large phones/tablets
768+ bigger tablets (landscape orientation as well technically)
992+ laptops/desktops
1200+ large laptops and desktops and all

likely is a few other ones to scale up in certain tv sizes or on like a car dash.. as examples

based on *orientation* one can change the page as well, i.e if landscape make it baby blue (random as hell change)

hide something if screen size is certain size (for why.. idk)

different screen sizes also mean could be different text size which makes sense

i think ive mentioned it prior somewhere but if one has prefers-reduced-motion enabled animations and such can be turned off as well

there is RWD - Pictures/Images.. but its more or less simply just auto resize based on screen size.. not too revolutionary

same thing for videos.. kinda simple

if you dont get it, i mean its basically just using different auto/ set certain height and width for x screen size and all.

now to frameworks.. supposed easily "baseplate" form of page layouts and all, ill mention it but very likely much better and easier to create your own templates and all (i.e CSS files themselves and smart ordering in html files..)

W3.CSS and Bootstrap are two examples.

W3S (idk if i mentioned what this means yet, but W3Schools)
now slaps a bunch of different templates, i will mention but i dont think idk ever use any. who knows

CSS for now is over. (7-29-26), took like a week worth of days and sessions to complete.

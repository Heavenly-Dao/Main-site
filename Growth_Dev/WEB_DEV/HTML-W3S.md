HTML just be like what all webpages are and is the content anyone sees
Real name is "Hyper Text Markup Language"
most *elements* have closing tags i.e "'html to html " some exceptions but usually is the case.

all pages start with a "!DOCTYPE html" then "html" then "body"
there is h1-h6, h1 largest, h6 smallest.
paragraphs (normal words) is "p"
links (anchors) are "a" with href="..." within
images are "img" with src=".." within optionally "alt="xxx"" and width/height
if ya wanna see the contents of like any website(page) just inspect element (or press ctrl+u)

there be like "br"(break.. line?) that have no end tag (1st mentioned example)

you shall and should never forget an end tag, sometimes the page is fine, but it will give issues and errors later.

elements can be uppercase i.e "P" vs "p" but like you should just stay lower

href (which ill be "insane" to assume means html reference) is where the link is linked towards i.e "https://..."

for img, src is.. whoa guys.. "source" source of where the image is at or from

src can be abs or rel; abs(olute) meaning linked to external source like an website or, rel that is rel(ative) to the content i.e on same folder(directory) as the .html file
 
width and height, should be self explainatory.. the height and width of img. (in pixels)

alt is alt(ernate) text for if img doesnt load and or for assistance tech to know what the img is, if empty such things just ignore it.

inline (styling) css is called style and can change color, font, size, and such. but guys just use external .css file, it will greatly be more effective. (not that you cant use in .html file)

you declare lang(uage) in the html element i.e "html lang="en"" for.. english
then for 'MERICA would be "html lang="en-US"" 'MERICAAAA 🦅🦅🦅💥💥💥

title can be used for a tooltip in a element i.e "p title="ignore this""

for attributes like href, you should habit using quotes, as if all together like an link its fine, but for a title with spaces, no good **this is dumb** wont work as a title

quotes are.. depending on teh situation, sometimes you need to use both types i.e "Bob 'the goat' Bobby" i.e titles..

you are to supposedly use h1-h6 in a specific order and reason but, guys thats just "big web", if its local project screw that (follow the normal logic and reason if for real work though)

now alongside br, there is hr, with creates an little ol visual line to split up text, br is used if the words and content just are not to be same line.

for say poems there is also an neat little ol element called.. pre(format)
which preformats stuff so that you can use spaces and "line breaks"

such as:
" this is such

such is this


why not must


must why not"

there is in(line/file)) styling yet again, but guys ignore that, you will learn it later in css anyways.

now onto a long list of new text format options.. :
b(old), strong, i(talic), em(phasized), mark(ed), small(er), del(eted), ins(erted), sub(script), sup(erscript)

now what do these mean and when to use?...
bold is just bold, simple as that
strong is BOLD and with importance
italic is just italic and can be used however, for looks or what not, but em is for important words to be emphasized and willbe by a screen reader
small is to shrink text, but guys just use css
mark is like highlighted text
del is to strike through text
ins will underline text
sub is for things such as for periodic elements as of "H2O"
sup is to use in a case such as a wikipedia link (common example id assume: technical word would be footnotes)

blockquote is to quote something from another source, whatever that be, is indented usually as well
q is for quotations, where browser slaps on some quote marks
there is now a new abbr element for abbreviations but i dont many will be using this.. and when you do such make it an title element as well so when hovered it states what such actually is

address is for like the contact info of the owner or author of x doc or article
cite is for citing such content; book, poem, song, movie, painting..
bdo is to.. reverse the order of words i.e "Left or Right" into "thgiR ro tfeL"
seems kinda odd and even useless but later perhaps you can make fun puzzles using it in later projects and sites.. (guys trust it must have a use)
also its officially "Bi-Directional Override"

comments in html are pretty simple.. "<!-- words -->" not that crazy.

colors in html and css in general i assume are; RBG, HEX, HSL, RGBA, HSLA.
now what do those color types mean?
everyone should know rbg right? everyone loves to have *rgb* lights; its red, green, blue. rgba is the same but *alpha*, which is just how *bright* it is (or technically opacity)
hex is.. hex code, which is 00 to ff, hex(idecimal) code.
hsl is hue, saturation, and lightness, hsla like above just introduces alpha to it. hue is range of 360 (an circle), 0 is red, 120 is green, 240 is blue.. guys maybe.. i might be going off track but doesnt that seem like.. RGB..?

there is inline and internal css (in file) but guys unless it really needs an IN file overwrite use an .css file..
and to link one put it in the head element (guys why the hell w3schools breeze over head element..? they must not be.. so *bright* in the.. **head** ahhaha.. just me?)
such as "link rel'stylesheet' href='xxx.css'" stylesheet just means it has all the style and css stuff (i assume)

ill be skipping section of IN html css, normal css will be later.

Links.. dont have to be text, in fact can be an image or like any other element (maybe not.. an video but also idk)
in general the "color" by default of links are; underline blue if unvisited, visited is under and purple, and active is under and red, though foc like anything else a little CSS can change colors and such around
targets is one of the most important part.. there  are 4 options; self, blank, parent, top
self is same window/tab it opens in
blank is new window or tab
parent is parent frame,top is full body of window.. 
dont ask fully what that all means, perhaps will be explained later.
like mentioned before an img can be link; just nest img within link (a) such as: a href="..." > img src="blah".... and such

you can link to email via mailto: within href (that opens like gmail or.. scary.. yahoo)

to make a button a link, that requires some JS so that will be later.
titles like above are and can be used for links

links be abs(olute) or rel(ative).. 
now "bookmarks" or the way to jump through a page. you create an element with an id, the href that id in another element somewhere else
i.e idk maybe a img to far down yap about what the image lore is

img element in in technically just a frame to hold whatever image(s), if not mentioned already src is source to image; abs or rel, and alt is just text if doesnt load, takes awhile to load, and for assistance technologies

like above awhile ago there is width and height, altered in line or css..

for rel paths (in same folder and local project or what not), if not same level i.e x.html and x.png, must state in rel(ation) where such is at; i.e /images/x.png

abs paths are simple, just full url link to x content to show.

you can insert gifs as img elements.
more css options that i will ignore for now, but you can float left or right of text.

then some img formats, but guys just search or try to see if works, not that serious.

you can create img maps for clicking x thing is linked to another element but thats a whole lot of trial and error to find right coords to do so.. unless needed not important. (so ill be skipping explaining)

some more css to set an background img, will be skipping like any other areas; CSS and JS

 just do later in independent files

there is a picture element but its kinda random and unless you want to use different size images and content for different screen sizes.. kinda random

now onto favicons, what are they? ever noticed the neat ol icon in a tab? thats what it is, 
there are many sources on can get an "favicon.ico" (which just is default name), where to use and add one? in head region.

an favicon can basically be any img format as well. ico is just more default i assume.

within head yet again (man why the hell w#schools skip head.. idk)
you can set the title of tab and all

now TABLES.. 
there is quite alot but in simple terms..
there is table element, th - table header, tr - table row, td- cell in table, caption is table caption, colgroup states amount of columns, col is specifics of column(s) in colgroup, thead - is header content in table, tbody is body content is table, tfoot is footer content in table

easier to just try and experiment, tables are weird

borders.. css- skipped
table sizes.. css -skipped
specifcs of table headers.. just experiment
padding and spacing.. css -skipped
colspan exists and is to make a cell cover multiple columns
rowspan same as above but for rows
more css to styling.. -skipped

now lists..
ul (unordered list) is ul element
ol (ordered list) is ol element
regardless the type li (list items) element is used per part of list

there is also description lists; dl is the description list, dt is the tag, dd is the content

now specifically ul can be different shapes and such but usually bullet points, ol can be numbers, roman numbers, or letters, upper and lower cases for roman numbers and letters
you can specific in a list what number it starts at

there are block and inline elements, too many to list, one can search and figure later

div element is used to be a container for different and other elements, and what it means.. (likely div-ider)
classes are neat to be able to use in CSS styling and tinkering, and can be used for multiple elements in sequence, is case sensitive
id is similar to classes but quite a big difference, can only be used for one element, is also case sensitive; gotta be something (one char), cant start with num, can have any spaces (whitespaces) so it must be "a" "1b" "b0b" "b0b_Castle" "b0bVast"...

buttons..  is simple just button element
can add disabled in button to make it unclickable

iframe is quite a very neat thing.. image slapping an content of another page on one page.. its format is quite simple, src, title, and whatever styling.

import le JS, via script element, inline/file JS, unless really needed dont matter
there is noscript element for people with browsers that dont support or have scripts enabled.

there is file paths, but like.. this is relatively easy to figure guys.. x.jpg is same level of file, images/x.jpg is same level of file as well in the sense images folder is, /images/x.jpg is an level higher, and ../images/x.jpg is where you area  folder in but stuff is a level higher and whichever direction

relative paths will always usually be better. unless you might BE the owner of an abs link, rel will reign better.

OH MY GUYS.. only now is head element finally introduced officially and explained..

much like a human body... html structure is doctype, then html, then head, then body. head effectively is the brain that decides what its named, what it can do (JS), and how it wants to look (CSS). deeper atributes, but later figure self.

tgere us layout stuff but like.. kinda dont matter; header, nav, section, aside, article, footer. ALL and most is CSS anyways so doesnt matter.

viewport is important part though, makes it so it scales correctly with per-devices.

an very important part now is computer code elements, name is simple code.
pre + code, is optimal way to properly display code snippets. ; is code, kbd, samp, var, pre. atributes.

long list of semantic elements (what semantic means hell if anyone really knows nor cares that much); article, aside, details, figcaption, figure, footer, ehader, main, mark, nav, section, summary, time.

there is some "standards" for good clean code, but that doesnt matter for many yet. so you can freely ignore that.

an important thing with the pre + code is also entities; &lt; is the < char, &gt; is greater than > important for displaying... html code as well.
some important ones in likely more real cases are; &amp; for "ampersand", &quot; for double quotes, &apos; for single quotes. then some currency ones and most fun of all (even in ironically not true cases); &trade; TRADEMARK BABYYY.
there is also daicritical (who named these) marks that are for other languages such as spanish as the more prime example

there is a long long list of possible entities, so dont assume remembering all of them

you could also use values for the genuine number for emojis but unless really needed just use another source to grab emojis than that..

Charsets are some stuff with a bit more lore but just know UTF-8 basically has 10k+ possible values. most beyond 256 are likely emojis and such.

more web lore is IP is Internet Protocol, and URL is Uniform Resource Locator. there is some interesting stuff; scheme, prefix, domain, port, path, filename. but guys not very important to know yet, maybe when entering self-hosting, homelab, or netsec areas but not currently.

XHTML is some new branch that has more set, required elements and changes but generally unless you need again dont matter.

NOW forms.. form element, input element; text, radio, checkbox, submit, button
label, is useful for small parts. and assistance tech
action is what the action does. when you click button what that do (alongside later very likely JS), target is same as much above; blank, self, parent, top, framename (for iframes)

method is an atrribute for sending data for actual offical real pages; get or post. some differences but one can later decide and learn more about use case.

autocomplete is an attribute, might be useful, might be annoying depends what the page is and for.

novalidate is another attribute, data dont gotta be validated when submit

all form attributes are; accept-charset, action, autocomplete, enctype, method, name, novalidate, rel, target

long list of what form element can hold; input, label, select, textarea, button, fieldset, legend, datalist, output, option, optgroup.

one can scourge more into that later

then an even LARGER list of input types; button, checkbox, color, date, datetime-local, email, file hidden, image, month, number, password, radio, range, reset, search, submit, tel, text, time, url, week

then input restrictions; checked, disabled, max, maxlength, min, pattern, readonly, required, size, step, value

now some deeper things with forms themselves; formaction overwrites the upper level action choice per input. formenctype also overwrites upper level set part, formmethod, same overwrites base upper version. then.. basically everything else with just form in front overwrites upper base set specifics.

Now for all intensive purposes this should cover most use-cases for HTML
HTML NOTES over for now; 7-16-2026 {speedran all this in 3 days; tued, wednes, thurs}
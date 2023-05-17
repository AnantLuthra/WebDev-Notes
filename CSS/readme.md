# CSS notes

- [CSS notes](#css-notes)
    - [Types of CSS](#types-of-css)
    - [Types of basic selectors](#types-of-basic-selectors)
    - [Background image \& its properties](#background-image--its-properties)
    - [Box model](#box-model)
    - [Margin collapse](#margin-collapse)
    - [Display properties](#display-properties)
    - [Text-decoration property](#text-decoration-property)
    - [Types of family in fonts(types)](#types-of-family-in-fontstypes)
    - [Size, position and lists.](#size-position-and-lists)
    - [The position property](#the-position-property)
    - [Z-index property](#z-index-property)


### Types of CSS
- Inline CSS - Using CSS in a tag, like this -
```html
<body>
    <p style="text-align: center;">
        This is a paragraph.
    </p>
</body>
```
- Internal CSS - Using CSS in `<head>` tag of HTML,in this we use css for a tag and then using this tag in body will inherit all the properties, like this-
```html
<head>
    <style>
        p {text-align: center;
        background-color: rgb(239, 239, 225);}
    </style>
</head>
- External CSS - In this we create a sepereate `.css` file and use css seperately in that file, by creating classes and using css for specific id's etc, example-
```html
<head>
    <link href="style.css" rel="stylesheet">
</head>
```

### Types of basic selectors 
- CSS element selector
- CSS id Selector
- CSS class Selector
- The CSS grouping Selector

Example -
```css   
/* class selector  */
.cenAlign{
    text-align: center;
    border: 2px solid yellow;
}
.bgBlue{
    color: red;
    background-color: rgb(60, 14, 226);
}

/* element selector  */
h2 {
    text-align: center;
}

/* id selector  */
#mySpan1{
    color: yellow;
    text-align: center;
}

/* grouping selector */
span, footer{
    color: rgb(241, 0, 241);
}
```

- With * selector we can set properties for every element in html.

### Background image & its properties

- We can set BG by `background-image` property while styling body tag of html like this-
```css
body {
    background-image: url('./assets/back1.jpeg');
    background-repeat: round;
}
```
- Their is also a background-repeat property for repeating type of image in background.
- **Types of background-repeat options**
- `background-repeat: repeat-x;` - This repeats image in x axis.
- `background-repeat: repeat-y;` - This repeats image in y axis.
- `background-repeat: no-repeat;`
- `background-repeat: space;` - This will repeat image in x axis but it will take care that every image is shown completely, if not it will remove last image and adjust space of that between other images.
- **`Background-size` property**
- `background-size: auto;` - automatically image is set as per the size of it.
- `background-size: cover;` - Just fills the image all over the element on which you've set the image.
- `background-size: contain;` - Fits the image, as it is fully visible.
- `background-size: 100px 100px;` - Giving size manually. (It will effect looks of image)
- **`background-position` property**
```css
  /* Keyword values */
background-position: top;
background-position: bottom;
background-position: left;
background-position: right;
background-position: center;

/* <percentage> values */
background-position: 25% 75%;

/* <length> values */
background-position: 0 0;
background-position: 1cm 2cm;
background-position: 10ch 8em;

/* Multiple images */
background-position: 0 0, center;

/* Edge offsets values */
background-position: bottom 10px right 20px;
background-position: right 3em bottom 10px;
background-position: bottom 10px right;
background-position: top right 10px;

/* Global values */
background-position: inherit;
background-position: initial;
background-position: revert;
background-position: revert-layer;
background-position: unset;
```

- **`background-attachment` property**

```css
/* Keyword values */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Global values */
background-attachment: inherit;
background-attachment: initial;
background-attachment: revert;
background-attachment: revert-layer;
background-attachment: unset;
```

### Box model
- The box model describes how `content, padding, border, margin` these elements work together to create a box as displayed by CSS.

- like shown in this [image](https://www.simplilearn.com/ice9/free_resources_article_thumb/CSS-Box-Model.png)
- Represented box model in this [FILE](./box_m.html)
  
- **Padding**
```css
/* top | right | bottom | left */
padding: 5px 2px 0 4px;

/* top&bottom | left&right */
padding: 5px 2px;

/* all sides */
padding: 4px;
```
- **Margin**
- Above style to set padding same works in margin.
```css
/* If we put margin to auto then it will automatically give eqal margin to both of the sides
*/
margin: auto;
```

- **Border**
```css
border-width: 3px;
border-style: solid;
/* More values of border-style */
/* 
dashed
dotted
double
groove
hidden
inherit
initial
inset
none
outset
ridge 
*/

/* Also we can specify border like this */
/* top | right | bottom | left */
border-style: none solid dotted dashed;
border-color: red;

/* It rounds the corners of the border.
if you keep increasing the radius it will become
a circle */
border-radius: 20px;
```

### Margin collapse

- If their are two elements and their margin is collapsing then the browser set the margin between these two elements who's margin is greater, or if margin is same then only once the margin is given.
- like if element A has 3px margin and element B also has the same margin then - the distance between these two element will be of 3px.
- and if margin is greater in any element then it will be the distance between those two elements.

- **`box Sizing`**

- Determines what out of padding and border is included in elements width and height can be content-box or border-box
Include only content in width/height

```css
.div1{
          box-sizing: border-box;
}
```
- The content width and height includes, content + padding + border

### Display properties

- **Inline, block**
- Inline elements are those tags which doesn't require whole line to exist, example - `<em>`, `<strong>`, `<img>`
- Block elements are those tags which require whole line to exist, example - `<div>`, `<li>`.

```css
/* precomposed values */
display: block;
display: inline;

/* In inline-block we can use padding/margin whereas in inline we can't*/
display: inline-block;
```

**display: none vs visibility: hidden**
- With display: none, the element is removed from the document flow. Its space is not blocked.
- With visibility: hidden, the element is hidden but its space is reserved.

### Text-decoration property

- Used to decorate the text, It can be overline, line-through, underline, none.

```css
text-decoration: underline;
text-decoration: underline dotted;
text-decoration: underline dotted red;
text-decoration: green wavy underline;
```

- **`text-transformation`**

```css
/* Keyword values */
text-transform: none;
text-transform: capitalize;
text-transform: uppercase;
text-transform: lowercase;
```


### Types of family in fonts(types)

- **font family** - A specific font style
- **Generic familly** - Collection of many font styles.

### Size, position and lists.


- **Size**
Relative lengths
These units are relative to the other length property.
Following are some of the most commonly used relative lengths,

- `em` – unit relative to the parent font size, em means “my parent element’s font-size”
- `rem` – unit relative to the root font size (<html> tag)
- `vw` – unit relative to 1% viewport width
- `vh` – unit relative to 1% viewport height
- `%` - unit relative to the parent element

- **`Min/max- height/width property`**

CSS has a min-height, max-height, and min-width, max-width property.

```css
min-height: 10%;
max-height: 20%;
min-width: 10%;
max-width: 20%;
```

### The position property

- Used to manipulate the location of an element
- Following are the possible values:

- `static`: The default position. top/bottom/left/right/z-index has no effect
- `relative` : The top/bottom/left/right/z-index will now work. Otherwise, the element is in the flow of the document like static.
- `absolute`: The element is removed from the flow and is relatively positioned to its first non-static ancestor. top/bottom etc. works
- `fixed`: Just like absolute except the element is positioned relative to the browser window
- `sticky`: The element is positioned based on the user’s scroll position

### Z-index property

- It is kinda like layers in a burger, the uppermost layer will be visible to us, and if we wanna se the below layer we'll have to remove top most layer.
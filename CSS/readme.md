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
    - [Flexbox](#flexbox)
    - [**Setting an element for a flexbox**](#setting-an-element-for-a-flexbox)
      - [**Flex properties for the children (flex items)**](#flex-properties-for-the-children-flex-items)
    - [Setting an element for a grid container](#setting-an-element-for-a-grid-container)
      - [**Properties to be applied on grid items.**](#properties-to-be-applied-on-grid-items)
    - [CSS media queries](#css-media-queries)
    - [Transforms, Transitions and animations.](#transforms-transitions-and-animations)
    - [CSS 2D transformations methods.](#css-2d-transformations-methods)
      - [`Transform` available options.](#transform-available-options)
    - [CSS 3D transformations methods.](#css-3d-transformations-methods)


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
```
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

### Flexbox

- **Float property**
```css
/* We can float a element through this property, in right or left direction. */
float: right;
float: left;
```

- **Clear property** - It is used to clear up left and right space of a element in which float property has been set.
- This property only works when, the element on which we're applying this property has 1 or more elements floating before it.

```css
<style>
    .content1 {
        background-color: blue;
        width: 40vw;
        height: 40vh;
        float: right;
    }

    .content2 {
        background-color: rgb(0, 255, 0);
        width: 40vw;
        height: 40vh;
        float: right;
        clear: both;
    }
</style>
<body>
    <div class="content1">box1</div>
    <div class="content2">box2</div>
</body>
```
- In above example box2 will clear space in both right and left side of it, and first box will shift below the second box.

### **Setting an element for a flexbox**

```css
.container {
    display: flex;                  /*Initialize a flexbox*/
}
```

<img style="padding: 20px 40px;" src="data:image/png;base64,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" alt="test-image">

- **`flex-direction property`** - Defines the direction towards which items are laid. It can be row (default), row-reverse, column and column-reverse


- Flex properties for parent (flex container)

Following are the properties for the flex parent:

- **`flex-wrap`:** Can be wrap, nowrap, wrap-reverse. This wraps the elements inside flexbox when screen resolution decreases.
- **`justify-content`:** Defines alignment along the main axis.<br>
**Possible values** -  *`center`, `right`, `left`.*
- **`align-items`:** Defines alignment along the cross axis, 
<br>**Possible values** -  *`center`, `baseline`* - for top, *`end`*.
- **`align-content`:** Aligns a flex container’s lines when there is extra space in the cross axis. Basically when their is extra space between flex elements while aligning cross axis then we use this property.

 

#### **Flex properties for the children (flex items)**

Following are the properties for the flex children:

- **`order`**: Controls the order in which the elements appear in the flex container.
- **`align-self`**: Allows default alignment to be overridden for the individual flex items
- **`flex-grow`**: Defines the ability for a flex item to grow
- **`flex-shrink`**: Specifies how much a flex item will shrink relative to the rest of the flex items


### Setting an element for a grid container

First make container a grid container by this.

```css
.container {
    display: flex;
}
```

- Then we can use further these properties to customise our grid container and its items.

```css
.container {
    grid-row-gap: 2px;
    grid-column-gap: 5px;
    
    grid-gap: 2px; /* this will set column and row gap together and of same length. */

    grid-template-columns: 20px 20px 9px;
    grid-template-rows: 20px 20px 9px;
    /* the above one defines number of columns/rows and their width/height. */

}
```

- `align-content` - <br>***valid arguments*** - *`baseline`, `center`, `end`, `space-between`, `space-around`.*

- `justify-content` - same as in flexbox.

#### **Properties to be applied on grid items.**

- `grid-column`: We set this property in that element in which we want to exceed from `1 / n` where `n` represents n'th column till where we want to expand this perticular element/item.
- `grid-row` - It also does the same thing as *`gird-column`* but it works on row. <br>***Example -*** below/ or look in this [File](../HTML/revise.html)
```css
#firstel {
        grid-column: 1/3;
        grid-row: 1/3;

        /* Another style u can use it write it like this. */
        grid-column: 1/ span 3;
}
```

### CSS media queries

- This is basically used to make our website responsive.
- It is nothing but like checker of a event or say condition like viewport width if between 1 and 500px so it will run this code of css and if we specify some another case then css provided under that case will be triggered.

***Example -***
```css
@media only screen and (max-width: 500px){
    body {
        background-color: red;
    }
}
```

### Transforms, Transitions and animations.

Transforms are used to rotate, move, skew or scale elements. They make a 3D effect.

- `transform` - Used to apply 2D or 3D transformation to an element. 
- `transform-origin` - The place by which / around which the element rotates. Possible values - `left, right, center`.z
***Example -*** <br>
2D transformations - we can change x & y exis.
3D transformations - we can change even z exis also.

### CSS 2D transformations methods.

#### `Transform` available options.
***Even we can use more than one transformations on an element at a time.***

- translate() - move element in X or Y exis, argument - `translate(X, Y)`
- rotate() - possible values in turn eg - `0.5turn`, in degrees eg - `45deg`
- scaleX() - Scaling in X direction.
- scaleY() - Scaling in Y direction.
- scale() - Scaling in both X & Y direction simultaniously, eg - `scale(2, 3)`
- skew() - 
- matrix() - We can set above properties in with this in once. eg - `matrix(scaleX(), skewY(), skewX(), translateX(), translateY())`.

### CSS 3D transformations methods.

***You can use degree values in below properties.***
- `rotateX()` - it is basically rotating the element around X axis.
- `rotateY()` - it is basically rotating the element around Y axis.
- `rotateZ()` - it is basically rotating the element around Z axis.
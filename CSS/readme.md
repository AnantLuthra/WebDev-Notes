# CSS notes


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

### Background image

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
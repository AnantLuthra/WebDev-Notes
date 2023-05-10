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
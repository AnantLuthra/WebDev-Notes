# Week 8 - Basics of interenet, HTML

- [Week 8 - Basics of interenet, HTML](#week-8---basics-of-interenet-html)
  - [Basics of internet](#basics-of-internet)
    - [Routers](#routers)
    - [DNS](#dns)
    - [HTTP](#http)
    - [Curl command](#curl-command)
  - [HTML](#html)
    - [Different tags](#different-tags)
    - [Break](#break)
    - [Heading](#heading)
    - [List](#list)
      - [Unordered list](#unordered-list)
      - [Ordered list](#ordered-list)
    - [Tables](#tables)
    - [Adding Image](#adding-image)
    - [Adding videos](#adding-videos)
    - [Links](#links)
    - [Meta](#meta)
      - [Meta (for responsiveness)](#meta-for-responsiveness)
      - [META (for adding website preview)](#meta-for-adding-website-preview)
    - [Style tag](#style-tag)
    - [Form](#form)
    - [Text editing tags](#text-editing-tags)
    - [Inline / block element](#inline--block-element)
    - [Id \& classes](#id--classes)
    - [Sementic tags](#sementic-tags)

## Basics of internet
### Routers

Through routers data is transferred from A point to B on the internet.

TCP/IP - are protocols to transmit data over the internet.

### DNS

DNS - Domain name systems, is a table of server domain names and their IPs.

### HTTP

Hyper text transfer protocol.
We either use ***GET*** or ***POST*** and in response we get something like this.
```
HTTP/1.1 200 OK
Content-Type: text/html
```
Several responses we get back of response code.
```
- 200 - OK sucessfull response
- 301 - Moved Permanently
- 302 - Found
- 304 - Not Modified
- 304 - Temporary Redirect
- 401 - Unauthorized
- 403 - Forbidden
- 404 - Not Found
- 418 - I'm a Teapot
- 500 - Internal Server Error
- 503 - Service Unavailable
```

### Curl command

- With this we can send get request and have response without a browser, and see the response code and more info about the response.
```
curl -I https://www.harvard.edu/
```

## HTML

### Different tags

### Break 
- For a new line. Use it twice to have a blank line.
```html
Car have four wheels and all of them are round in shape.
<br>
also car requires petrol to run.
```
- Creating a paragraph.
```html
<p>
    Food coloring is sometimes added, in addition to stabilizers. The mixture is cooled below the freezing point of water and stirred to incorporate air spaces and to prevent detectable ice crystals from forming.
    <br>
    The result is a smooth, semi-solid foam that is solid at very low temperatures (below 2 °C or 35 °F). It becomes more malleable as its temperature increases.
</p>
```
### Heading
- it's the biggest heading size available. it goes down upto 6 which is the smallest heading available.
```html
<h1>
    <p>
        All the paragraph
    </p>
</h1>
```
- Smallest heading in html.
```html
<h6></h6>
```

### List

#### Unordered list
- Creating an unordered list of items, In this
- `<li>` refers to list items, and
- `<ul>` refers to unordered list. This will make list of items starting with `.`
```html
<body>
    <ul>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ul>
</body>
```
#### Ordered list
- But if we wanna put list items with index(counting) then we can do it with using `<ol>`
```html
<body>
    <ol>
        <li>foo</li>
        <li>bar</li>
        <li>baz</li>
    </ol>
</body>
```
### Tables
- `<table>` - tag for creating table.
- A table also contains `<thead>` and `<body>` just like HTML structure.
- `<thead>` - Under this tag data of heading of columns is feeded.
- `<tr>` - For storing data into a row, (used both in `<thead>` and `<body>` tags inside `<table>`)
- `<th>` - This tag is used for creating column headings used in `<thead>`
- `<td>` - Storing data into rows, it is used inside `<body> - <tr>` tags.
```html
<body>
    <table style="border:1px solid black; border-spacing: 10px; padding: 2px; margin-left: auto; margin-right: auto;">
        <thead>
            <tr>
                <th>Name</th>
                <th>Status</th>
                <th>Salary</th>
                <th>Location</th>
            </tr>
        </thead>
        <body>
            <tr>
                <td>Anant</td>
                <td>425</td>
                <td>devpuri</td>
            </tr>
            <tr>
                <td>Vikas</td>
                <td>23</td>
                <td>prayagraj</td>
            </tr>
            <tr>
                <td>shekhar</td>
                <td>25</td>
                <td>shimla</td>
            </tr>
        </body>
    </table>
</body>
```

### Adding Image
- `alt` for naming the image, describing what is the image about.
- `src` - in this either we can write the name of image file or we can put the link from the internet.
```html
<body>
    <img alt="Channel logo" src="download.png">
</body>
```

### Adding videos
- `<video autoplay loop muted width="1280">` - This means we're autoplaying the video on loop and muted also, and manually defining width of the video to as we wanna show it our website.
```html
<body>
    <video autoplay loop muted width="1280">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4">
    </video>
</body>
```

### Links

- `<a>` - Using anchor tag allows us to put link on a text.
- `href` - Hyper reference
- We should be very be aware of on what link we're clicking on because as you see in the below example the text could be showing something and the link could take us somewhere else, so we should rather first hover on the link and see the link at the bottom left corner of the browser window.
- Below in both the cases the link is of my github account but in the first case it is pretending to be github link of param's account but in real it's not. That's why we should be very conscious while clicking on any URL on the interent on any website.
- `<a href="" target="_blank">link</a>` - Using this attribute in anchor tag we can set link to open in new tab.
```html
<body>
    Visit Param on <a href="https://github.com/AnantLuthra">https://github.com/param302</a>
    <br>
    Visit Anant Luthra on <a href="https://github.com/AnantLuthra">github</a>
</body>
```

### Meta

#### Meta (for responsiveness)
- Through this we can adjust data to be viewed on mobile or any other devise. It's called responsiveness also.
```html
<head>
    <meta name="viewport" content="initial-scale=1, width=devise-width">
    <title>That's meta</title>
</head>
<body>
    Food coloring is sometimes added, in addition to stabilizers.
</body>
```

#### META (for adding website preview)
- Through this property of meta tag we can set what to show in embedds when the link of our webite is shared on any social media app.
- We're setting title, description and image which will be showed in preview.
- `<meta name="keywords" content="_, _, _">` - By putting keywords related to our website in content attribute we can help our website for SEO(search engine optimization) - because through this keywords google's search engine get's ease to show up your website.
- `<meta name="robots" content="NOINDEX, NOFOLLOW">` - Through this tag we can weather put INDEX and FOLLOW in content if we wanna SEO to show our website on search, otherwise we can use NOINDEX & NOFOLLOW.
```html
<head>
    <meta property="og:title" content="Desi site">
    <meta property="og:description" content="A site where you can buy desi street dogs">
    <meta property="og:image" content="dog.jpeg">
    <title>That's meta</title>
    <meta name="keywords" contents="e-commerce, online shopping, cash on delievery, free delievery, online sale">
    <meta name="robots" content="INDEX, FOLLOW">
</head>
```
### Style tag
- `<style>` - this tag is used for including style.css here or we can write styles right between in style tag to style our tags.
  
```html
<head>
    <style>
        form {text-align: center;}
        h1 {text-align: center;}
    </style>
    <title>
        Google
    </title>
    <link rel="icon" type="image/x-icon" href="./assets/google.ico">
</head>
```

### Form
- `<form>` - this tag is used to create a search bar.
- `<input>` - this tag is used inside form tag, it contains several attributes of input bar such as autocomplete, autofocus, name, placeholder, type. *If type attribute is provided the value of "search" then it will became a search bar, elif "submit" is provided then it will become submit butten.*
- `placeholder` - Background value shown in search bar.
- `value` - Value to be shown in box, whether it's search bar or submit button.
- `autofocus` - it autofocuses on the search bar.
```html
<body>
    <h1>Google</h1>
    <form action="https://www.google.com/search" method="get">
        <input autocomplete="off" autofocus name="q" placeholder="Search google" type="search">
        <input type="submit" value="Enter">
    </form>
</body>

```

### Text editing tags
- `<strong>` - It is used to bold text in a paragraph tag.
- `<em>` - It is used for italic.
- `<hr>` - It creates a horizontal line.. just like when we use `--` in markdown file.
```html
<body>
    <h1>Schools</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium quisquam ea accusamus ullam <strong>hli snao aksdfj</strong> aliquam eum itaque, <em>laks namem nasho !!</em> aliquid! Temporibus.</p>
    <hr>
    <p>nacho</p>
</body>
```

### Inline / block element
- Inline elements are those tags which doesn't require whole line to exist, example - `<em>`, `<strong>`, `<img>`
- Block elements are those tags which require whole line to exist, example - `<div>`, `<li>`.


### Id & classes
- ID is unique of every element in html, used to identify and use/manipulate data of that element from backend.
- Classes are such a temple in which all properties are defined like color, bg-color, alignment, border etc, and when we put this classes names into an element in html then it acquires all the properties of that class.
- We can use as many classes we want in an element.
- Classes are defined in CSS file.

### Sementic tags
- These are work as the same as other tags but these tags clearifies that what they contain(different parts of webpage), which helps in SEO.

Example of sementic tags.
```html
<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>
```
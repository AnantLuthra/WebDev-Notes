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
- `<table>` - is tag showing that a table is created, and `<tr>` stands for table row,
- `<td>` stands for table data.
```html
<body>
    <table>
        <tr>
            <td>Anant</td>
            <td>Shiv</td>
            <td>Shekhar</td>
        </tr>
        <tr>
            <td>Vikas</td>
            <td>Gautam</td>
            <td>Gambhir</td>
        </tr>
        <tr>
            <td>Disco</td>
            <td>Dancer</td>
            <td>Best</td>
        </tr>
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
```html
<head>
    <meta property="og:title" content="Desi site">
    <meta property="og:description" content="A site where you can buy desi street dogs">
    <meta property="og:image" content="dog.jpeg">
    <title>That's meta</title>
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
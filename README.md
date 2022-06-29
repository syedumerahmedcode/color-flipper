# color-flipper

## Table of content

- [Introduction](#introduction)
- [Out Of Scope](#out-of-scope)
- [Project structure](#project-structure)
- [index.html](#indexhtml)
- [app.js](#appjs)
- [hex.html](#hexhtml)
- [hex.js](#hexjs)
- [styles.css](#stylescss)
- [Technologies Used](#technologies-used)
- [Prerequisities](#prerequisities)
- [Commands](#commands)
- [Contribution](#contribution)
- [References](#references)
- [Contact Information](#contact-information)

## Introduction

The project is called color flipper and in this project, we will flip through colors when the user click a button.

This program can be used to teach kids either a fix set of colors which are displayed on the screen along with its name or generate random colors with every click of the button.

The project consists of two pages **index.html** and **hex.html** with their corresponding javascript files, namely _app.js_ and _hex.js_.

The application is coded in Visual Studio Code and deployed using Live server extension. This project is the first project in a series of basic javascript project created for better understanding of the technology and how things work. The inspiration for this project is coming from this [Udemy](https://www.udemy.com/course/javascript-tutorial-for-beginners-w/) course.

## Out Of Scope

Since this is an beginner project in which the focus is just to learn the some basic javascript, testing is out of scope of this project. Similarly, continous delivery(either via Docker or github Pilot) is out of scope of this project.

## Project structure

The project consists of 6 files which are described below:

- index.html
- app.js
- hex.html
- hex.js
- styles.css

Additionally, a _setup_ folder is also created which contains the initial project in its basic form and it was used as basis for the finished project.

## index.html

The _index.html_ page contains the title and the link to the _styles.css_ stylesheet in its <head /> section.

Inside the `<body />` tag, it contains two navigation links inside an unordered list.

```html
<ul class="nav-links">
  <li>
    <a href="index.html">simple</a>
  </li>
  <li>
    <a href="hex.html">hex</a>
  </li>
</ul>
```

In the `<main />` tag, a default background color and a button with an id is created.

```html
<div class="container">
  <h2>background color: <span class="color">#f1f5f8</span></h2>
  <button class="btn btn-hero" id="btn">click me</button>
</div>
```

## app.js

The main idea here is to loop through a fix set of colours repeatedly without reloading the page. Here, we have a list of set colors in an array which will be repeated through. They are:

```javascript
const colors = [
  "red",
  "green",
  "blue",
  "white",
  "grey",
  "black",
  "pink",
  "yellow",
  "orange",
  "purple",
  "brown",
];
```

Using `document`, we obtain _btn_ element and _color_ class. We also initialize a counter with the initial value of 0.

## hex.html

To be written.

## hex.js

To be written.

## styles.css

To be written.

## Technologies Used

- [Javascript](https://www.w3schools.com/js/): JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions(A programming language is said to have First-class functions when functions in that language are treated like any other variable. For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable). While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based(Prototype-based programming is a style of object-oriented programming in which classes are not explicitly defined, but rather derived by adding properties and methods to an instance of another class or, less frequently, adding them to an empty object. In simple words: this type of style allows the creation of an object without first defining its class.), multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
- [HTML5](https://www.w3schools.com/html/default.asp): HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page's appearance/presentation (CSS) or functionality/behavior (JavaScript). HTML5 is the latest version of HTML.
- [Visual Studio Code](https://code.visualstudio.com/Download): Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.
- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer): Launch a development local Server with live reload feature for static & dynamic pages

## Prerequisities

Since this project is constructed using Visual Studio Code and Live Server, therefore, that is the recommended prerequisite for this project. Someone trying to run the project via other means are welcome to do so but then they would have to figure out the tech stack(IDE+Web Server) combination themselves.

## Commands

To be written.

## Contribution

Feature requests, issues, pull requests and questions are welcome.

## References

- [1](https://www.udemy.com/course/javascript-tutorial-for-beginners-w/): Javascript Tutorial and Projects Course (2022)
  Learn Javascript by Building 30+ Interesting Projects **(Primary resource)**
- [2](https://github.com/john-smilga/javascript-basic-projects): Original source code of the project **(Primary Resource) (Github)**
- [3](https://developer.mozilla.org/en-US/docs/Web/JavaScript): JavaScript | MDN
- [4](https://developer.mozilla.org/en-US/docs/Glossary/HTML5): HTML5 - MDN Web Docs Glossary: Definitions of Web-related terms | MDN

## Contact Information

How to reach me? At [github specific gmail account](mailto:syedumerahmedcode@gmail.com?subject=%5BGitHub%5D%20Hello%20from%20Github). Additionally, you can reach me via [Linkedin](https://www.linkedin.com/in/syed-umer-ahmed-a346a746/) or at [Xing](https://www.xing.com/profile/SyedUmer_Ahmed/cv)

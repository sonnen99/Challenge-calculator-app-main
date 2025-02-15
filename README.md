# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./images/Screenshot1.jpg)
![](./images/Screenshot2.jpg)
![](./images/Screenshot3.jpg)
![](./images/Screenshot4.jpg)


### Links

- Solution URL: [Solution URL](https://www.frontendmentor.io/solutions/html-css-bootstrap-js-jquery-solution-UXf_2Du_L-)
- Live Site URL: [Live site URL](https://sonnen99.github.io/Challenge-calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Bootstrap for card design
- @media breakpoints
- js and jQuery for functionality
- Mobile-first workflow
- Refactoring

### What I learned

```html
  <div class="col ">
        <div class="row number-box">
          <p class="col number">1</p>
          <p class="col number">2</p>
          <p class="col number">3</p>
        </div>
        <div class="row slider-box">
          <p class="col theme">
            THEME
          </p>
          <input class="col" type="range" name="theme" id="theme-slider" min="1" max="3" value="1">
        </div>
      </div>
```
```css
[data-theme="dark"] {
    /* Background */
    --color-bg: hsl(222, 26%, 31%);
    --color-tbg: hsl(223, 31%, 20%);
    --color-sbg: hsl(224, 36%, 15%);
    /* Keys */
    --color-bkey: hsl(225, 21%, 49%);
    --color-bshadow: hsl(224, 28%, 35%);
    --color-bkey-hover: #A2B3E1;
    --color-okey: hsl(6, 63%, 50%);
    --color-oshadow: hsl(6, 70%, 34%);
    --color-okey-hover: #F96C5B;
    --color-key: hsl(30, 25%, 89%);
    --color-shadow: hsl(28, 16%, 65%);
    --color-key-hover: #FFFFFF;
    /* Text */
    --color-txtd: hsl(221, 14%, 31%);
    --color-txtl: hsl(0, 0%, 100%);
    --color-txto: hsl(0, 0%, 100%);
    --color-txtr: hsl(0, 0%, 100%);
}
```
```js
Calculator programming
```

## Author
- Frontend Mentor - [sonnen99](https://www.frontendmentor.io/profile/sonnen99)
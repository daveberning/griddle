<p align="center">
  <img width="500" src="https://raw.githubusercontent.com/daveberning/griddle/master/src/griddle-logo.png" />
</p>

 <!-- ![](https://img.shields.io/website?label=Documentation%20Site&style=for-the-badge&url=https%3A%2F%2Fgriddle.netlify.com%2F) -->
 [![](https://img.shields.io/github/package-json/v/daveberning/griddle?color=eb8a5e&style=for-the-badge)](https://www.npmjs.com/package/@daveberning/griddle)
 [![](https://img.shields.io/npm/dm/@daveberning/griddle?style=for-the-badge)](https://www.npmjs.com/package/@daveberning/griddle)
 [![](https://img.shields.io/maintenance/yes/2020?style=for-the-badge)](https://github.com/daveberning)
 [![](https://img.shields.io/github/size/daveberning/griddle/dist/main.css?label=Griddle&style=for-the-badge)](https://github.com/daveberning/griddle/blob/master/dist/main.css)
 [![](https://img.shields.io/github/size/daveberning/griddle/dist/grid.css?label=Grid%20Only&style=for-the-badge)](https://github.com/daveberning/griddle/blob/master/dist/grid.css)
 [![](https://img.shields.io/static/v1?label=PRs&message=Welcome&color=success&style=for-the-badge)](https://github.com/daveberning/griddle/blob/master/CONTRIBUTING.md)
 [![](https://img.shields.io/twitter/follow/griddlecss?color=%23EB8A5E&style=for-the-badge)](https://twitter.com/griddlecss)
 [![NPM License](https://img.shields.io/npm/l/all-contributors.svg?style=for-the-badge)](https://github.com/daveberning/griddle/blob/master/LICENSE)

Griddle is a CSS framework created with CSS Grid and Flexbox. It's easy to get started with Griddle, especially if
you are familiar with how other CSS Frameworks work. At its core, is CSS Grid. The CSS specification that is quickly becoming the new standard when creating UI layouts and grids. If you do not know, CSS Grid, no worries. You can start creating intrinsic designs for all modern browsers with just a few classes.
 
# Overview

## Columns
With Griddle, you can create standard to complex grid layouts with just a few classes. Every one of Griddle's classes is prefixed with `.is-` or `.has-`. This was done for two reasons. 1. For it to read like English and 2. for you to differentiate your classes and Griddle's.
 
At a high level, Griddle consists of a grid, column, and rows. To create a grid, just add the `is-grid` class to any HTML node.
 
```html
<div class="is-grid">

</div>
```

By default, Griddle will activate with a standard twelve (12) column grid with auto rows. You do _not_ need to add any additional classes to define a column.

It is important to note that any element following the `is-grid` wrapper will become a grid column. *All columns stack on the `xs` and `sm` breakpoints.* Starting at the **md** breakpoint, the column will span the number of grid columns specified by the class that is used.
 
Let's create a column. All column classes follow this same structure.
 
 > is-col-{number}-{breakpoint}

There are a total of twelve (12) column classes across six (6) breakpoints:`xs`, `sm`, `md`, `lg`, `xl` and `xxl`.
 
```html
<div class="is-grid">
 <div class="is-col-1">Column</div>
</div>
```
 
Griddle is built with a mobile-first approach. Meaning that the classes will apply to all breakpoints until specified at a different breakpoint.
 
For example, the above code will render a column that spans one (1) column across the six (6) different breakpoints.
 
We can overwrite this to have it span six (6) columns at the `md` breakpoint: 
 
```html
<div class="is-grid">
 <div class="is-col-1 is-col-6-md">Column</div>
</div>
```

If you have columns that span more than twelve (12), then the column will wrap to a new row *below* it.

## Custom Column Lengths

In Griddle, you can create grids that do not adhere to the standard twelve (12) column grid. You can easily create grids that have anywhere from one (1) to twelve (12) columns if you want a grid that has an odd number of columns, like a seven (7), no problem. This gives you a different level of control over your grid layouts.
 
To change the grid's column length, just add the class: `has-col-{number}-{breakpoint}`.
 
These classes work *exactly* like the `is-col` classes; there are up to twelve (12) classes across the six (6) different breakpoints.
 
 ```html
 <div class="is-grid has-col-2"><!-- note here -->
  <div class="is-col-1">Column One</div>
  <div class="is-col-1">Column Two</div>
 </div>
```

The grid above now has two (2) columns instead of the default amount. Now, each column will span 50% of the grid's width. This is the same as using the `is-col-6` class in a standard twelve (12) column grid.
 
You can of course change the number of columns that a grid has at each breakpoint.
 
```html
<div class="is-grid has-col-2 has-col-4-lg">
 ...
</div>
```

The grid above will have two (2) columns at the `xs`, `sm`, and `md` breakpoints. But will adapt to have four (4) columns while the window is sized to the `lg`, `xl`, and `xxl` breakpoints.

### Column Gaps
By default, each grid will come with column and row gaps already defined. So you do not have to keep adding extra classes to achieve very similar or standard looking grids.

You can change the size of these gaps to a larger size if you wish. There are a total of two (2) additional gap sizes: `md` and `lg`.
 
 ```html
<div class="is-grid has-col-gap-lg">
...
</div>
```

Grid gap values:
- Standard: `1rem`
- Medium (md): `1.5rem`
- Large (lg): `2rem`

Or you can remove them entirely:

 ```html
<div class="is-grid has-no-col-gap">
...
</div>
```

#### Column Gap Customization
You can customize the size of the column gaps via native CSS variables. Just add the following to a `.css` file in your project:

```css
:root {
  /* Grid Gaps */
 --col-gap: 1rem;
 --col-gap-md: 1.5rem;
 --col-gap-lg: 2rem;
}
```

## Grid Direction

You can change the direction of the grid. The standard direction of any `is-grid` is of course left-to-right (`ltr`).

To change the direction of the grid to right-to-left (`rtl`), just add the following class to your grid.

```html
<div class="is-grid is-rtl">
 ...
</div>
```

As with everything related to the grid, you can change the direction of the grid at any of the specified breakpoints.

```html
<div class="is-grid is-rtl-lg">
 ...
</div>
```

In this case, the grid will flow in the left-to-right (ltr) direction for the `xs`, `sm`, and `md` breakpoints. However, the direction will change to right-to-left (`rtl`) starting at the `lg` breakpoint.

## Grid Item Placement

Griddle comes with a few placement classes that you can add to your grid items.

```html
<div class="is-grid">
 <div class="is-placed-right">
 </div>
</div>
```

This will essentially adds the `place-self: right;` CSS property and value to the grid item. In CSS, the `place-self` property is shorthand for `justify-self` and `align-self`.

There are a total of five (5) `is-placed-` classes:

1. `is-placed-left`
2. `is-placed-right`
3. `is-placed-center`
4. `is-placed-start`
5. `is-placed-normal`

## Rows

By default, Griddle will activate with `auto` rows. With this, your grid will wrap its columns automatically and create as many rows as your grid needs.
 
 You do not need to add any additional classes to define a row. It is important to note that any element following the `is-grid` wrapper will be in a single row. Unless there are more columns than the grid has. Then a new row will be created. You do not need to add additional classes, Griddle does all that for you.
 
However, you can tell a column how many rows it should span. There are a total of twelve (12) column classes across the six (6) breakpoints:`xs`, `sm`, `md`, `lg`, `xl`, and `xxl`.
 
All `is-row` classes follow this same structure.
 
 > is-row-{number}-{breakpoint}
 
 ```html
 <div class="is-grid">
 <div class="is-col-1 is-row-2">Column</div>
 </div>
 ```
 
 Griddle is built with a mobile-first approach. Meaning that the classes will apply to all breakpoints until specified at a different breakpoint.
 
The above code will render a column that spans one (1) column and two (2) rows across the six (6) breakpoints.
 
 We can overwrite this to make it six (6) columns at the `md` breakpoint and three (3) rows tall: 
 
```html
<div class="is-grid">
 <div class="is-col-1 is-col-6-md is-row-2 is-row-3-md">Columnm</div>
</div>
```

## Grids With Custom Row Amounts

In Griddle, you can create custom grids. Or grids that have a specific number of rows.

To change the grid's row length, just add the class: `has-row-{number}`.
 
These classes work the same as the `is-row` classes in that there are up to twelve (12) across the six (6) breakpoints.
 
 ```html
 <div class="is-grid has-row-3"><!-- note here -->
 <div class="is-col-1">Column One</div>
 <div class="is-col-1">Column Two</div>
 </div>
```

The grid above explicitly now has three (3) rows instead of `auto`.
 
You can, of course, change the number of columns that a grid has at each breakpoint.
 
 ```html
 <div class="is-grid has-row-3 has-row-6-lg">
 ...
 </div>
 ```

### Row Gaps
Each grid with the `is-grid` class will automatically apply grid column and row gaps. You can change the size of these gaps to a larger size if you choose to do so.
 
 ```html
<div class="is-grid has-row-gap-lg">
...
</div>
```

Or remove them entirely.

 ```html
<div class="is-grid has-no-row-gap">
...
</div>
```
#### Row Gap Configuration
```css
:root {
  /* Grid Gaps */
 --row-gap: 1rem;
 --row-gap-md: 1.5rem;
 --row-gap-lg: 2rem;
}
```

# Typography
Griddle comes with a number of utility classes specific to typography.

## Headings
In Griddle, there are pre-styled HTML headings: `h1` to `h6`. Classes with the same styles as their HTML tag counterparts.

These classes are`is-h1` to `is-h6`. You may apply these classes to any HTML element to apply the styles of a specific heading. This is especially useful if you want an `h3` to look like an `h1` without changing its semantic value.

```html
<h3 class="is-h1">An example heading</h3>
``` 
## Text Colors
Much like other frameworks, Griddle uses a `primary`, `secondary`, like naming convention for it's colors. You can learn more about customizing these colors in the __Configuration__ section of the README.

There are currently eleven (11) color classes. You can leverage these text colors with the `is-text-` classes. All text classes follow this same structure.

> `is-text-{color}

"Color" being either `primary`, `secondary`, `tertiary`, `cta`, `white`, `black`, `grey`, `success`, `warning`, `danger` and `info`.

## Text Styles
Style classes are also provided to give you greater control. These are:

`is-bold`: Bolds the text
`is-strike`: Strikesthrough the text
`is-italic`: Italisizes the text
`is-capitalized`: Capitalizes the first letter of each new word
`is-uppercase`: Capitalizes each letter of every word
`is-aligned-left`: Aligns the text to the left
`is-aligned-center`: Aligns the text to the center
`is-aligned-right`: Aligns the text to the right

## Elements
To help you quickly prototype user interfaces, you can use some of the styled elements that are included. Most notably `is-button`, `is-alert`, and `is-tag`.

Each element works the same way. You can add background colors, text colors, and other modifiers.

```html
<button class="is-button">Send Message</button>
<!-- or -->
<a href="#" class="is-button">A link as a button</a>
```
Feel free to add any modifiers to this to create different styled buttons.

```html
<button class="is-button is-cta is-rounded is-outline">Send Message</button>
```

# Modifers
These are classes that you can tack on to just about anything to add additional styles. These are typically agnostic to the HTML element it's attached to.

## Spacing Modifiers
There are several utility classes included for you to space elements.

### Margin and Padding
`has-m`: Applies the default margin size on all sizes. You can also use `has-m-lg` or `has-m-md` to have different sized margins.
`has-p`: Applies the default padding size on all sizes. You can also use `has-p-lg` or `has-p-md` to have different sized padding.

`has-m-top`, `has-m-right`, `has-m-bottom`, `has-m-left`.
You can tack of the size of the margin as well: Ex: `has-m-left-lg`

`has-p-top`, `has-p-right`, `has-p-bottom`, `has-p-left`.
You can tack of the size of the padding as well: Ex: `has-p-left-lg`

### Flexbox
`is-centered`: Centers all content vertically and horizontally within an element.
`is-centered-horizontally`: Centers all content horizontally within an element.
`is-centered-vertically`: Centers all content vertically within an element.

## Display Modifiers
There are a total of six (6) display modifier classes. These are:

`is-block`
`is-inline-block`
`is-flex`
`is-inline-flex`
`is-grid`
`is-inline-grid`

We've also included helper classes to hide and show elements on touch screen devices.

`is-device`: Shows an element on a touch screen device
`is-screen`: Shows an element on a non-touch screen device

## Color Modifers
We've touched on this briefly in other sections. But there are modifier classes for each color type (ex: primary) for text and backgrounds.

`is-text-{type}`: Changes the color of the text per the type's value
`has-bkg-{type}: Changes the background color per the type's color.
You can configure these color types in the CSS of your project: 

```css
:root {
  /* Colors */
 --primary: #016575;
 --secondary: #03414b;
 --tertiary: #003242;
 --cta: #EB8A5E;
 --white: #ffffff;
 --black: #000000;
 --grey: #ececec;
 --success: #48C774;
 --warning: #FFDD57;
 --danger: #F14668;
 --info: #3298DC;
}
```

## Image Modifiers
If you want an image to be responsive, just add the `is-responsive` class any image.

Then feel free to round it out and make it a circle: `is-rounded`

# Configuration
Griddle is built with CSS variables which means that you can easily configure Griddle whether or not you are using SCSS.

To configure colors add the following to the top of your projects CSS file.

```css
:root {
 /* Colors */
  --primary: #016575;
  --secondary: #03414b;
  --tertiary: #003242;
  --cta: #EB8A5E;
  --white: #ffffff;
  --black: #000000;
  --grey: #ececec;
  --success: #48C774;
  --warning: #FFDD57;
  --danger: #F14668;
  --info: #3298DC;

  /* Typography */
  --h1: 4rem;
  --h2: 3.5rem;
  --h3: 3rem;
  --h4: 2.5rem;
  --h5: 2rem;
  --h6: 1.5rem;
  --root-font-size: 16px; /* REM values are based on this */
  --root-line-height: 2rem;

  /* Misc */
  --container-width: 1400px;
  --border-radius: .25rem;
  --border-radius-md: .5rem;
  --border-radius-lg: .75rem;
  --spacing: 1rem;      /* Used for .has-m and .has-p classes */
  --spacing-md: 1.5rem; /* Used for .has-m-md and .has-p-md classes */
  --spacing-lg: 2rem;   /* Used for .has-m-lg and .has-p-lg classes */

  /* Grid Gaps */
  --col-gap: 1rem;
  --col-gap-md: 1.5rem;
  --col-gap-lg: 2rem;

  --row-gap: 1rem;
  --row-gap-md: 1.5rem;
  --row-gap-lg: 2rem;
}
```

# Documentation

A proper documentation site is in the works. In the meantime, I hope this README helps. Fell free to reach out on [Twitter](https://twitter.com/daveberning) if you have any questions

# Installation
You can install Griddle with either NPM or Yarn.

```bash
$ yarn add @daveberning/griddle
# or
$ npm install @daveberning/griddle
```

After installation, you can integrate it into your website or application with ESM `import` or through a SASS `@import`

```js
import '@daveberning/griddle;
```

or

```scss
@import '@daveberning/griddle;
```

If you do not want Griddle's theme, utility classes, or elements, no worries - we get it. If you want to just use just the grid, import that, it's located in the `dist` directory.
 
 ```js
 import '@daveberning/griddle/dist/grid.css;
 ```

or

```scss
 @import '@daveberning/griddle/dist/grid.css';
```

or you can download it via a CDN if you don't want to download Griddle via Yarn or NPM.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@daveberning/griddle@<version>/dist/grid.css" />
```

# Contributing
If you'd like to contribute, that's fantastic! Please fork and submit a pull request with improvements and new features.

All of the source files are in the `src/scss` directory. Feel free to use the `index.html` in the `src` directory to view and test Griddle or your new feature or improvement. Only the `.scss` files in the `src/scss` directory will get bundled up into the `dist` directory. 

Here are a few commands for you to know.
## Commands 

### Install Dependencies
```bash
$ yarn
# or 
$ npm install
```

### Build

Build for **production**.

```bash
$ yarn build:production
# or
$ npm run build:production
```

You can build Griddle for development and have Webpack watch for any files changes.

```bash
$ yarn watch
# or
$ npm run watch 
```

Or you can do a one time build for development.

```bash
$ yarn build:dev
# or
$ npm run build:dev
```

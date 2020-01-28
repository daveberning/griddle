<p align="center">
  <img width="500" src="https://github.com/daveberning/griddle/blob/master/src/griddle-logo.png" />
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
you are familiar with how other CSS Frameworks work. At it's core, is CSS Grid. The CSS specification that is quickly
 becoming the new standard when creating UI layouts and grids. If you do not know, CSS Grid, no worries. You can
  start creating intrinsic layouts for all modern browsers with just a few classes.
 
# Overview

## Columns
With Griddle, you can create standard to complex grid layouts with just a few classes. All of Griddle's classes are prefixed with `.is-` or `.has-`. This is done for two reasons. 1. For it to read like English and 2. for you to differentiate your classes and Griddle's.
  
At a high level, Griddle consists of a grid, column, and rows. To create a grid, just add the `is-grid` class to any HTML node.
   
```html
<div class="is-grid">

</div>
```

By default, Griddle will activate with a standard twelve (12) column grid with auto rows. You do not need to add any additional classes to define a column.

It is important to note that any element following the `is-grid` wrapper will become a grid column. *All columns stack on the xs and sm breakpoints.* Starting at the **md** breakpoint, the column will span the number of grid columns specified by the class that is used.
  
Let's create a column. All column classes follow this same structure.
  
  > is-col-{number}-{breakpoint}

There are a total of twelve (12) column classes across six (6) breakpoints:`xs`, `sm`, `md`, `lg`, `xl` and `xxl`.
  
```html
<div class="is-grid">
  <div class="is-col-1">Column</div>
</div>
```
 
Griddle is built with a mobile first approach. Meaning that the classes will apply to all breakpoints until specified at a different point.
  
For example: The above code will render a column that spans one (1) column across the six (6) breakpoints.
  
We can overwrite this to have it span six (6) columns at the `md` breakpoint: 
  
```html
<div class="is-grid">
  <div class="is-col-1 is-col-6-md">Column</div>
</div>
```

If you have columns that span more than twelve (12), then the column will wrap to the row *below* it.

## Custom Column Lengths

In Griddle, you can create grids that do not adhere to the standard twelve (12) column grid. You can easily create
 grids that have anywhere from one (1) to twelve (12) columns. If you want a grid that has an odd number of columns, like a seven (7) column grid, no problem. This gives you a different level of control over your grids.
 
To change the grid's column length, just has the class: `has-col-{number}-{breakpoint}`.
 
These classes work *exactly* like the `is-col` classes; there are up to twelve (12) classes across the six (6
) different breakpoints.
 
 ```html
 <div class="is-grid has-col-2"><!-- note here -->
   <div class="is-col-1">Column One</div>
   <div class="is-col-1">Column Two</div>
 </div>
```

The grid above now has two (2) columns instead of the default amount. Now, each column will span 50% of the grid's width. This would be equivalent to `is-col-6` if you kept the standard grid length. 
 
 You can of course change the number of columns that a grid has at each breakpoint.
 
```html
<div class="is-grid has-col-2 has-col-4-lg">
  ...
</div>
```

The grid above will have two (2) columns at the `xs`, `sm`, and `md` breakpoints. But will change to have four (4) columns
 while the window is sized to the `lg`, `xl`, and `xxl` breakpoints.

### Column Gaps
By default, each grid will come with column and row gaps already defined. So you do not have to keep adding extra classes to achieve very similar or standard looking grids.

You can change the size of these gaps to a larger size if you wish. There are a total of two (2) additional gap sizes
: md and lg.
 
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

## Grid Direction

You can change the direction of the grid. The standard direction of any `is-grid` is of course left-to-right `ltr`. This is the default direction of a grid in the CSS Grid spec itself.

To change the direction of the grid to right-to-left (rtl) just add the following class to your grid.

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

In this case, the grid will flow in the left-to-right (ltr) direction for the `xs`, `sm`, and `md` breakpoints
. However, the direction will change to right-to-left (rtl) starting at the `lg` breakpoint.

## Grid Item Placement

Griddle comes with a few placement classes that you can add to your grid items.

```html
<div class="is-grid">
  <div class="is-placed-right">
  </div>
</div>
```

This will essentially adds the `place-self: right;` property and value to the grid item. In CSS, the `place-self` property is shorthand for `justify-self` and `align-self`.

There are a total of five (5) `is-placed` classes:

1. `is-placed-left`
2. `is-placed-right`
3. `is-placed-center`
4. `is-placed-start`
5. `is-placed-normal`

## Grid Item Order

With Griddle, you can also re-order grid items as you see fit. Browsers will read your HTML document from top to bottom, left to right. So whichever grid item comes first in your DOM, the browser will render that at the top left. However, there may be some instances where you want the second grid item in your DOM to be the fourth item or the second. In this class, you use the `is-order` class.

```html
<div class="is-grid">
  <div class="is-order-2">
    Column
  </div>
</div>
```
There a lot of twelve (12) order classes across the six (6) different breakpoints. The structure of the `is-order
` class is similar to the `is-col` and `is-row` classes.

> is-order-{number}-{breakpoint}

```html
<div class="is-grid">
  <div class="is-order-2 is-order-1-md is-order-4-lg">
    Column
  </div>
  ...
</div>
```

In the case above, this grid (although the first in the DOM) will render as the second item for the `xs` and `sm
` breakpoints, the first item for the `md` breakpoint, and the fourth item for the `lg`, `x'`, and `xxl` breakpoints.

## Rows

By default, Griddle will activate with auto rows. This is done so grid items will wrap if the span more than the grid
 column length.
 
 You do not need to add any
 additional classes to define a row. It is important to note that any element following the `is-grid` wrapper will be
  contained in a single row. Unless there are more columns than the grid has. Then a new row will be created. You do
   not need to add additional classes, Griddle does all that for you.
   
   However, you can tell a column how many rows it should span. There are a total of twelve (12) column classes
    across the six (6) breakpoints:`xs`, `sm`, `md`, `lg`, `xl`, and `xxl`.
  
 All row classes follow this same structure.
  
  > is-row-{number}-{breakpoint}
  
  ```html
  <div class="is-grid">
    <div class="is-col-1 is-row-2">Column</div>
  </div>
  ```
 
 Griddle is built wtth a mobile first approach. Meaning that the classes will apply to all breakpoints until
  specified at a different point.
  
  The above code will render a column that spans one (1) column and two (2) rows across the six (6) breakpoints.
  
  We can overwrite this to make it six (6) columns at the `md` breakpoint and three (3) rows tall: 
  
```html
<div class="is-grid">
  <div class="is-col-1 is-col-6-md is-row-2 is-row-3-md">Columnm</div>
</div>
```

## Grids With Custom Row Amounts

In Griddle, you can create custom grids. Or grids that have a specific number of rows.
 
 To change the grid's row length, just has the class: `has-row-{number}`.
 
 These classes work exactly like the `is-row` classes in that there are up to twelve (12) across the six (6
 ) breakpoints.
 
 ```html
 <div class="is-grid has-row-3"><!-- note here -->
   <div class="is-col-1">Column One</div>
   <div class="is-col-1">Column Two</div>
 </div>
```

The grid above explicitly now has three (3) rows instead.
 
 You can of course change the number of columns that a grid has at each breakpoint.
 
  ```html
  <div class="is-grid has-row-3 has-row-6-lg">
    ...
  </div>
 ```

### Row Gaps
Each grid with the `is-grid` class will automatically apply add grid column and row gaps. You can change the size of
 these gaps to a larger size if you wish.
 
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
# Configuration
Griddle is built with CSS variables which means that you can easily configure Griddle whether or not you are using SCSS.

To configure colors add the follow to the top of your projects CSS file.

```css
:root {
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

# Documentation

There are slew of additional utility classes for Griddle's grid as well as other utilities for text and buttons. It's
 encouraged to take a lot at the documentation website for a butter understand of Griddle. This is just a quick
  overview of Griddle and how the grid works.

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
    
If you are _not_ using SCSS and would like to use Griddle with plan ol' CSS you can do that as well.

```html
<link rel="stylesheet" href="node_modules/@daveberning/griddle/dist/main.css"
```

If you do not want Griddle's theme, utility classes, or elements, no worries - we get it it. If you want to just use
 grid, just import that. It's located in the `dist` directory.
 
 ```js
 import '@daveberning/griddle/dist/grid.css;
 ```

or

```scss
 @import '@daveberning/griddle/dist/grid.css';
```

or

```html
<link rel="stylesheet" href="node_modules/@daveberning/griddle/dist/grid.css"
```

# Contributing
If you'd like to contribute, fantasic! Please fork and submit pull requests with improvements and new features.

All of the source files are in the `src/scss` directory. Feel free to use the `index.html` in the `src` directory to
 view and test Griddle or your new feature or improvement. Only the `.scss` files in the `src/scss` directory gets
  bundled up into the `dist` directory. 

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

# Griddle


<p align="center">
  <img width="500" src="src/griddle-logo.png" />
</p>

Griddle is a CSS framework created with CSS Grid and Flexbox. It's easy to get started with Griddle, especially if
you are familiar with how other CSS Frameworks work. At it's core, is CSS Grid. The CSS specification that is quickly
 becoming the new standard when creating UI layouts and grids. If you do not know, CSS Grid, no worries. You can
  start creating intrinsic layouts for all modern browsers with just a few classes.
  
 ![](https://img.shields.io/website?label=Documentation%20Site&style=for-the-badge&url=https%3A%2F%2Fgriddle.netlify.com%2F)
  ![](https://img.shields.io/twitter/follow/griddlecss?color=%23EB8A5E&style=for-the-badge)
  
![](https://img.shields.io/github/package-json/v/daveberning/griddle?color=eb8a5e&style=for-the-badge)
![](https://img.shields.io/maintenance/yes/2020?style=for-the-badge)

![](https://img.shields.io/github/size/daveberning/griddle/dist/main.css?label=Griddle&style=for-the-badge)
![](https://img.shields.io/github/size/daveberning/griddle/dist/grid.css?label=Grid%20Only&style=for-the-badge)

 [![NPM License](https://img.shields.io/npm/l/all-contributors.svg?style=for-the-badge)]()
 
# Overview

## Columns
With Griddle, you can create standard to complex grid layouts with just a few classes. All of Griddle's classes are
 prefixed with `.is-` or `.has-`. This is done for two reaosns. 1. For it to read like English and 2. for you to
  differentiate your classes and Griddle's.
  
  At a high level, Griddle consists of a grid, column, and rows. To create a grid, just add the `is-grid` class to
   any element.
   
```html
<div class="is-grid">

</div>
```

By default, Griddle will activate with a standard twelve (12) column grid with auto rows. You do not need to add any
 additional classes to define a column. It is important to note that any element following the `is-grid` wrapper will
  become a grid column. All columns span twelve (12) unless stated otherwise.
  
  Let's create a column. All column classes follow this same structure.
  
  > is-col-{number}-{breakpoint}

There are a total of twelve (12) column classes across five (5) breakpints:`xs`, `sm`, `md`, `lg`, and `xl`.
  
  ```html
  <div class="is-grid">
    <div class="is-col-1">Columnm</div>
  </div>
  ```
 
 Griddle is built wtth a mobile first approach. Meaning that the classes will apply to all breakpoints until
  specified at a different point.
  
  The above code will render a column that spans one (1) column across the five (5) breakpoints.
  
  We can overwrite this to make it six (6) columns at the `md` breakpoint: 
  
```html
<div class="is-grid">
  <div class="is-col-1 is-col-6-md">Columnm</div>
</div>
```

IF you have columns that span more than twelve (12), then the column will wrap to the row below it.

## Grids With Custom Column Amounts

In Griddle, you can create custom grids. Or grids that have a specific number of columns besides the standard twelve
 (12).
 
 To change the grid's column length, just has the class: `has-col-{number}`.
 
 These classes work exactly like the `is-col` classes in that there are up to twelve (12) across the five (5) breakpoints.
 
 ```html
 <div class="is-grid has-col-2"><!-- note here -->
   <div class="is-col-1">Columnm One</div>
   <div class="is-col-1">Columnm Two</div>
 </div>
```

The grid above now has two (2) columns instead of the standard amount. Now, each column will span 50% of the grid's
 width. This would be equivalent to `is-col-6` in the standard grid. 
 
 You can of course change the number of columns that a grid has at each breakpoint.
 
  ```html
  <div class="is-grid has-col-2 has-col-4-lg">
    ...
  </div>
 ```

### Column Gaps
Each grid with the `is-grid` class will automatically apply add grid column and row gaps. You can change the size of
 these gaps to a larger size if you wish.
 
 ```html
<div class="is-grid has-col-gap-lg">
...
</div>
```

Or remove them entirely.

 ```html
<div class="is-grid has-no-col-gap">
...
</div>
```

## Rows

By default, Griddle will activate with auto rows. This is done so grid items will wrap if the span more than the grid
 column length.
 
 You do not need to add any
 additional classes to define a row. It is important to note that any element following the `is-grid` wrapper will be
  contained in a single row. Unless there are more columns than the grid has. Then a new row will be created. You do
   not need to add additional classes, Griddle does all that for you.
   
   However, you can tell a column how many rows it should span. There are a total of twelve (12) column classes across five (5) breakpints:`xs`, `sm`, `md`, `lg`, and `xl`.
  
 All row classes follow this same structure.
  
  > is-row-{number}-{breakpoint}
  
  ```html
  <div class="is-grid">
    <div class="is-col-1 is-row-2">Columnm</div>
  </div>
  ```
 
 Griddle is built wtth a mobile first approach. Meaning that the classes will apply to all breakpoints until
  specified at a different point.
  
  The above code will render a column that spans one (1) column and two (2) rows across the five (5) breakpoints.
  
  We can overwrite this to make it six (6) columns at the `md` breakpoint and three (3) rows tall: 
  
```html
<div class="is-grid">
  <div class="is-col-1 is-col-6-md is-row-2 is-row-3-md">Columnm</div>
</div>
```

## Grids With Custom Row Amounts

In Griddle, you can create custom grids. Or grids that have a specific number of rows.
 
 To change the grid's row length, just has the class: `has-row-{number}`.
 
 These classes work exactly like the `is-row` classes in that there are up to twelve (12) across the five (5) breakpoints.
 
 ```html
 <div class="is-grid has-row-3"><!-- note here -->
   <div class="is-col-1">Columnm One</div>
   <div class="is-col-1">Columnm Two</div>
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

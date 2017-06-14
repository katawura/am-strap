# AM Strap

A DRY and modular grid framework built with SCSS using attribute modules and flexbox. 

Why AM Strap? Many class based grids involve repetition and result in long and unreadable chains of classes. Splitting this into attribute modules (AM) produces shorter and more semantic markup with the same visual results.

## Install

````sh
npm install am-strap
````

Import `am-strap.scss` at the beginning of your stylesheet.

## Config

To customise the grid, add the config map before importing AM Strap. To use floats instead of flexbox, set `grid-type` to `float`.

````scss
// Config map
$am-strap: (
  "columns": 12,
  "grid-type": "flexbox",
  "breakpoints": (
    "xs": (
      "breakpoint": 0px,
      "column-padding": 1rem,
      "container-padding": 1rem,
      "container-max-width": false
    ),
    "sm": (
      "breakpoint": 420px,
      "column-padding": 1rem,
      "container-padding": 1rem,
      "container-max-width": false
    ),
    "md": (
      "breakpoint": 768px,
      "column-padding": 1rem,
      "container-padding": 1rem,
      "container-max-width": true
    ),
    "lg": (
      "breakpoint": 992px,
      "column-padding": 1rem,
      "container-padding": 1rem,
      "container-max-width": true
    ),
    "xl": (
      "breakpoint": 1200px,
      "column-padding": 1rem,
      "container-padding": 1rem,
      "container-max-width": true
    )
  )
);
````

## HTML Usage

**Container with row and columns**

````html
<div am-container>
  <div am-row>
    <div am-col="md-4 xs-6"></div>
    <div am-col="md-4 xs-3"></div>
    <div am-col="md-4 xs-3"></div>
  </div>
</div>
````

**Push and pull columns**

````html
<div am-col="sm-6" am-push="sm-6"></div>
<div am-col="sm-6" am-pull="sm-6"></div>
````

**Offet columns**

````html
<div am-col="md-6" am-offset="md-3"></div>
<div am-col="lg-3" am-offset="lg-1"></div>
````

**Hide and show elements**

````html
<div am-col="md-6" am-hidden="xs sm"></div>
<div am-col="xs-9" am-visible="xs sm"></div>
````

## CSS Usage

**Target a specific breakpoint**

````scss
@media #{$only-sm} {
  // Styles...
}
````

**Target above a breakpoint**

````scss
@media #{$above-md} {
  // Styles...
}
````

**Target below a breakpoint**

````scss
@media #{$below-lg} {
  // Styles...
}
````
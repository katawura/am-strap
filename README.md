# AM Strap

A DRY modular styling framework built with SCSS using attribute modules. It is recommended to [normalize](https://necolas.github.io/normalize.css/) your project before importing AM Strap. Ensure required browser support by using [autoprefixer](https://github.com/postcss/autoprefixer) when compiling.

## Contents

1. [Install](#install)
2. [Grid](#grid)
3. [Buttons](#buttons)
4. [Forms](#forms)
5. [Float](#float)
6. [Align](#align)

<a name="install"></a>
## Install

````sh
bower install am-strap
````
    
Import at the start of your SCSS

````scss
@import "./bower_components/am-strap/all";
````

Alternatively you can import individual modules. To customise a module, add it's config map with your settings before the import. All dimension values accept rem, em and px while color values accept rgba, rgb, hex and named values.

<a name="grid"></a>
## Grid

The grid system is based on [Bootstrap](http://getbootstrap.com/) but uses attribute modules. Reference their documentation for more details on how to use it - just remember to convert to the relevant attribute module values.

#### Config

````scss
$am-columns: 12;

$am-breakpoints: (
  "xs": (
    "container": fluid,
    "padding": 1rem,
    "width": 0px
  ),
  "sm": (
    "container": fluid,
    "padding": 1rem,
    "width": 420px
  ),
  "md": (
    "container": set,
    "padding": 1rem,
    "width": 768px
  ),
  "lg": (
    "container": set,
    "padding": 2rem,
    "width": 992px
  ),
  "xl": (
    "container": set,
    "padding": 2rem,
    "width": 1200px
  )
);
````

#### HTML Usage

Grid layout

````html
<div am-container>
  <div am-row>
    <div am-col="md-6 xs-12"></div>
    <div am-col="md-3 xs-6"></div>
    <div am-col="md-3 xs-6"></div>
  </div>
</div>
````

Push & pull

````html
<div am-col="sm-6" am-push="sm-6"></div>
<div am-col="sm-6" am-pull="sm-6"></div>
````

Offset

````html
<div am-col="md-6" am-offset="md-3"></div>
````

Hidden & visible

````html
<div am-col="md-6" am-hidden="xs sm"></div>
<div am-col="xs-12" am-visible="xs sm"></div>
````

#### CSS Usage

Target specific breakpoint

````scss
@media #{$only-sm} {
  // Styles for sm only
}
````
    
Target screens above breakpoint

````scss
@media #{$above-md} {
  // Styles for above md
}
````
    
Target screens below breakpoint

````scss
@media #{$below-lg} {
  // Styles for below lg
}
````

<a name="buttons"></a>
## Buttons

#### Config

````scss
$am-btn: (
  "fill-color": #ffffff,
  "fill-background": #333333,
  "ghost-color": #111111,
  "ghost-border-color": #111111,
  "ghost-border-width": 2px,
  "height": 3rem,
  "loading-background": #333333
);
````

#### Usage

Accepted values for style:

- ghost 
- fill 

Accepted values for hover animation:

- tick
- arrow

Examples:

````html
<a href="" am-btn="ghost">Read more</a>
<a href="" am-btn="fill">Read more</a>
<a href="" am-btn="ghost tick">Submit</a>
<a href="" am-btn="fill arrow">Next</a>
````

<a name="forms"></a>
## Forms

#### Config

````scss
$am-form: (
  "background-color": transparent,
  "border-color": #cccccc,
  "border-width": 2px,
  "checkbox-height": 2rem,
  "checkbox-checked-size": 1.25rem,
  "color": #111111,
  "input-height": 3rem,
  "padding": 1rem,
  "placeholder-color": #888888,
  "response-negative-color": #ed9696,
  "response-positive-color": #9bd49b
);
````

#### Usage

Accepted values:

- input
- textarea
- select
- checkbox

````html
<input type="text" am-form="input">
````

````html
<textarea am-form="textarea"></textarea>
````

````html
<div am-form="select">
  <select>
    <option selected="true" disabled="disabled">--Select--</option>
    <option value="Option 1">Option 1</option>
   <option value="Option 2">Option 2</option>
  </select>
</div>
````

````html
<div am-form="checkbox">
  <input type="checkbox" id="checkbox1">
  <label for="checkbox1"></label>
  <label for="checkbox1">Accept our terms and conditions</label>
</div>
````

<a name="float"></a>
## Float

#### Usage

Accepted values:

- clear
- left
- right
- none
- initial
- inherit

Examples:

````html
<div am-float="clear">
  <div am-float="left">
    Element floated left
  </div>
  <div am-float="right">
    Element floated right
  </div>
</div>
````

<a name="align"></a>
## Align

#### Usage

Accepted values:

- left
- right
- center
- justify 
- initial
- inherit

Examples:

````html
<div am-align="left">
  Text is left aligned
</div>
<div am-align="right">
  Text is right aligned
</div>
````
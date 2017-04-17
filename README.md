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

Alternatively you can import any individual modules from the [modules](modules/) directory. To customise styles for a module, add it's config map before the import declaration and edit the relevant values.

<a name="grid"></a>
## Grid

The grid system is based on [Bootstrap](http://getbootstrap.com/) but uses attribute modules. Please reference their documentation for additional details on how to use it - just remember to convert to the relevant attribute modules and values.

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

````html
<div am-container>
  <div am-row>
    <div am-col="md-6 xs-12"></div>
    <div am-col="md-3 xs-6"></div>
    <div am-col="md-3 xs-6"></div>
  </div>
</div>
````

````html
<div am-col="sm-6" am-push="sm-6"></div>
<div am-col="sm-6" am-pull="sm-6"></div>
````

````html
<div am-col="md-6" am-offset="md-3"></div>
````

````html
<div am-col="md-6" am-hidden="xs sm"></div>
<div am-col="xs-12" am-visible="xs sm"></div>
````

#### CSS Usage

````scss
@media #{$only-sm} {
  // Styles for sm only
}
````
    
````scss
@media #{$above-md} {
  // Styles for above md
}
````
    
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
  "height": 3rem,
  "fill-color": #ffffff,
  "fill-background-color": #333333,
  "ghost-color": #111111,
  "ghost-border-color": #111111,
  "ghost-border-width": 2px,
  "loading-background-color": #333333
);
````

#### Accepted values

- ghost 
- fill 
- tick *(optional hover state)*
- arrow *(optional hover state)*

#### Usage

````html
<a href="" am-btn="ghost">Text</a>
<a href="" am-btn="fill">Text</a>
<a href="" am-btn="ghost tick">Text</a>
<a href="" am-btn="fill arrow">Text</a>
````

<a name="forms"></a>
## Forms

#### Config

````scss
$am-form: (
  "color": #111111,
  "input-height": 3rem,
  "padding": 1rem,
  "border-width": 2px,
  "border-color": #cccccc,
  "background-color": transparent,  
  "checkbox-height": 2rem,
  "checkbox-checked-size": 1.25rem,
  "placeholder-color": #888888,
  "response-negative-color": #ed9696,
  "response-positive-color": #9bd49b
);
````

#### Accepted values

- input
- textarea
- select
- checkbox


#### Usage

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
  <input type="checkbox" id="checkbox-1">
  <label for="checkbox-1"></label>
  <label for="checkbox-1">Label text</label>
</div>
````

<a name="float"></a>
## Float

#### Accepted values

- clear
- left
- right
- none
- initial
- inherit

#### Usage

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

#### Accepted values

- left
- right
- center
- justify 
- initial
- inherit

#### Usage

````html
<div am-align="left">
  Text aligned left
</div>
<div am-align="right">
  Text aligned right
</div>
````
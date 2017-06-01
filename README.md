# AM Strap

A DRY modular styling framework built with SCSS using attribute modules. It is recommended to use [autoprefixer](https://github.com/postcss/autoprefixer) for browser support.

## Contents

1. [Install](#install)
2. [Grid](#grid)

<a name="install"></a>
## Install

#### NPM

````sh
npm install am-strap
````

At the start of your stylesheet, import individual files from the [modules](modules/) directory or use the `all` file to import all modules. To customise styles for a module, add it's config map before the import declaration and edit the relevant values.

<a name="grid"></a>
## Grid

The grid system is based on [Bootstrap](http://getbootstrap.com/) but uses attribute module syntax.

#### Config

````scss
$am-grid-columns: 12;

$am-grid-breakpoints: (
  "xs": (
    "breakpoint": 0px,
    "column-padding": 1rem,
    "container-padding": 1rem,
    "container-type": fluid
  ),
  "sm": (
    "breakpoint": 420px,
    "column-padding": 1rem,
    "container-padding": 1rem,
    "container-type": fluid
  ),
  "md": (
    "breakpoint": 768px,
    "column-padding": 1rem,
    "container-padding": 1rem,
    "container-type": set
  ),
  "lg": (
    "breakpoint": 992px,
    "column-padding": 2rem,
    "container-padding": 2rem,
    "container-type": set
  ),
  "xl": (
    "breakpoint": 1200px,
    "column-padding": 2rem,
    "container-padding": 2rem,
    "container-type": set
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
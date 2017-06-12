# AM Strap

A DRY modular styling framework built with SCSS using attribute modules. It is recommended to use [autoprefixer](https://github.com/postcss/autoprefixer) for enhanced browser support.

## Contents

1. [Install](#install)
2. [Config map](#config-map)
3. [HTML usage](#html-usage)
4. [CSS usage](#css-usage)

<a name="install"></a>
## Install

````sh
npm install am-strap
````

Add the [config map](#config-map) and import `am-strap.scss` to your SCSS.

<a name="config-map"></a>
## Config Map

````scss
$am-strap: (
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
);
````

<a name="html-usage"></a>
## HTML Usage

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

<a name="css-usage"></a>
## CSS Usage

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
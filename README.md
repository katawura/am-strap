# AM Strap
A modular styling framework built with SCSS using attribute modules and DRY principles.

## Usage
---

To include the full package in your project, add the following to the start of your SCSS

`@import "../node_modules/am-strap/all"`

## Modules
---

1. [Grid](#grid)
2. [Screens](#screens)
3. [Buttons](#buttons)
4. [Forms](#forms)
5. [System](#system)

## Grid
---

#### Config

    $am-columns: 12;

    $am-breakpoints: (
      "xs": (
        "width": 0px,
        "padding": 1rem 
      ),
      "sm": (
        "width": 420px,
        "padding": 1rem
      ),
      "md": (
        "width": 768px,
        "padding": 2rem
      ),
      "lg": (
        "width": 992px,
        "padding": 2rem
      ),
      "xl": (
        "width": 1200px,
        "padding": 2rem
      )
    );

#### Examples

Grid layout

    <div data-container>
      <div data-row>
        <div data-col="md-6 xs-12"></div>
        <div data-col="md-3 xs-12"></div>
        <div data-col="md-3 xs-12"></div>
      </div>
    </div>

Pushes & pulls

    <div data-col="sm-6" data-push="sm-6"></div>
    <div data-col="sm-6" data-pull="sm-6"></div>

Offset

    <div data-col="md-6" data-offset="md-3"></div>

Hidden & visible

    <div data-col="md-6" data-hidden="xs sm"></div>
    <div data-col="xs-12" data-visible="xs sm"></div>
 
The grid follows the same rules as Bootstrap, so a more detailed explanation of how it works can be found [on their website](https://getbootstrap.com/examples/grid/) (although of course AM-Strap uses attribute modules instead of classes).

## Screens
---

Config

    $am-breakpoints: (
      "xs": (
        "width": 0px
      ),
      "sm": (
        "width": 420px
      ),
      "md": (
        "width": 768px
      ),
      "lg": (
        "width": 992px
      ),
      "xl": (
        "width": 1200px
      )
    );

Target a specific screen size

    @media #{$only-sm} {
      // target sm breakpoint
    }
    
Target screen sizes above a breakpoint

    @media #{$above-sm} {
      // target breakpoints above sm
    }
    
Target screen sizes below a breakpoint   
    
    @media #{$above-lg} {
      // target breakpoints below lg
    }
    
Note that the config uses a map config with the same name as the grid. This is to avoid repeating breakpoints. If both the grid and screens modules are used, you only need to declare the grid config map.

## Buttons
---

Config

    $am-btn: (
      "height": 48px,
      "color": #111111,
      "background": transparent,
      "border-width": 2px,
      "border-color": #111111,
      "loading-background": #333333
    );

Examples

    <a href="" data-btn="tick">Submit</a>
    <a href="" data-btn="arrow">Next</a>
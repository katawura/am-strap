# AM Strap
A modular styling framework built with SCSS using attribute modules and DRY principles.


## Usage
---

To include the full package in your project, import it at the start of your SCSS with the relevant path.

`@import "./node_modules/am-strap/all"`

Each module requires a config map. If you want to customise a module, you can declare it's config map with your own values. Otherwise, modules will default to using the maps shown below.


## Modules
---

1. [Grid](#grid)
2. [Buttons](#buttons)
3. [Forms](#forms)
4. [System](#system)


## <a name="grid"></a>Grid
---

#### Config

    $am-columns: 12;

    $am-breakpoints: (
      "xs": (
        "width": 0px,
        "spacing": 1rem 
      ),
      "sm": (
        "width": 420px,
        "spacing": 1rem
      ),
      "md": (
        "width": 768px,
        "spacing": 2rem
      ),
      "lg": (
        "width": 992px,
        "spacing": 2rem
      ),
      "xl": (
        "width": 1200px,
        "spacing": 2rem
      )
    );

#### HTML

** Grid layout **

    <div data-container>
      <div data-row>
        <div data-col="md-6 xs-12"></div>
        <div data-col="md-3 xs-12"></div>
        <div data-col="md-3 xs-12"></div>
      </div>
    </div>

** Pushes & pulls **

    <div data-col="sm-6" data-push="sm-6"></div>
    <div data-col="sm-6" data-pull="sm-6"></div>

** Offset **

    <div data-col="md-6" data-offset="md-3"></div>

** Hidden & visible **

    <div data-col="md-6" data-hidden="xs sm"></div>
    <div data-col="xs-12" data-visible="xs sm"></div>
 
** Equal height columns **

    <div data-row="flex-sm noflex-lg">
      <div data-col="xs-6"></div>
      <div data-col="xs-6"></div>
    </div>

#### CSS

** Target specific screen size **

    @media #{$only-sm} {
      // target sm breakpoint
    }
    
** Target screen sizes above a breakpoint **

    @media #{$above-sm} {
      // target breakpoints above sm
    }
    
** Target screen sizes below a breakpoint ** 
    
    @media #{$above-lg} {
      // target breakpoints below lg
    }
  


## <a name="buttons"></a>Buttons
---

#### Config

    $am-btn: (
      "height": 48px,
      "color": #111111,
      "background": transparent,
      "border-width": 2px,
      "border-color": #111111,
      "loading-background": #333333
    );

#### HTML

    <a href="" data-btn="tick">Submit</a>
    <a href="" data-btn="arrow">Next</a>
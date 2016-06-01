# AM Strap
A modular styling framework built with SCSS using attribute modules and DRY principles.

## Usage

**Download**

    bower install am-strap
    
**Import at the start of your SCSS**

    @import "./bower_components/am-strap/all";

Alternatively you can import individual modules. They are all stand-alone files with no dependencies. Each module requires a config map, and includes a default map in the file. To customise a module, just declare it's config map with your own values.

## Modules

1. [Grid](#grid)
2. [Buttons](#buttons)
3. [Forms](#forms)
4. [System](#system)

<a name="grid"></a>
## Grid

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

**Grid layout**

    <div data-container>
      <div data-row>
        <div data-col="md-6 xs-12"></div>
        <div data-col="md-3 xs-6"></div>
        <div data-col="md-3 xs-6"></div>
      </div>
    </div>

**Push & pull**

    <div data-col="sm-6" data-push="sm-6"></div>
    <div data-col="sm-6" data-pull="sm-6"></div>

**Offset**

    <div data-col="md-6" data-offset="md-3"></div>

**Hidden & visible**

    <div data-col="md-6" data-hidden="xs sm"></div>
    <div data-col="xs-12" data-visible="xs sm"></div>
 
**Equal height columns**

    <div data-row="flex-sm noflex-lg">
      <div data-col="xs-6"></div>
      <div data-col="xs-6"></div>
    </div>

#### CSS

**Target specific screen size**

    @media #{$only-sm} {
      // target sm
    }
    
**Target screen sizes above a breakpoint**

    @media #{$above-md} {
      // target above md
    }
    
**Target screen sizes below a breakpoint**
    
    @media #{$below-lg} {
      // target below lg
    }

<a name="buttons"></a>
## Buttons

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
# AM Strap
A modular styling framework built with SCSS using attribute modules and DRY principles. It is recommended to [normalize](https://necolas.github.io/normalize.css/) your project before using AM-Strap.


## Contents

1. [Install](#install)
2. [Grid](#grid)
3. [Buttons](#buttons)
4. [Forms](#forms)

<a name="install"></a>
## Install

Download with bower

    bower install am-strap
    
Then import at the start of your SCSS

    @import "./bower_components/am-strap/all";

Alternatively you can import individual modules. They are all stand-alone files with no dependencies. Each module requires a config map and includes fallback settings. To customise a module, simply declare it's config map using your own values. In config maps, all dimension keys accept rem, em and px while color keys accept rgba, rgb, hex and named values.

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

#### Usage

Grid layout

    <div am-container>
      <div am-row>
        <div am-col="md-6 xs-12"></div>
        <div am-col="md-3 xs-6"></div>
        <div am-col="md-3 xs-6"></div>
      </div>
    </div>

Push & pull

    <div am-col="sm-6" am-push="sm-6"></div>
    <div am-col="sm-6" am-pull="sm-6"></div>

Offset

    <div am-col="md-6" am-offset="md-3"></div>

Hidden & visible

    <div am-col="md-6" am-hidden="xs sm"></div>
    <div am-col="xs-12" am-visible="xs sm"></div>
 
Equal height columns

    <div am-row="flex-sm noflex-lg">
      <div am-col="xs-6"></div>
      <div am-col="xs-6"></div>
    </div>

#### CSS

Target specific screen size

    @media #{$only-sm} {
      // target sm
    }
    
Target screen sizes above a breakpoint

    @media #{$above-md} {
      // target above md
    }
    
Target screen sizes below a breakpoint
    
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

#### Usage

    <a href="" am-btn>More</a>
    <a href="" am-btn="tick">Submit</a>
    <a href="" am-btn="arrow">Next</a>

<a name="forms"></a>
## Forms

#### Config

	$am-form: (
      "input-height": 3rem,
      "checkbox-height": 2rem,
      "spacing": 1rem,
      "color": #111111,
      "placeholder": #888888,
      "background-color": transparent,
      "border-width": 2px,
      "border-color": #cccccc,
      "positive-color": #9bd49b,
      "negative-color": #ed9696
    );
    
#### Usage

Input

    <input type="text" am-form="input" />
    <textarea am-form="input"><textarea/>
    
Select box

    <div am-form="select">
      <select>
        <option selected="true" disabled="disabled">--Select--</option>
        <option value="Option 1">Option 1</option>
       <option value="Option 2">Option 2</option>
      </select>
    </div>
    
Checkbox

    <div am-form="checkbox">
      <input type="checkbox" id="checkbox1" />
      <label for="checkbox1"></label>
      <label for="checkbox1">Accept our terms and conditions</label>
    </div>
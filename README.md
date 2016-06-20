# AM Strap
A modular styling framework built with SCSS using attribute modules and DRY principles. It is recommended to [normalize](https://necolas.github.io/normalize.css/) your project before using AM-Strap.


## Contents

1. [Install](#install)
2. [Grid](#grid)
3. [Buttons](#buttons)
4. [Forms](#forms)
5. [System](#system)

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

    <div data-container>
      <div data-row>
        <div data-col="md-6 xs-12"></div>
        <div data-col="md-3 xs-6"></div>
        <div data-col="md-3 xs-6"></div>
      </div>
    </div>

Push & pull

    <div data-col="sm-6" data-push="sm-6"></div>
    <div data-col="sm-6" data-pull="sm-6"></div>

Offset

    <div data-col="md-6" data-offset="md-3"></div>

Hidden & visible

    <div data-col="md-6" data-hidden="xs sm"></div>
    <div data-col="xs-12" data-visible="xs sm"></div>
 
Equal height columns

    <div data-row="flex-sm noflex-lg">
      <div data-col="xs-6"></div>
      <div data-col="xs-6"></div>
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

    <a href="" data-btn="tick">Submit</a>
    <a href="" data-btn="arrow">Next</a>

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

    <input type="text" />
    
Select box

    <div data-select>
      <select>
        <option selected="true" disabled="disabled">-- Select --</option>
        <option value="Option 1">Option 1</option>
       <option value="Option 2">Option 2</option>
      </select>
    </div>
    
Checkbox

    <div data-checkbox>
      <input type="checkbox" id="checkbox1" />
      <label for="checkbox1"></label>
      <label for="checkbox1">Accept our terms and conditions</label>
    </div>
    
<a name="system"></a>
## System

#### Config

    $am-system: (
      "padding": 1rem,
      "spacing": 1rem,
      "positive-color": #9bd49b,
      "negative-color": #ed9696
    );
    
#### Usage

Basic response message

    <div data-response="positive">
      Thank you for submitting your details
    </div>
    
Response as link with close icon

    <a href="" data-response="negative close">
      There was an error submitting your details
    </a>    
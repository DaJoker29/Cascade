# Cascade
jQuery plugin to give several sequential elements display in a cascading fashion.
Build Instructions
-------------------
First, use [Node/NPM](https://nodejs.org/) to install dependencies

```
npm install
```

Next, use [Grunt](http://gruntjs.com/) to build project

```
grunt prod
```
**-- or --**
```
grunt dev
```
> Production is compressed and uglified. Development is uncompressed with sourcemaps.
> *Default `grunt` command will build development version and launch `grunt watch` to jump straight into coding*

Usage Instructions
------------------
First, import [jQuery](https://jquery.com/) as this package requires it.

Second, import this package at the bottom of your body element

Finally, initialize the plugin as you would a jQuery method

```
$('.cascade').cascade();
```

An object containing the following parameters can be passed in as a argument, defaults shown. Possible `direction` are: 'slideRight', 'slideLeft', 'slideUp', and 'slideDown'.

`beforeCascade` and `afterCascade` accept callbacks to be run before and after the method runs, respectively.

```
{
  interval: 200, // in milliseconds
  direction: 'slideRight', // 'slideRight', 'slideLeft', 'slideUp', 'slideDown'
  beforeCascade: function() {},
  afterCascade: function() {}
}
```

Roadmap
---------

### Next
- ~~Slide from left~~
- ~~Slide from right~~
- ~~Slide from top~~
- ~~Slide from bottom~~
- ~~Pre- & Post-Run Hooks~~
- Switch hidden/visible state until triggered

### Next + 1
- Fade In
- Fade Out
- Extend Down (see project list)
- Pull Back -> Slide
- Pull Back -> Fade
- Pull Forward -> Slide
- Pull Forward -> Fade
- Rotate -> Slide
- Rotate -> Fade

### Future
- Adjustable timing
- Multiple effects

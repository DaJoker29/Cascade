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

An object containing the following parameters can be passed in as a argument, defaults shown.

```
{
  interval: 200,
  beforeCascade: function() {},
  afterCascade: function() {}
}
```

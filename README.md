# ngComputus

[![Build Status](https://travis-ci.org/trekhleb/angular-library-seed.svg?branch=master)](https://travis-ci.org/trekhleb/angular-library-seed)
[![npm version](https://badge.fury.io/js/ng-computus.svg)](https://badge.fury.io/js/ng-computus)

This library calculates the date of the Easter full moon in any given year. The return object provides both Gregorian and Julian reckonings. 
The Gregorian calendar came into use in 1582 but the algorithm can still be used in to calculate what Easter _would_ have been in pre-1582 years.
The Julian calendar is recommended for pre-1582 dates to give a historically accurate date for the celebration of Easter.

# Installation


`npm install -s ng-computus`

# Usage

The library has a single constructor to build a computus object containing both calendar reckonings.

`Computus(2000)` returns a object with the following structure:

```
{
  gregorian: { ... }
  julian: { ... }
}
```
Both the `gregorian` and `julian` objects have identical structures with the following properties:

#### dominicalLetter
[Dominical letters](https://en.wikipedia.org/wiki/Dominical_letter) or Sunday letters are a method used to determine the day of the week for particular dates. When using this method, each year is assigned a letter (or pair of letters for leap years) depending on which day of the week the year starts on.
#### easterFullMoon
The calendar reckoning of the date of the Easter full moon. To maximise portability with different Datetime libraries this returned as an array representation in the form `[day, month, year]`
#### easterSunday
The calendar reckoning of the date of Easter Sunday. To maximise portability with different Datetime libraries this returned as an array representation in the form `[day, month, year]`
#### goldenNumber
The number assigned to each year in sequence to indicate the year's position in a 19-year [Metonic cycle](https://en.wikipedia.org/wiki/Metonic_cycle).
#### martyrologyLetter
The [Martyrology](https://en.wikipedia.org/wiki/Martyrology) letter of the given year. It is used to indicate the order of saints and feast dates that year.
#### solarCycle
The [solar cycle](https://en.wikipedia.org/wiki/Solar_cycle) or solar magnetic activity cycle is the nearly periodic 11-year change in the Sun's activity and appearance. This is represented as a number between 1 and 11.


# Development

## Quick Start

```bash
# Clone the repository
git clone https://github.com/markdturner/ng-computus.git

# Go to repository folder
cd ng-computus

# Install all dependencies
yarn install

# Build the library
yarn build
```

## File Structure

```
ng-computus
  ├─ src                          * Library sources home folder
  |  ├─ services                  * library services with tests
  |  ├─ index.ts                  * Library entry point that is used by builders
  |  └─ computus.module.ts        * Library module
  |
  ├─ .gitignore	                  * List of files that are ignored while publishing to git repo
  ├─ .npmignore                   * List of files that are ignored while publishing to npm
  ├─ .travis.yml                  * Travic CI configuration
  ├─ LICENSE                      * License details
  ├─ README.md                    * README instructions for the library
  ├─ gulpfile.js                  * Gulp helper scripts
  ├─ karma-test-entry.ts          * Entry script for Karma tests
  ├─ karma.conf.ts                * Karma configuration for our unit tests
  ├─ package.json                 * NPM dependencies, scripts and package configuration
  ├─ tsconfig-aot.json            * TypeScript configuration for AOT build
  ├─ tsconfig.json                * TypeScript configuration for UMD and Test builds
  ├─ tslint.json                  * TypeScript linting configuration
  ├─ webpack-test.config.ts       * Webpack configuration for building test version of the library
  ├─ webpack-umd.config.ts        * Webpack configuration for building UMD bundle
  └─ yarn.lock                    * Yarn lock file that locks dependency versions
```

## Dependencies

#### Node/NPM
Install latest Node and NPM following the [instructions](https://nodejs.org/en/download/). Make sure you have Node version ≥ 7.0 and NPM ≥ 4.

#### Yarn
[Yarn package manager](https://yarnpkg.com/en/) is optional but highly recommended. If you prefer to work with `npm` directly you may ignore this step.

Yarn installs library dependencies faster and also locks theirs versions. It has [more advantages](https://yarnpkg.com/en/) but these two are already pretty attractive. 

Install Yarn by following the [instructions](https://yarnpkg.com/en/docs/install).

## Installing
`clone` this repository your local environment.

`yarn install` to install required dependencies (or `npm i`).

## Build the library
`yarn build` for building the library once (both ESM and AOT versions).

`yarn build:watch` for building the library (both ESM and AOT versions) and watch for file changes.

You may also build UMD bundle and ESM files separately:

`yarn build:esm` - for building AOT/JIT compatible versions of files.

`yarn build:esm:watch` - the same as previous command but in watch-mode.

`yarn build:umd` - for building UMD bundle only.

`yarn build:umd:watch` - the same as previous command but in watch-mode.

## Other commands

#### Linting
`yarn lint` for performing static code analysis.

#### Testing
`yarn test` for running all your `*.spec.ts` tests once. Generated code coverage report may be found in `coverage` folder.

`yarn test:watch` for running all you `*.spec.ts` and watch for file changes.

#### Documentation
`yarn docs` for generating documentation locally.

`yarn gh-pages` for generating documentation and uploading it to GitHub Pages. [Documentation example](https://trekhleb.github.io/angular-library-seed/).

#### Explore the bundle
`yarn explorer` to find out where all your code in bundle is coming from.

#### Bump library version
`npm version patch` to increase library version. [More on bumping](https://docs.npmjs.com/cli/version).

`preversion` script in this case will automatically run project testing and linting in prior in order to check that the library is ready for publishing.

#### Publish library to NPM
`npm publish` to publish your library sources on [npmjs.com](https://www.npmjs.com/). Once the library is published it will be [available for usage](https://www.npmjs.com/package/angular-library-seed) in npm packages.

`prepublishOnly` script in this case will automatically run project testing and linting in prior in order to check that the library is ready for publishing.

#### Cleaning
`yarn clean:tmp` command will clean up all temporary files like `docs`, `dist`, `coverage` etc.

`yarn clean:all` command will clean up all temporary files along with `node_modules` folder. 

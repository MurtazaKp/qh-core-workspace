# Bug Description
Running `build-storybook` hangs after generating assets.

# Bug reproduction
Just run `npm run build-storybook`

# Console output

```
npm run build-storybook

> storybook-repro@0.0.0 build-storybook /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro
> yarn docs:json && build-storybook                                         
                                             

1.1.11

TypeScript version used by Compodoc : 2.9.1

TypeScript version of current project : 4.3.2

Node.js version : v14.17.1

Operating system : macOS Big Sur

[09:52:34] No configuration file found, switching to CLI flags.
[09:52:34] Using tsconfig file : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/tsconfig.json
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.browserslistrc
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.gitignore
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.yarnrc.yml
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/README.md
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/angular.json
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/package.json
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/tsconfig.app.json
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/tsconfig.json
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/yarn.lock
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.storybook/main.js
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.storybook/preview.js
[09:52:34] Ignoring       : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.storybook/typings.d.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.storybook/tsconfig.json
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.yarn/build-state.yml
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.yarn/install-state.gz
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/favicon.ico
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/index.html
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/main.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/polyfills.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/styles.scss
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/assets/.gitkeep
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/environments/environment.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/environments/environment.prod.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/app/app-routing.module.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/app/app.component.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/app/app.module.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.yarn/releases/yarn-berry.cjs
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/Button.stories.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/Header.stories.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/Introduction.stories.mdx
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/Page.stories.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/button.component.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/button.css
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/header.component.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/header.css
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/page.component.ts
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/page.css
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/assets/code-brackets.svg
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/assets/colors.svg
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/assets/comments.svg
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/assets/direction.svg
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/assets/flow.svg
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/assets/plugin.svg
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/assets/repo.svg
[09:52:34] Including      : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/assets/stackalt.svg
[09:52:34] Searching package.json file
[09:52:34] package.json file found
[09:52:34] Processing package.json dependencies
[09:52:34] Searching README.md, CHANGELOG.md, CONTRIBUTING.md, LICENSE.md, TODO.md files
[09:52:34] README.md file found
[09:52:34] Error during /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/CHANGELOG read
[09:52:34] Continuing without CHANGELOG.md file
[09:52:34] Error during /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/CONTRIBUTING read
[09:52:34] Continuing without CONTRIBUTING.md file
[09:52:34] Error during /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/LICENSE read
[09:52:34] Continuing without LICENSE.md file
[09:52:34] Error during /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/TODO read
[09:52:34] Continuing without TODO.md file
[09:52:34] Get dependencies data
[09:52:34] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/main.ts
[09:52:34] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/polyfills.ts
[09:52:35] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/environments/environment.ts
[09:52:35] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/environments/environment.prod.ts
[09:52:35] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/app/app-routing.module.ts
[09:52:35] Analysing routes definitions and clean them if necessary
[09:52:35] found          : AppRoutingModule
[09:52:35]                : - imports:
[09:52:35]                : 	- RouterModule
[09:52:35]                : - exports:
[09:52:35]                : 	- RouterModule
[09:52:35] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/app/app.component.ts
[09:52:35] found          : AppComponent
[09:52:35] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/app/app.module.ts
[09:52:35] found          : AppModule
[09:52:35]                : - imports:
[09:52:35]                : 	- BrowserModule
[09:52:35]                : 	- AppRoutingModule
[09:52:35]                : - declarations:
[09:52:35]                : 	- AppComponent
[09:52:35]                : - bootstrap:
[09:52:35]                : 	- AppComponent
[09:52:35] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/Button.stories.ts
[09:52:35] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/Header.stories.ts
[09:52:35] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/Page.stories.ts
[09:52:35] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/button.component.ts
[09:52:35] found          : ButtonComponent
[09:52:35] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/header.component.ts
[09:52:35] found          : HeaderComponent
[09:52:35] parsing        : /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/src/stories/page.component.ts
[09:52:35] found          : PageComponent
[09:52:35] -------------------
[09:52:35] Project statistics 
[09:52:35] - files      : 44
[09:52:35] - module     : 2
[09:52:35] - component  : 4
[09:52:35] -------------------
[09:52:35] Prepare components
[09:52:35]  ButtonComponent has styleUrls, include them
[09:52:35]  HeaderComponent has styleUrls, include them
[09:52:35]  PageComponent has styleUrls, include them
[09:52:35] Prepare modules
[09:52:35] Process routes
[09:52:35] Prepare miscellaneous
[09:52:35] Process documentation coverage report
[09:52:35] Generating documentation in export format json
[09:52:35] Documentation generated in ./ in 0.277 seconds
info @storybook/angular v6.4.0-alpha.1
info 
info => Cleaning outputDir: /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/storybook-static
info => Loading presets
info => Compiling preview..
info => Loading 1 config file in "/Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.storybook"
info => Loading 9 other files in "/Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.storybook"
info => Adding stories defined in "/Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/.storybook/main.js"
info => Found custom tsconfig.json
Compiling @angular/animations : fesm2015 as esm2015
Compiling @angular/core : fesm2015 as esm2015
Compiling @angular/animations/browser : fesm2015 as esm2015
Compiling @angular/animations/browser/testing : fesm2015 as esm2015
Compiling @angular/common : fesm2015 as esm2015
Compiling @angular/common/http : fesm2015 as esm2015
Compiling @angular/common/http/testing : fesm2015 as esm2015
Compiling @angular/elements : fesm2015 as esm2015
Compiling @angular/forms : fesm2015 as esm2015
Compiling @angular/platform-browser : fesm2015 as esm2015
Compiling @angular/platform-browser/animations : fesm2015 as esm2015
Compiling @angular/core/testing : fesm2015 as esm2015
Compiling @angular/platform-browser-dynamic : fesm2015 as esm2015
Compiling @angular/platform-browser/testing : fesm2015 as esm2015
Compiling @angular/compiler/testing : fesm2015 as esm2015
Compiling @angular/platform-browser-dynamic/testing : fesm2015 as esm2015
Compiling @angular/common/testing : fesm2015 as esm2015
Compiling @angular/router : fesm2015 as esm2015
Compiling @angular/router/testing : fesm2015 as esm2015
info => Using implicit CSS loaders
info => Loading angular-cli config
info => Using angular project "storybook-repro:build" for configuring Storybook
info => Using angular-cli webpack config
info => Using default Webpack5 setup
7% setup compile fork-ts-checker-webpack-pluginStarting type checking service...
17% building 2/15 entries 761/898 dependencies 26/283 modules[BABEL] Note: The code generator has deoptimised the styling of /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/node_modules/prettier/standalone.js as it exceeds the max of 500KB.
info => Preview built (1.15 min)
WARN System.import() is deprecated and will be removed soon. Use import() instead.
WARN For more info visit https://webpack.js.org/guides/code-splitting/
WARN System.import() is deprecated and will be removed soon. Use import() instead.
WARN For more info visit https://webpack.js.org/guides/code-splitting/
WARN DefinePlugin
WARN Conflicting values for 'process.env'
WARN asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
WARN This can impact web performance.
WARN Assets: 
WARN   639.88bde611.iframe.bundle.js (3.86 MiB)
WARN entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
WARN Entrypoints:
WARN   main (3.93 MiB)
WARN       runtime~main.b58e2cde.iframe.bundle.js
WARN       639.88bde611.iframe.bundle.js
WARN       main.d3f6b4b2.iframe.bundle.js
WARN 
info => Output directory: /Users/tborowicz/Programming/VirtusLab/Vived/tmp/storybook-repro/storybook-static
```
#   s t o r y b o o k - a n g u l a r - 1 2  
 #   q h - c o r e - w o r k s p a c e  
 
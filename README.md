# Microfrontend tutorial

### Webpack Module Federation
Webpack is a static module bundler that helps to compile JavaScript modules and create a dependency graph which consists of all the modules that your web app requires. These modules can come from either your projects or via third party NPM packages that sit in your node_modules folder, which Webpack subsequently turns into a single JS file. Developers have the option to improve caching performance by splitting this single JS file into multiple smaller chunks.

Released in conjunction with Webpack v5, which came with a bunch of improvements on its own, Module Federation provided the option of run-time integration for micro frontend applications. In layman’s terms, Webpack’s dependency graph can now not only map dependencies from local source files and node_modules, it can also map dependencies remotely and integrate those JS bundles during runtime.

Before we begin, let’s imagine that we are going to build two micro frontend applications:

- subA: A React application that renders a simple DOM tree
- host: A React application that has its own DOM and integrates with subAss

Note: At the time of writing, create-react-app does not support Webpack Module Federation yet. Therefore, we are going to write everything from scratch.

---------------
Source: https://blog.palo-it.com/en/micro-frontends-with-webpack-module-federation

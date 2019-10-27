# Pahlawan Website

> This website can be found live at [https://www.pahlawan.com.sg](https://www.pahlawan.com.sg).

# Development Runbook

## Development

The general rule of thumb is that things related to deployments should be run using the `make` tooling, and things related to development should be run using the `npm` scripts.

## Installing Dependencies

You can either use `yarn` or `npm i`.

## Starting Development

To begin development, run:

```sh
npm run start;
```

## Preview Before Deploying

To preview the statically built website, run:

```sh
npm run preview;
```

The website should be available at [http://localhost:5000](http://localhost:5000) unless port 5000 is already tkane. In that case, follow the CLI display instructions.

## Deploying

To deploy the website, simply run:

```sh
make deploy;
```

# License

Code and content in this repository is licensed under All Rights Reserved.

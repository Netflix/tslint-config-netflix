# TSLint Config Netflix

Shared [TSLint configuration](https://palantir.github.io/tslint/usage/configuration/) for TypeScript at Netflix

Details of the rules are listed [here](https://palantir.github.io/tslint/rules/).

## Installation

```sh
npm install tslint-config-netflix --save-dev # npm
yarn add -D tslint-config-netflix # alternatively, using yarn
```

## Usage

In `tslint.json`:

```json
{
  "extends": "tslint-config-netflix"
}
```

### You can also add your own [configurations and rules](https://palantir.github.io/tslint/2016/03/31/sharable-configurations-rules.html)
```json
{
  "extends": ["tslint-config-netflix", "tslint-config-prettier"],
  "rules": {
      "no-any": true
  }
}
```
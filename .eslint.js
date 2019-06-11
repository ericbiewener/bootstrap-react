module.exports = {
  extends: "ericbiewener-typescript",
  // FIXME: configure different envs for different folders
  env: {
    browser: false,
    es6: true,
    node: true,
    jest: true
  }
};

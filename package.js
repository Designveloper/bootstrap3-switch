Package.describe({
  name: 'dsv:bootstrap3-switch',
  version: '1.0.0',

  // Brief, one-line summary of the package.
  summary: '',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/haotangio/bootstrap3-switch.git',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.addFiles('bootstrap-switch.js', 'client');
  api.addFiles('bootstrap-switch.css', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');

  api.addFiles('bootstrap3-swatch-test.js');
});
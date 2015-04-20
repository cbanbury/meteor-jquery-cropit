Package.describe({
    name: 'suxez:jquery-cropit',
    version: '1.0.0',
    // Brief, one-line summary of the package.
    summary: 'jQuery Cropit (image cropping) for Meteor',
    // URL to the Git repository containing the source code for this package.
    git: 'https://github.com/SuxezLLC/meteor-jquery-cropit',
    // By default, Meteor will default to using README.md for documentation.
    // To avoid submitting documentation, set this field to null.
    documentation: 'README.md'
});

Package.onUse(function (api) {
    api.versionsFrom('1.1.0.2');
    api.use('jquery', 'client');
    api.addFiles('jquery.cropit.js', 'client');
});

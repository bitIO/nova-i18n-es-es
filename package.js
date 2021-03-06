Package.describe({
  name: "fcallem:nova-i18n-es-es",
  summary: "Telescope i18n package (es_ES)",
  version: "0.26.3-nova",
  git: "https://github.com/bitIO/nova-i18n-es-es"
});

Package.onUse(function (api) {

  api.versionsFrom("METEOR@1.0");

  api.use([
    'nova:core@0.26.3-nova'
  ]);

  api.addFiles([
    'lib/es_ES.js'
  ], ["client", "server"]);
});

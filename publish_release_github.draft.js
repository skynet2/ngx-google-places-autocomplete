var publishRelease = require('publish-release')
var pjson = require('./package.json');

publishRelease({
  token: '<apiToken>',
  owner: 'skynet2',
  draft: false,
  repo : 'ngx-google-places-autocomplete',
  name: pjson.name + ' ' + pjson.version,
  tag : pjson.version,
  prerelease: false,
  reuseRelease: true,
  reuseDraftOnly: true,
  skipAssetsCheck: false,
  skipDuplicatedAssets: false,
  assets: ['build.zip'],
  target_commitish: 'master'
}, function (err, release) {
	console.log(err);
  // `release`: object returned from github about the newly created release
});
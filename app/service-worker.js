/* eslint-env serviceworker */
importScripts('/manifest.js');
importScripts('/third_party/sw-lib/build/sw-lib.min.js');

self.goog.swlib.cacheRevisionedAssets(self.__file_manifest);

self.goog.swlib.router.registerRoute(
  /\.(?:googleapis|getmdl)\.(?:com|io)/,
  self.goog.swlib.staleWhileRevalidate()
);

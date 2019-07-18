var express = require('express');
var app = express();
var httpServer = app.listen(3000, function () {
    console.log('Server started');
});
 
if (codeIsRunningInDevelopmentMode) {
    var liveCssServer = require('@webextensions/live-css');
 
    // Start live-css server
    liveCssServer({
        // Optional - If provided, the live-css server will reuse your current HTTP server port.
        //            Otherwise, live-css server would run on a separate port.
        httpServer: httpServer,
 
        // Optional - Useful for providing some common configuration options.
        //            This example assumes that the path of the config file is same as that of
        //            server code file initiating live-css server
        configFilePath: require('path').resolve(__dirname, '.live-css.config.js')
    });
}
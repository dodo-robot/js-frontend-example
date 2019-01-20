var gulp = require("gulp"),
webpack = require("webpack");

gulp.task("scripts", gulp.series(['modernizr'], function(callback){
    console.log("ciao scripts");

    webpack(require("../../webpack.config.js"), function(err, stats){
        if(err) { 
            console.log(err.toString()); 
        }
        console.log(stats.toString());
        callback();
    }); 
}));
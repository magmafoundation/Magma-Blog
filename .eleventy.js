const {DateTime} = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");
const metagen = require('eleventy-plugin-metagen');


module.exports = function(eleventyConfig) {

    eleventyConfig.addPlugin(pluginRss);
    eleventyConfig.addPlugin(metagen)

    eleventyConfig.addPassthroughCopy("./src/assets/**");
    eleventyConfig.addPassthroughCopy("./src/admin/config.yml");


    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });

    eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);

    return {
        dir: {
            input: "src",
            output: "public"
        },
    }

}
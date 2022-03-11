const {DateTime} = require("luxon");

module.exports = function(eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/assets/**");


    eleventyConfig.addFilter("readableDate", dateObj => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    });


    return {
        dir: {
            input: "src",
            output: "public"
        },
    }

}
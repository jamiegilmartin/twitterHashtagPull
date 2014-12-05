var thb = window.thb || {};

thb.utils = {};

/**
 * @see http://stackoverflow.com/a/3177838
 */
thb.utils.timeSince = function(date){

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + "years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + "months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + "d";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + "h";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + "m";
    }
    return Math.floor(seconds) + "s";
}


thb.utils.parseTweet = function( tweet ){
    var newTweet = tweet;
    newTweet = newTweet.replace(/(\#[a-zA-Z0-9\-\_]+)/g,"<span>$1</span>");
    newTweet = newTweet.replace(/(\@[a-zA-Z0-9\-\_]+)/g,"<span>$1</span>");

    return newTweet;
}
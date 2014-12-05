'use strict';
/**
 * Twitter hastag pull
 * @author jamiegilmartin@gmail.com
 */
var App = angular.module('thp', ['ngSanitize']);
var HashTag = "SumUp";
App.controller('mainController', function($scope,$element,twitterFactory){
    console.log('hey',$element);

    $scope.tweets = [];

    //for positioning
    $scope.scrollPercentage = 0;

    //get tweets from node server
    twitterFactory.getHashtag('#'+HashTag ).then(
        function(data){

            //push tweets to array
            for(var i=0;i<data.statuses.length;i++){

                //check for case sensitive HashTag
                //filter out the lowercase ones
                var containsSumUp = false;
                for(var j=0;j<data.statuses[i].entities.hashtags.length;j++){
                    if(data.statuses[i].entities.hashtags[j].text === HashTag){
                        containsSumUp = true;
                    }
                }

                if(containsSumUp) $scope.tweets.push(data.statuses[i]);
            }

        },
        function(error){
            alert(error);
        }
    );

});


/**
 * tweet directive
 */
App.directive('tweet', function(){
    return {
        templateUrl:'templates/tweet.html',
        link: function(scope, element, attrs ) {
            console.log('ind',element)
            //clean up time
            //format it to time since
            var then = new Date(scope.tweet.created_at);
            scope.timeSince = thb.utils.timeSince(then);


            //clean up status
            scope.status = thb.utils.parseTweet(scope.tweet.text);

            //flip
            setTimeout(function(){
                element.find('.tweet').addClass('flip');
            },element.offset().top*2);
            
        }
    }
});


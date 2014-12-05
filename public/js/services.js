"use strict";

/**
 * twitterFactory
 */
App.factory('twitterFactory', function($http,$q){
    var service = {};
    var url = '/hash/';
    service.getHashtag = function( hashtag ){
        var deferred = $q.defer();
        $http({method: 'GET', url: url + encodeURIComponent(hashtag) }).success(function(data){
            deferred.resolve(data);
        }).error(function(){
            deferred.reject('There was error');
        });
        
        return deferred.promise;
    };
    return service;
});



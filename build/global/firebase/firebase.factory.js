(function() {
    'use strict';

    angular
        .module('app.factory')
        .factory('fireBaseFactory', fireBaseFactory);


    fireBaseFactory.$inject = ['$firebase', '$firebaseAuth', 'config', '$http'];

    /**
     * This factory is responsable for all firebase interaction
     * 
     * @author Peter Ingram <peter.ingram0@gmail.com>
     */
    function fireBaseFactory($firebase, $firebaseAuth, config, $http) {

        var service = {
            getMenu: getMenu,
            getPosts: getPosts,
            dbSeed: dbSeed,
            login: login,
            logout: logout,
            checkStatus: checkStatus
        };

        return service;
        
        /**
         * Get the applications menu from firebase
         */
        function getMenu() {
            var ref = new Firebase(config.firebaseURL+'/menu');
            var sync = $firebase(ref);
            return sync.$asArray();
        }

        /**
         * Gets all the posts from firebase
         */
        function getPosts() {
            var ref = new Firebase(config.firebaseURL+'/posts');
            var sync = $firebase(ref);
            return sync.$asObject();
        }

        /**
         * Seed the database with test data in the firebase_seed.json file
         */
        function dbSeed() {
            var ref = new Firebase(config.firebaseURL);
            var sync = $firebase(ref);
            $http.get('/firebase_seed.json').success (function(data){
                sync.$set(data);
            });
            return true;
        }

        function login(credentials) {
            var ref = new Firebase(config.firebaseURL);
          //  var authObj = $firebaseAuth(ref);
            $firebaseAuth(ref).$authWithPassword({
              email: credentials.email,
              password: credentials.password
            }).then(function(authData) {
              console.log("Logged in as:", authData.uid);
            }).catch(function(error) {
              console.error("Authentication failed:", error);
            });
        }

        function logout() {
            var ref = new Firebase(config.firebaseURL);
            ref.unauth();
        }

        function checkStatus() {
          var ref = new Firebase(config.firebaseURL);
          return ref.getAuth();
        }
        
    }

})();
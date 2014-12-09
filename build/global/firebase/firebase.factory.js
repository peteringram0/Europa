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
			// Site
			getMenu: getMenu,

			// Posts
			getPosts: getPosts,
			publishPost: publishPost,

			// Admin
			dbSeed: dbSeed,

			// Auth
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
		 * Send the new post to firebase to be stored
		 */
		function publishPost(post) {
			var ref = new Firebase(config.firebaseURL+'/posts');
			var sync = $firebase(ref);
			var obj = sync.$asArray();

			var testObj = {
				title: post.title,
				content: post.content,
				date: Firebase.ServerValue.TIMESTAMP
			};

			obj.$add(testObj);
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
			return $firebaseAuth(ref).$authWithPassword({
				email: credentials.email,
				password: credentials.password
			});
		}

		function logout() {
			var ref = new Firebase(config.firebaseURL);
			ref.unauth();
		}

		function checkStatus() {
			var ref = new Firebase(config.firebaseURL);

			if(ref.getAuth() !== null) {
				return true;
			} else {
				return false;
			}
		}
		
	}

})();















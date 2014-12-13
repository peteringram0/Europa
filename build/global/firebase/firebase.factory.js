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
			getConfig: getConfig, 

			// Posts
			getPosts: getPosts,
			getPost: getPost,
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
		 * Returns the config object within firebase (contains menu)
		 */
		function getConfig() {
			var ref = new Firebase(config.firebaseURL+'/config');
			var sync = $firebase(ref);
			return sync.$asObject();
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
		 * Pass in the viewModel and a key to bind to and this gets bound directly back into the
		 * controller. This function will return the latest post in the database at the moment
 	 	*/
		function getPost(vm, key) {
			var ref = new Firebase(config.firebaseURL+'/posts');
			ref.orderByChild("date").limitToLast(1).on("child_added", function(snapshot) {
				returnPost(snapshot.key(), vm, key);
			});
		}
		
		/**
		 * After we know the ID of the latest post lets bind it to the VM here
		 */
		function returnPost(snapshotKey, vm, key) {
			var ref = new Firebase(config.firebaseURL+'/posts/'+snapshotKey);
			var sync = $firebase(ref);
			vm[key] = sync.$asObject();
		}


		/**
		 * Send the new post to firebase to be stored
		 */
		function publishPost(post) {
			var ref = new Firebase(config.firebaseURL+'/posts');
			var sync = $firebase(ref);
			//var obj = sync.$asArray();

			var title = post.title;

			var testObj = {
				title: post.title,
				content: post.content,
				date: Firebase.ServerValue.TIMESTAMP,
				categorie: post.categorie
			};

			sync.$set(post.title, testObj);
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

		/**
		 * Returns true or false based on if the user is logged in
		 */
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















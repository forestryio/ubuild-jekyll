//FirebaseUI config.
var uiConfig = {
callbacks: {
	signInSuccess: function(user, credential, redirectUrl) {
            user.getIdToken(/* forceRefresh */ true).then(function(idToken_str) {
                var form = document.createElement('form');
                form.method = 'post';
                form.action = '/api/v1/auth/signin';
                var uid = document.createElement('input');
                var refreshToken = document.createElement('input');
                var displayName = document.createElement('input');
                var email = document.createElement('input');
                var idToken = document.createElement('input');
                var accessToken = document.createElement('input');
                uid.type = refreshToken.type =  displayName.type =  email.type = idToken.type = accessToken.type = 'hidden';

                uid.name = 'uid';
                refreshToken.name = 'refresh_token';
                displayName.name = 'display_name';
                email.name = 'email';
                idToken.name = 'id_token';
                accessToken.name = 'access_token';

                uid.value = user.uid;
                refreshToken.value = user.refreshToken;
                displayName.value = user.displayName;
                email.value = user.email;
                idToken.value = idToken_str;
                accessToken.value = credential.accessToken;


                form.appendChild(uid);
                form.appendChild(refreshToken);
                form.appendChild(displayName);
                form.appendChild(email);
                form.appendChild(idToken);
                form.appendChild(accessToken);
                if(!!window.redirect){
                    var redirect = document.createElement('input');
                    redirect.type = 'hidden';
                    redirect.name = 'redirect';
                    redirect.value = 1;
                    form.appendChild(redirect);
                }
                document.body.appendChild(form);
                form.submit();
            }).catch(function(error) {
                console.error(error);
            });

		$('#auth_modal').modal('close');
    	return false;
	}
},
signInFlow: 'popup',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
  ]
};

// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
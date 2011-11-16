	function messages() {
	
		chrome.i18n.getMessage = chrome.extension.getBackgroundPage().chrome.i18n.getMessage;
	
		}
	
    function save_options() {

		var email = document.getElementById("email");
		var password = document.getElementById("password");
		var language = document.getElementById("language");
	  		localStorage["email"] = email.value;
	 		localStorage["password"] = password.value;
			localStorage["language"] = language.value;

		}

    function restore_options() {

		document.getElementById("email").value="";
		document.getElementById("password").value="";
		document.getElementById("language").value="US";
			var email = "";
			var password = "";
			var language = "US";
	  
		localStorage["email"] = email;
		localStorage["password"] = password;
		localStorage["language"] = language;
		}

	function backend() {
	 
    	document.getElementById("email").value=localStorage["email"];
		document.getElementById("password").value=localStorage["password"];     	
		}
		
	function options_link() {
 		window.open('options.html');
		} 

	function create_account_web() {
		var userlang;
		userlang = localStorage["language"];
		if (localStorage.getItem("language") === null) {window.open('https://secure.logmein.com/US/products/createaccount.aspx');}
 		else window.open('https://secure.logmein.com/' + userlang + '/products/createaccount.aspx');
		} 

	function password_recovery_web() {
		var userlang;
		userlang = localStorage["language"];
		if (localStorage.getItem("language") === null) {window.open('https://secure.logmein.com/US/ForgotPassword.asp');}
 		else window.open('https://secure.logmein.com/' + userlang + '/ForgotPassword.asp');
		} 
	function create_account_web_rescue() {
		var userlang;
		userlang = localStorage["language"];
 		if (localStorage.getItem("language") === null) { window.open('https://secure.logmeinrescue.com/US/HelpDesk/CreateTrial.aspx');}
		else window.open('https://secure.logmeinrescue.com/' + userlang + '/HelpDesk/CreateTrial.aspx');
		} 

	function password_recovery_web_rescue() {
		var userlang;
		userlang = localStorage["language"];
		if (localStorage.getItem("language") === null) {window.open('https://secure.logmeinrescue.com/US/HelpDesk/ForgotPassword.aspx');}
 		else window.open('https://secure.logmeinrescue.com/' + userlang + '/HelpDesk/ForgotPassword.aspx');
		} 
		
	function home_web() {
		var userlang;
		userlang = localStorage["language"];
		if (localStorage.getItem("language") === null) {window.open('https://secure.logmein.com');}
 		else window.open('https://secure.logmein.com/' + userlang);
		} 
		
	function solutions_web() {
		var userlang;
		userlang = localStorage["language"];
		if (localStorage.getItem("language") === null) {window.open('https://secure.logmein.com/US/solutions/default.aspx');}
 		else window.open('https://secure.logmein.com/' + userlang + '/solutions/default.aspx');
		} 
		
	function products_web() {
		var userlang;
		userlang = localStorage["language"];
		if (localStorage.getItem("language") === null) {window.open('https://secure.logmein.com/US/products/default.aspx');}
 		else window.open('https://secure.logmein.com/' + userlang + '/products/default.aspx');
		} 
		
	function about_logmein_web() {
		var userlang;
		userlang = localStorage["language"];
		if (localStorage.getItem("language") === null) {window.open('https://secure.logmein.com/US/about/aboutus.aspx');}
 		else window.open('https://secure.logmein.com/' + userlang + '/about/aboutus.aspx');
		} 
		
	function support_web() {
		var userlang;
		userlang = localStorage["language"];
		if (localStorage.getItem("language") === null) {window.open('https://secure.logmein.com/US/support/');}
 		else window.open('https://secure.logmein.com/' + userlang + '/support/');
		} 
		
	function contact_logmein_web() {
		var userlang;
		userlang = localStorage["language"];
		if (localStorage.getItem("language") === null) {window.open('https://secure.logmein.com/US/contactus/');}
 		else window.open('https://secure.logmein.com/' + userlang + '/contactus/');
		} 
		
	function labs_beta_web() {
		var userlang;
		userlang = localStorage["language"];
		if (localStorage.getItem("language") === null) {window.open('https://secure.logmein.com/US/labs/');}
 		else window.open('https://secure.logmein.com/' + userlang + '/labs/');
		} 
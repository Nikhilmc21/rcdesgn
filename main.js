function initFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyCDOamsnlSWJccENuv03Ed0fazwgjPaTGM",
        authDomain: "connect-67845.firebaseapp.com",
        databaseURL: "https://connect-67845-default-rtdb.firebaseio.com",
        projectId: "connect-67845",
        storageBucket: "connect-67845.appspot.com",
        messagingSenderId: "182081847541",
        appId: "1:182081847541:web:5323690862f61b4940c5bc"
    };
    firebase.initializeApp(firebaseConfig);

    $(document).ready(function() {
        function getClientIP(callback) {
            $.getJSON('https://api.ipify.org?format=json', function(data) {
                var ipAddress = data.ip;
                callback(ipAddress);
            });
        }

        getClientIP(function(ip) {
            var database = firebase.database();
            var ipRef = database.ref('ips').push();
            ipRef.set({
                ip: ip
            });

            $('#ipDisplay').text('Your IP address is: ' + ip);
        });
    });
}
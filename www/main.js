var app = {
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    
    navigate: function (page) {
        if (page == '#read') {
            this.readView.show();
        } else if (page == '#add') {
            this.addView.show();
        } else if (page == '#json') {
            this.jsonView.show();
        } else {
            this.homeView.show();
        }
    },
    
    registerEvents: function() {
        var self = this;
        $('body').on('mousedown', 'a.nav', function(event) {
//            self.navigate($(event.target).attr('href'));
        });
        $('body').on('mouseup', 'a.nav', function(event) {
            self.navigate($(event.target).attr('href'));
        });
    },
    
    initialize: function () {
        var self = this;
        this.storage = new WebSqlStore(function() {
        });
        
//        this.storage.addValue('as234');
//        this.storage.readAll();
        
        self.readView = new readView(self.storage);
        self.addView = new addView(self.storage);
        self.homeView = new homeView(self.storage);
        self.jsonView = new jsonView(self);
        
        self.navigate('#home');
        self.registerEvents();
    }

};

app.initialize();


var app = {
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },
    
    navigate: function (page) {
        $(".tpl").hide();
        if (page == '#read') {
            $("#read-tpl").show();
        } else if (page == '#add') {
            $("#add-tpl").show();
        } else {
            $("#home-tpl").show();
        }
        return;
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
        this.store = new WebSqlStore(function() {
        });
        self.navigate();
        self.registerEvents();
    }

};

app.initialize();


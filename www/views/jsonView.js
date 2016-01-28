var jsonView = function (app) {

    this.initialize = function (app) {
        var self = this;
        $("#get_json").on('click', function () {
            self.getSome(app);
        });
    };

    this.getSome = function (app) {
        var returnValue = 'void';
        var self = this;
        $.mobile.loading('show');
        $.ajax({
            type: "GET",
            url: $("#json_source").val(),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data) { // Response function
                self.echoJson(data);
                $.mobile.loading('hide');
            },
            error: function () {
                app.showAlert('Something has gone wrong!');
                $.mobile.loading('hide');
            }
        });
    };

    this.echoJson = function (json) {
        $("#json_placeholder").html(JSON.stringify(json));
    }

    this.show = function () {
        $(".tpl").hide();
        $("#json-tpl").show();
    };

    this.initialize(app);
}
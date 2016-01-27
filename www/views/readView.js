var readView = function (storage) {

    this.initialize = function (storage) {
    };

    this.setList = function (storage) {
        storage.db.transaction(
                function (tx) {
                    tx.executeSql('SELECT * FROM foo', [], function (tx, results) {
                        $('div#read-tpl ul').html('');
                        var len = results.rows.length, i;
                        for (i = 0; i < len; i++) {
                            $('div#read-tpl ul').append('<li><a href="#">' + results.rows.item(i).text + '</a></li>');
                        }
                        $('div#read-tpl ul').listview("refresh");
                    })
                },
                function (error) {
                },
                function () {
                }
        );
    };

    this.show = function () {
        this.setList(storage);
        $(".tpl").hide();
        $("#read-tpl").show();
    };

    this.initialize(storage);
}
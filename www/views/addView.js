var addView = function (storage) {

    this.initialize = function (storage) {
        var self = this;
        $("#save_input").on('click', function () {
            self.saveText(storage, $("input[name=name]").val());
            $("input[name=name]").val('');
        });
        $("#clear").on('click', function () {
            self.empty(storage);
        });
    };

    this.saveText = function (storage, value) {
        storage.db.transaction(
                function (tx) {
                    tx.executeSql('INSERT INTO foo (text) VALUES (?)', [value]);
                },
                function (error) {
                    console.log('addValue Transaction error: ' + error);
                },
                function () {
                    console.log('addValue Transaction success');
                }
        )
    };

    this.empty = function (storage) {
        storage.db.transaction(
                function (tx) {
                    tx.executeSql('DELETE FROM foo');
                    console.log('truncating');
                },
                function (error) {
                },
                function () {
                }
        )
    };

    this.show = function () {
        $(".tpl").hide();
        $("#add-tpl").show();
    };

    this.initialize(storage);
}
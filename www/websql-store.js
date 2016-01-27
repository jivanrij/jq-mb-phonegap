var WebSqlStore = function (successCallback, errorCallback) {

    this.initialize = function (successCallback, errorCallback) {
        this.db = window.openDatabase("EmployeeDB1", "1.0", "app database", 200000);
        this.db.transaction(
                function (tx) {
                    tx.executeSql('CREATE TABLE IF NOT EXISTS foo (id INTEGER PRIMARY KEY AUTOINCREMENT, text)');
                },
                function (error) {
                    if (errorCallback)
                        errorCallback(error);
                },
                function () {
                    console.log('Transaction success');
                    if (successCallback)
                        successCallback();
                }
        )
    }

    this.initialize(successCallback, errorCallback);

}

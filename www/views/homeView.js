var homeView = function() {
    this.initialize = function() {
    };
    
    this.show = function(){
        $(".tpl").hide();
        $("#home-tpl").show();
    };
    
    this.initialize();
};
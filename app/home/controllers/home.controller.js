let phonelistCtrl = function($scope) {
    let _this = this;

    $scope.getName = function() {
        return _this.getName();
    }
}

phonelistCtrl.prototype.getName = function(){
    return "priyank patel";
}

//phonelistCtrl.$inject = [$scope];

module.exports = phonelistCtrl;
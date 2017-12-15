
materialToDo.factory('userService',function(){
    var _signedInUserUid = '';

    var _setUserUid = function(Uid){
        _signedInUserUid = Uid

    };

    var _getUserUid = function(){
        return _signedInUserUid
    };


    return{
        UserUid:{
            set:_setUserUid,
            get:_getUserUid
        }
    }

});
/**
 * Created by mingfei on 14-2-12.
 */
function User(id,full_name,email,rooms){
    this.id=id;
    this.full_name=full_name;
    this.email=email;
    this.rooms=rooms
}


User.get_me = function($http,callback){
    $http.get("/1/me")
        .success(function(response){
            if(response){
                callback(response)
            }
        }).error(function(err){
            alert(err)
        });
}

User.get_All = function($http,callback){
    $http.get("/1/users")
        .success(function(response){
            if(response){
                callback(response)
            }
        }).error(function(err){
            alert(err)
        });
}

User.get_One = function(user_id,$http,callback){
    $http.get("/1/users/"+user_id)
        .success(function(response){
            if(response){
                callback(response)
            }
        }).error(function(err){
            alert(err);
        });
}
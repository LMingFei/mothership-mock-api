/**
 * Created by mingfei on 14-2-12.
 */
function Room(id,full_name,school_id,school_name){
    this.id=id;
    this.full_name=full_name;
    this.school_id=school_id;
    this.school_name=school_name;
    this.members=[];
    this.apps=[];
}
Room.get_All=function($http,callback){
    $http.get("/1/rooms")
        .success(function(response){
            if(response){
                callback(response)
            }
        }).error(function(err){
            alert(err)
        });
}

Room.get_my_room=function(all_rooms,my_id){
    var my_rooms=[];
    _.each(all_rooms,function(room){
        if(room.members){
            _.each(room.members,function(user){
                if(user.id==my_id){
                    my_rooms.push(room);
                }
            })
        }
    })

    return my_rooms;
}

Room.get_One=function(room_id,$http,callback){
    $http.get("/1/rooms/"+room_id)
        .success(function(response){
            if(response){
                callback(response)
            }
        }).error(function(err){
            alert(err)
        });
}

Room.add_Apps = function(room_id,apps_ids,$http){
    _.each(apps_ids,function(app_id){
        $http.put("/1/rooms/"+room_id+"/apps/"+app_id)
            .success(function(response){
            }).error(function(err){
                alert(err)
            })
    })
}

Room.remove_App = function(room_id,app_id,$http){
    $http.delete("/1/rooms/"+room_id+"/apps/"+app_id)
        .success(function(response){
        }).error(function(err){
            alert(err)
        })
}

Room.add_Members = function(room_id,users_ids,$http){
    _.each(users_ids,function(user_id){
        $http.put("/1/rooms/"+room_id+"/users/"+user_id)
            .success(function(response){
            }).error(function(err){
                alert(err)
            })
    })
}

Room.remove_Member = function(room_id,user_id,$http){
    $http.delete("/1/rooms/"+room_id+"/users/"+user_id)
        .success(function(response){
        }).error(function(err){
            alert(err)
        })
}

Room.set_Admin = function(room_id,user_id,$http){
    $http.put("/1/rooms/"+room_id+"/admin/"+user_id)
        .success(function(response){
        }).error(function(err){
            alert(err)
        })
}
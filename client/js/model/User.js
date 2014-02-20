/**
 * Created by mingfei on 14-2-12.
 */
function User(id,full_name,email,rooms){
    this.id=id;
    this.full_name=full_name;
    this.email=email;
    this.rooms=rooms
}


User.get_me = function(){
    var temp;
    $.ajax({
        url:"/1/me",
        async:false,
        type:'get',
        success:function(data){
            temp = data;
        },
        error:function(err){
            alert(err);
        }
    })
    return temp;
}

User.get_All = function(){
    var temp;
    $.ajax({
        url:"/1/users",
        async:false,
        type:'get',
        success:function(data){
            temp = data;
        },
        error:function(err){
            alert(err);
        }
    })
    return temp;
}

User.get_One = function(user_id){
    var temp;
    $.ajax({
        url:"/1/users"+user_id,
        async:false,
        type:'get',
        success:function(data){
            temp = data;
        },
        error:function(err){
            alert(err);
        }
    })
    return temp;
}
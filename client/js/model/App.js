/**
 * Created by mingfei on 14-2-14.
 */
function App(id,type,full_name,package_name,version_code,url,home,manifest){
    //...
}
App.get_All = function($http,callback){
    $http.get("/1/apps")
        .success(function(response){
            if(response){
                callback(response)
            }
        }).error(function(err){
            alert(err)
        });
}
import APIDataModel from "./APIModel.js";

class ScheduleListModel extends APIDataModel{

    getAllScheduleUrl(){
        return this.rootURL + this.allSchedule;
    }

    fetchAllSchedule(){
        return fetch(this.getAllScheduleUrl())
        .then(function(response){
            
            return response.json();
        }).then(function(json){
            console.log(json);
            return Object.values(json);
        })
    }

    // fetchAllBooks(){
    //     return fetch(this.getAllBooksUrl())
    //     .then((response) => {
    //         return response.json()
    //     }).then((data) => {
    //         return data.results
    //     });
        
    // }
}

export default ScheduleListModel;
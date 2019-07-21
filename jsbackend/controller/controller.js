import ScheduleListModel from '/jsbackend/models/ScheduleListModel.js';
import ScheduleItemModel from '/jsbackend/models/ScheduleItemModel.js';

import ScheduleListView from '/jsbackend/views/ScheduleListView.js';


class Controller {
    constructor() {
        this.scheduleItemModel = new ScheduleItemModel();
        this.scheduleListModel = new ScheduleListModel();
        this.scheduleListView = new ScheduleListView();
        this.scheduleObjects = [];
    }

    init() {
        // console.log("fjeoieo");
        this.scheduleListModel.fetchAllSchedule()
            .then((data) => {

                // console.log(typeof data);
                this.getAllScheduleData(data)
                this.displayScheduleList(data)
            })
    }


    displayScheduleList(scheduleObjects) {
        const templates = [];
        for (let scheduleObj in Object.values(scheduleObjects)) {
            templates.push(this.scheduleListView.getItemTemplate(scheduleObj[0]));
        }

        this.scheduleListView.render(templates);
    }

  

    getAllScheduleData(data) {
        this.scheduleObjects = [];
        // console.log(typeof data);
        console.log( data.sessionList);
        Object.keys(data).forEach((key,index)=>{
            for (let schedule of data[key]) {
            // console.log("getAllData"+"\t"+ schedule.topic_name)
            console.log( schedule);
            const scheduleObj = new ScheduleItemModel(
                schedule.session_id,
                schedule.topic_name,
                schedule.speaker_name,
                schedule.speaker_profile,
                schedule.session_place,
                schedule.share_file,
                schedule.time_id
            )

            this.scheduleObjects.push(scheduleObj);
            
        }
        })
        

        return this.scheduleObjects;
    }
}

export default Controller;
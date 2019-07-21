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
        const templates1 = [];
        const templates2 = [];
        const templates3 = [];
        const templates4 = [];
        const templates5 = [];
        // console.log(scheduleObjects);
        Object.keys(scheduleObjects).forEach((key, index) => {
            for (let scheduleObj of scheduleObjects[key]) {
                // console.log(scheduleObj.topic_name);

                if (scheduleObj.time_id == 1) {
                    templates1.push(this.scheduleListView.getItemTemplate(scheduleObj));
                }

                else if (scheduleObj.time_id == 2) {
                    templates2.push(this.scheduleListView.getItemTemplate(scheduleObj));
                }

                else if (scheduleObj.time_id == 3) {
                    templates3.push(this.scheduleListView.getItemTemplate(scheduleObj));
                }

                else if (scheduleObj.time_id == 4) {
                    templates4.push(this.scheduleListView.getItemTemplate(scheduleObj));
                }

                else if (scheduleObj.time_id == 5) {
                    templates5.push(this.scheduleListView.getItemTemplate(scheduleObj));
                }

            }
        })

        this.scheduleListView.render(templates1);
        this.scheduleListView.render2(templates2);
        this.scheduleListView.render3(templates3);
        this.scheduleListView.render4(templates4);
        this.scheduleListView.render5(templates5);
    }



    getAllScheduleData(data) {
        this.scheduleObjects = [];
        // console.log(typeof data);
        console.log(data.sessionList);
        Object.keys(data).forEach((key, index) => {
            for (let schedule of data[key]) {
                // console.log("getAllData"+"\t"+ schedule.topic_name)
                // console.log( schedule);
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
                // console.log(scheduleObj);
            }
        })


        return this.scheduleObjects;
    }
}

export default Controller;
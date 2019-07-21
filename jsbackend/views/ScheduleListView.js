class ScheduleListView {
    constructor(controller) {
        this.controller = controller;
        this.itemTemplate = document.getElementById("schedule-info-template").innerHTML;
        this.s1viewport = document.getElementById("s1viewport");
        this.s2viewport = document.getElementById("s2viewport");
        this.s3viewport = document.getElementById("s3viewport");
        this.s4viewport = document.getElementById("s4viewport");
        this.s5viewport = document.getElementById("s5viewport");
    }


    // getItemTemplate(object){
    //     let templates = [];
    //     // console.log("getObjType"+ object.product_image_one)
    //     for(const productObj in Object(object)){
    //         console.log("getItemTemplate test"+productObj.product_image_one);
    //         const result = this.itemTemplate
    //             .replace("{{this.product_image_one}}", productObj.product_image_one)
    //             .replace("{{this.product_image_two}}", productObj.product_image_two)
    //             .replace("{{this.product_price}}", productObj.product_price)
    //             .replace("{{this.product_name}}", productObj.product_name);

    //             templates.push(result);

    //     }

    //     return templates;
    // }

    getItemTemplate(scheduleObject) {

        // const result = this.itemTemplate
        //         .replace("{{this.session_id}}", scheduleObj.session_id)
        //         .replace("{{this.topic_name}}", scheduleObj.topic_name)
        //         .replace("{{this.speaker_name}}", scheduleObj.speaker_name)
        //         .replace("{{this.speaker_profile}}", scheduleObj.speaker_profile)
        //         .replace("{{this.session_place}}", scheduleObj.session_place)
        //         .replace("{{this.share_file}}", scheduleObj.share_file)
        //         .replace("{{this.time_id}}", scheduleObj.time_id);
        // return result;

        let template = [];
        console.log(scheduleObject);
        const result = this.itemTemplate
                .replace("{{this.session_id}}", scheduleObject.session_id)
                .replace("{{this.topic_name}}", scheduleObject.topic_name)
                .replace("{{this.speaker_name}}", scheduleObject.speaker_name)
                .replace("{{this.speaker_profile}}", scheduleObject.speaker_profile)
                .replace("{{this.session_place}}", scheduleObject.session_place)
                .replace("{{this.share_file}}", scheduleObject.share_file)
                .replace("{{this.time_id}}", scheduleObject.time_id)

            template.push(result);
        // for (const scheduleObject of Object(scheduleObj)) {
            // const result = this.itemTemplate
            //     .replace("{{this.session_id}}", scheduleObject.session_id)
            //     .replace("{{this.topic_name}}", scheduleObject.topic_name)
            //     .replace("{{this.speaker_name}}", scheduleObject.speaker_name)
            //     .replace("{{this.speaker_profile}}", scheduleObject.speaker_profile)
            //     .replace("{{this.session_place}}", scheduleObject.session_place)
            //     .replace("{{this.share_file}}", scheduleObject.share_file)
            //     .replace("{{this.time_id}}", scheduleObject.time_id)

            // template.push(result);
        // }

        return template;

    }


    render(templates) {
        this.s1viewport.innerHTML = "";
        console.log(templates);
        for (let template of templates) {
            // console.log(template)
            this.s1viewport.innerHTML += template;
        }
    }

}

export default ScheduleListView;
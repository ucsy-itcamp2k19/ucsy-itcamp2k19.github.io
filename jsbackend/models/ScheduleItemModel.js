import APIDataModel from "./APIModel.js";

class Schedule extends APIDataModel{
    constructor(
        session_id,
        topic_name,
        speaker_name,
        speaker_profile,
        session_place,
        share_file,
        time_id){
            super();
            this.session_id = session_id;
            this.topic_name = topic_name;
            this.speaker_name = speaker_name;
            this.speaker_profile = speaker_profile;
            this.session_place = session_place;
            this.share_file = share_file;
            this.time_id = time_id;
        }

        updateData(data){
            this.session_id = session_id;
            this.topic_name = topic_name;
            this.speaker_name = speaker_name;
            this.speaker_profile = speaker_profile;
            this.session_place = session_place;
            this.share_file = share_file;
            this.time_id = time_id;

            return this;
        }
}

export default Schedule;
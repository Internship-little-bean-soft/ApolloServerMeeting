import { MongoDataSource } from 'apollo-datasource-mongodb'

export default class Meetings extends MongoDataSource {

  async getMeetings() {
    return await this.model.find();
  }

  async getMeeting(id) {
    return await this.findOneById(id);
  }

  async createMeetings({ title, description, detail }) {
    return await this.model.create({ title, description, detail });
  }

  async deleteMeetings(_id) {
    return await this.model.findByIdAndDelete(_id);
  }

  async updateMeetings(args) {
    return await this.model.findByIdAndUpdate(args._id, args.input, {new: true});
  }
}


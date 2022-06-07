export const resolvers = {
  Query: {
    getMeetings: async (_, _args, { dataSources: { meetings } }) => {
      return meetings.getMeetings();
    },
    getMeeting: async (_, { id }, { dataSources: { meetings } }) => {
      return meetings.getMeeting(id);
    }
  },
  Mutation: {
    createMeetings: async (_, args, { dataSources: { meetings } }) => {
      return meetings.createMeetings(args)
    },
    deleteMeetings: async (_, args, { dataSources: { meetings } }) => {
      return meetings.deleteMeetings(args)
    },
    updateMeetings: async (_, args, { dataSources: { meetings } }) => {
      return meetings.updateMeetings(args)
    }
  }
}

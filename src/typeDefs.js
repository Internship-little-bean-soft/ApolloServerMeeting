import { gql } from 'apollo-server';

export const typeDefs = gql`

  type Query {
    getMeetings: [Meetings!]!,
    getMeeting(id: ID!): Meetings!
  }

  type Mutation {
    createMeetings(title: String!, description: String!, detail: String!): Meetings!
    deleteMeetings(_id: ID!): Meetings!
    updateMeetings(_id: ID!, input: UpdateMeetingsInput): Meetings!
  }

  type Meetings {
    _id: ID!
    title: String!
    description: String!
    detail: String!
  }

  input UpdateMeetingsInput {
    title: String
    description: String
    detail: String
  }

`;

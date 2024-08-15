import { gql } from "@apollo/client";

// Define the GraphQL query
export const GET_ENROLLEES = gql`
query getEnrollees($hmoId: String!) {
  getEnrollees(filterBy: { hmoId: $hmoId }, page: 1) {
    data {
      _id
      firstName
      lastName
      email
      hmoId
      phone
      providerId
    }
    pageInfo {
      totalDocs
      limit
      offset
      hasPrevPage
      hasNextPage
      page
      totalPages
      pagingCounter
      prevPage
      nextPage
    }
  }
}
`;

// export const SIGNUP = gql `mutation signup {
//   signup(
//     data: {
//       $authType: String!
//       $email: String!
//       $password: String!
//       $role: String!
//       $providerId: String!
//       $userTypeId: String!
//     }
//   ) {
//     account {
//       _id
//       email
//       dociId
//       access_token
//       providerId
//       userTypeId
//     }
//     message
//     errors {
//       field
//       message
//     }
//   }
// }`

export const SIGNUP = gql`
  mutation signup(
    $authType: String!
    $email: EmailAddress!
    $password: String!
    $role: String
    $providerId: String!
    $userTypeId: String!
  ) {
    signup(
      data: {
        authType: $authType
        email: $email
        password: $password
        role: $role
        providerId: $providerId
        userTypeId: $userTypeId
      }
    ) {
      account {
        _id
        email
        role
        providerId
        userTypeId
        dociId
        access_token
      }
      message
      errors {
        field
        message
      }
    }
  }
`;

// export const CREATEPROFILE = gql `mutation createProfile 
//     {
//         $firstName: String!
//         $gender: String!
//         $lastName: String!
//       $phoneNumber: String!
//       $dociId: String!
//       $providerId: String!
//       $hmoId: String!
//     }
//     {
//     createProfile(
//         data: {
//         firstName: $firstName
//         lastName: $lastName
//         gender: "Male"
//         phoneNumber: $phoneNumber
//         dociId: $dociId
//         providerId: $providerId
//         hmoId:$hmoId
//         }
//     ) {
//     profile {
//       _id
//     }
//     errors {
//       field
//       message
//     }
//   }
// }`

export const CREATEPROFILE = gql`
mutation createProfile(
   $firstName: String!,
   $lastName: String!,
   $gender: String!,
   $phoneNumber: String!,
   $dociId: String!,
   $providerId: String!,
   $hmoId: String!
) {
   createProfile(
     data: {
       firstName: $firstName
       lastName: $lastName
       gender: $gender
       phoneNumber: $phoneNumber
       dociId: $dociId
       providerId: $providerId
       hmoId: $hmoId
     }
   ) {
     profile {
       _id
     }
    errors {
      field
      message
    }
   }
 } `

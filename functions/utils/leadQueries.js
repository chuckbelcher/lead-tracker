const GET_LEADS = `
query {
    allLeads {
      data {
        _id
        enteredBy
        reviewedBy
        name
        description
        phoneNumber
        emailAddress
        streetAddress
        city
        state
        zipcode
        preferedContactMethod
        region
        mobile
        comment
        booked
        source
        archived
      }
    }
  }
`;

const CREATE_LEAD = `
    mutation(
        $enteredBy: String!,
        $name: String!, 
        $description: String!,
        $phoneNumber: String,
        $emailAddress: String,
        $streetAddress: String,
        $city: String,
        $state: String,
        $zipcode: String,
        $preferedContactMethod: String,
        $region: String,
        $mobile: Boolean,
        $source: String! ) {
        createLead( 
            data: { 
                enteredBy: $enteredBy
                name: $name
                description: $description
                phoneNumber: $phoneNumber
                emailAddress: $emailAddress
                streetAddress: $streetAddress
                city: $city
                state: $state
                zipcode: $zipcode
                preferedContactMethod: $preferedContactMethod
                region: $region
                mobile: $mobile
                source: $source
                archived: false
            }) {
            name
            _id
        }
    }
`;

const UPDATE_LEAD = `
mutation(
    $id: ID!,
    $enteredBy: String!,
    $reviewedBy: String
    $name: String!, 
    $description: String!,
    $phoneNumber: String,
    $emailAddress: String,
    $streetAddress: String,
    $city: String,
    $state: String,
    $zipcode: String,
    $preferedContactMethod: String,
    $region: String,
    $mobile: Boolean,
    $booked: Boolean,
    $comment: String,
    $source: String! ) {
    updateLead( 
        id: $id,
        data: {  
            enteredBy: $enteredBy
            reviewedBy: $reviewedBy
            name: $name
            description: $description
            phoneNumber: $phoneNumber
            emailAddress: $emailAddress
            streetAddress: $streetAddress
            city: $city
            state: $state
            zipcode: $zipcode
            preferedContactMethod: $preferedContactMethod
            region: $region
            mobile: $mobile
            booked: $booked
            source: $source
            archived: false
            comment: $comment
        }) {
        name
        _id
    }
}
`;

const DELETE_LEAD = `
    mutation($id: ID! ) {
        deleteLead(id: $id) {
            _id
        }
    }
`;

module.exports = {
    GET_LEADS,
    CREATE_LEAD,
    UPDATE_LEAD,
    DELETE_LEAD,
};
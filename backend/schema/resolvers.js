const { UserList } = require('../dummyData/dummyData')
const resolvers = {
    Query: {
        users: () => {
            return UserList;
        }
    }
}
module.exports = {resolvers}
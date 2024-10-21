const { UserList } = require('../dummyData/dummyData')
const { MovieList } = require('../dummyData/dummyData')


const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        movies: () => {
            return MovieList
        },
        user:(_,args)=>{
            const id= args.id - '0';
            const user =  UserList.find(user=>user.id===id)

            // console.log(user);
            // console.log(typeof(id));
            

            return user;
        },
        movie:(_,args)=>{
            const name = args.name.toLowerCase();
            const found = MovieList.find(movie=>movie.name.toLocaleLowerCase()===name)

            return found ? found : "not found"
        }
    }
}
module.exports = { resolvers }
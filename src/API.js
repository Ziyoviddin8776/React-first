import axios from "axios"

class getAllPosts{
    static async getAPI(limit=10,page=1){
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts",{
            params:{
                _limit:limit,
                _page:page
            }
        })
        return response
    }
}
export default getAllPosts;
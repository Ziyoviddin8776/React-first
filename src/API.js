import axios from "axios"

class getAllPosts{
    static async getAPI(){
        const response=await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response
    }
}
export default getAllPosts;
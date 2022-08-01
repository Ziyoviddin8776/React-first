import Game from "../navigationPage/Game";
import ApplePage from "../ApplePage/ApplePage";
import GetAPI from "../getAPI/GetAPI";
import Login from "../navigationPage/Login";

export const privateRoutes=[
    {path: "/",component:ApplePage,exact: true},
    {path:"/posts", component:GetAPI,exact:true},
    {path:"/game", component:Game,exact:true},
]

export const publicRoutes=[
    {path:"/login",component:Login,exact:true}
]
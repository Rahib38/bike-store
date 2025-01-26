
import { Router } from "express";
import authRouter from "../modules/auth/auth.route";
import adminRouter from "../modules/admin/admin.route";
import bikeRoutes from "../modules/bike model/bike.route";
import orderRoutes from "../modules/order model/order.route";



const router= Router()
const moduleRoutes=[
    {
        path:"/auth",
        route:authRouter
    },
    {
        path:"/admin",
        route:adminRouter
    },
    {
        path:"/products",
        route:bikeRoutes
    },
    {
        path:"/orders",
        route:orderRoutes
    }
]

moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router;

import Home from "../components/home";
import Search from "../components/router/search";
import CategoryList from "../components/router/categorylist";
import Package from "../components/router/package";
import Rush from "../components/router/rush";
import Find from "../components/router/find";
import My from "../components/router/my";
import GoodsListSub from "../components/router/goodslistsub";
import Login from "../components/router/login";
import Register from "../components/router/register";
import Not404 from "../components/router/not404";
import PromotionSub from "../components/router/promotionsub";

import Order from "../components/router/goodslistsub/Order";
import Evaluate from "../components/router/goodslistsub/evaluate";
import Business from "../components/router/goodslistsub/business";


export const routes = [
    {
        exact : true,
        path : "/",
        component : Home
    },
    {
        path : "/search",
        component : Search
    },
    {
        path : "/category/list:id",
        component : CategoryList
    },
    {
        path : "/package",
        component : Package
    },
    {
        path : "/rush",
        component : Rush
    },
    {
        path : "/promotion/sub:id",
        component : PromotionSub
    },
    {
        path : "/find",
        component : Find
    },
    {
        path : "/my",
        component : My
    },
    {
        path : "/goodslist:id",
        component : GoodsListSub,
        routes : [
            {
                exact : true,
                path : "/goodslist:id/order",
                component : Order
            },
            {
                path : "/goodslist:id/evaluate",
                component : Evaluate
            },
            {
                path : "/goodslist:id/business",
                component : Business
            }
        ]
    },
    {
        path : "/user/login",
        component : Login
    },
    {
        path : "/user/register",
        component : Register
    },
    {
        component : Not404
    }
];
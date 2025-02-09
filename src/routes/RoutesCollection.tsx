import React from "react";
import PeopleList from "../components/people-list/PeoplesList.tsx";
import PeopleDetail from "../components/people-detail/PeopleDetail.tsx";
import { RouteObject } from "react-router-dom";

export const RoutesCollection: RouteObject[] = [
  {
    path: "/",
    element: <PeopleList />,
  },
  {
    path: "/people",
    element: <PeopleList />,
  },
  {
    path: "/people/:id",
    element: <PeopleDetail />,
  },
];

import {type JSX} from "react";

export type Categories = {
    categories: Category[];
};

export type Category = {
    title: string;
    name: string;
    icon: JSX.Element;
}
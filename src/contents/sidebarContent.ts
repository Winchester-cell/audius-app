import { BsRobot } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdOutlineMonitor } from "react-icons/md";
import { MdDashboard } from "react-icons/md";

export type SingleItemType = {
    type: "single-item";
    text: string;
    href: string;
    icon: React.ElementType;
};

export type DropDownType = {
    type: "dropdown";
    text: string;
    icon: React.ElementType;
    options: SingleItemType[];
};

type Fields = {
    title: string;
    items: (SingleItemType | DropDownType)[];
};

const sideBarContent: Fields[] = [
    {
        title: "",
        items: [
            {
                type: "single-item",
                href: "/",
                text: "sidebar.dashboard",

                icon: MdDashboard,
            },
            {
                type: "single-item",
                href: "#",
                text: "sidebar.patients",
                icon: FaUsers
            },
            {
                type: "single-item",
                href: "#",
                text: "sidebar.reports",
                icon: MdOutlineMonitor
            },
            {
                type: "single-item",
                href: "#",
                text: "sidebar.settings",
                icon: IoSettingsSharp
            },
            {
                type: 'dropdown',
                icon: MdDashboard,
                text: 'Test Drop',
                options: [
                    { type: 'single-item', href: '#', icon: IoSettingsSharp, text: 'Settings' },
                    { type: 'single-item', href: '#', icon: BsRobot, text: 'Test Option' },
                    { type: 'single-item', href: '#', icon: IoSettingsSharp, text: 'Settings' },
                    { type: 'single-item', href: '#', icon: BsRobot, text: 'Test Option' },
                ]
            },
            {
                type: "single-item",
                href: "#",
                text: "sidebar.aiCenter",
                icon: BsRobot
            },
            // cloned
            {
                type: "single-item",
                href: "#",
                text: "sidebar.dashboard",

                icon: MdDashboard,
            },
            {
                type: "single-item",
                href: "#",
                text: "sidebar.patients",
                icon: FaUsers
            },
            {
                type: "single-item",
                href: "#",
                text: "sidebar.reports",
                icon: MdOutlineMonitor
            },
            {
                type: "single-item",
                href: "#",
                text: "sidebar.settings",
                icon: IoSettingsSharp
            },
            {
                type: 'dropdown',
                icon: MdDashboard,
                text: 'Test Drop',
                options: [
                    { type: 'single-item', href: '#', icon: IoSettingsSharp, text: 'Settings' },
                    { type: 'single-item', href: '#', icon: BsRobot, text: 'Test Option' },
                ]
            },
            {
                type: "single-item",
                href: "#",
                text: "sidebar.aiCenter",
                icon: BsRobot
            },
        ],
    },
];

export default sideBarContent;

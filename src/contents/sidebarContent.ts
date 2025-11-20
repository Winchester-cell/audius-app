import { BiDevices } from "react-icons/bi";
import { BsFillBuildingFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard, MdEventAvailable, MdOutlineMonitor } from "react-icons/md";
import { RiStethoscopeFill } from "react-icons/ri";

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
                href: "/patients",
                text: "sidebar.patients",
                icon: FaUsers
            },
            {
                type: "single-item",
                href: "/devices",
                text: "sidebar.devices",
                icon: BiDevices,
            },
            {
                type: "single-item",
                href: "/clinics",
                text: "sidebar.clinics",
                icon: BsFillBuildingFill,
            },
            {
                type: "single-item",
                href: "/admin-dashboard",
                text: "sidebar.adminDashboard",
                icon: MdDashboard,
            },
            {
                type: "single-item",
                href: "#",
                text: "sidebar.sessions",
                icon: RiStethoscopeFill,
            },
            {
                type: "single-item",
                href: "#",
                text: "sidebar.appointments",
                icon: MdEventAvailable,
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
        ],
    },
];

export default sideBarContent;

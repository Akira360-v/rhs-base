import Employees from "./Routes/Employees";
import Equipment from "./Routes/Equipment";
import Statistics from "./Routes/Statistics";
import Settings from "./Routes/Settings";

import SettingsIcon from '@material-ui/icons/Settings';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import ComputerIcon from '@material-ui/icons/Computer';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

export const routes = [
    {
        link: {
            title: "Employees",
            icon: SupervisorAccountIcon,
        },
        route: {
            component: Employees,
            path: "/employees"
        }
    },
    {
        link: {
            title: "Equipment",
            icon: ComputerIcon,
        },
        route: {
            component: Equipment,
            path: "/equipment"
        }
    },
    {
        link: {
            title: "Statistics",
            icon: TrendingUpIcon,
        },
        route: {
            component: Statistics,
            path: "/statistics"
        }
    },
    {
        link: {
            title: "Settings",
            icon: SettingsIcon,
        },
        route: {
            component: Settings,
            path: "/settings"
        }
    },
];

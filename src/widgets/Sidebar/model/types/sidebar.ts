import React from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";

export interface SidebarItemType {
    link: string,
    label: string,
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

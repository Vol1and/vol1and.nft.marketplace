import React from 'react';

export interface SidebarItemType {
    link: string,
    label: string,
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

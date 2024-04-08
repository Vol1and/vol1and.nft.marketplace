import React from 'react';

export interface ViewSelectorElementType<T> {
    view: T,
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ArticleInfiniteList } from './ArticleInfiniteList';

export default {
    title: 'features/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};

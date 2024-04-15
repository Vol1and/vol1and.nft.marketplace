import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Text, TextTheme } from './Text';
import { Theme } from '@/shared/const/theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Text',
    component: Text,
    parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'app light',

    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};

export const Error: Story = {
    args: {
        title: 'Title',
        text: 'Text',
        theme: TextTheme.ERROR,
    },
};

export const Dark: Story = {
    args: {
        title: 'Title',
        text: 'Text',
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'shared/Button',
    component: Button,
    parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'app light',

    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    argTypes: {

        className: { defaultValue: '' },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: 'clear',
    },
};

export const Outline: Story = {
    args: {
        children: 'Button',
        theme: 'outline',
    },
};

export const Square: Story = {
    args: {
        children: 'Button',
        square: true,
    },
};

export const OutlineLG: Story = {
    args: {
        children: 'Button',
        theme: 'outline',
        size: 'lg',
    },
};

export const OutlineSM: Story = {
    args: {
        children: 'Button',
        theme: 'outline',
        size: 'sm',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Button',
        disabled: true,
        theme: 'outline',
    },
};

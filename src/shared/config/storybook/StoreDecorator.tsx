import { Story } from '@storybook/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (initialState: DeepPartial<StateSchema>) => (StoryComponent: Story) => (
    <StoreProvider initialState={initialState as StateSchema}>
        <StoryComponent />
    </StoreProvider>
);

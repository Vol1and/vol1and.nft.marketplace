import { StateSchema } from 'app/providers/StoreProvider';
import { AsyncThunkAction } from '@reduxjs/toolkit';

type ActionCreatorType<Return, Arg, RejectedValue> =
    (arg: Arg) => AsyncThunkAction<Return, Arg, {rejectValue: RejectedValue}>
export class TestAsyncThunk<Return, Arg, RejectedValue> {
    dispatch: jest.MockedFunction<any>;

    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>;

    getState: () => StateSchema;

    constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
        this.dispatch = jest.fn();
        this.getState = jest.fn();
        this.actionCreator = actionCreator;
    }

    async callThunk(arg: Arg) {
        const action = this.actionCreator(arg);
        return action(this.dispatch, this.getState, undefined);
    }
}

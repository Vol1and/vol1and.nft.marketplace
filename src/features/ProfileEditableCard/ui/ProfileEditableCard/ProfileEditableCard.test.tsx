import { fireEvent, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender';
import { Profile } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { ProfileEditableCard } from './ProfileEditableCard';
import { profileReducer } from '../../model/slice/profileSlice';

const profileMock: Profile = {
    firstname: 'Vova',
    lastname: 'Bebor',
    country: Country.Canada,
    currency: Currency.EUR,
    username: 'vol1and',
    city: 'Donetsk',
    age: 22,
    id: '1',
};
describe('features/ProfileEditableCard', () => {
    it('should render', async () => {
        componentRender(<ProfileEditableCard id="1" />, {
            initialState: {
                profile: {
                    data: profileMock,
                    form: profileMock,
                    error: undefined,
                    isLoading: false,
                    readonly: true,
                },
                user: {
                    authData: { id: '1' },

                },
            },
            asyncReducers: {
                profile: profileReducer,
            },
        });
        await userEvent.click(screen.getByTestId('ProfileEditableCardHeader.EditButton'));
        expect(screen.getByTestId('ProfileEditableCardHeader.CancelButton')).toBeInTheDocument();
    });
});

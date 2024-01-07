import { fireEvent, screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    it('should render', () => {
        componentRender(<Sidebar />, { route: '/' });
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    it('should toggle sidebar', () => {
        componentRender(<Sidebar />, { route: '/' });
        const btn = screen.getByTestId('sidebar-toggle');
        fireEvent.click(btn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});

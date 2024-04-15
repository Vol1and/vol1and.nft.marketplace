import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from './Button';

describe('Button', () => {
    it('should render', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    it('should add clear theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
    });
});

import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button', () => {
    it('should render', () => {
        render(<Button>test</Button>);
        expect(screen.getByText('test')).toBeInTheDocument();
    });

    it('should add clear theme', () => {
        render(<Button theme="clear">test</Button>);
        expect(screen.getByText('test')).toHaveClass('clear');
    });
});

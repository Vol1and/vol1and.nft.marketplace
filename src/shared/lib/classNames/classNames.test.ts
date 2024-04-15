import { classNames } from './classNames';

describe('classNames', () => {
    it('should return first param', () => {
        expect(classNames('myClass')).toBe('myClass');
    });
    it('should work with additional classes', () => {
        const expected = 'myClass class1 class2';
        expect(classNames('myClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    it('should work with positive modifiers', () => {
        const expected = 'myClass hover active';
        expect(classNames('myClass', { hover: true, active: true })).toBe(expected);
    });
    it('should work with negative modifiers', () => {
        const expected = 'myClass';
        expect(classNames('myClass', { hover: false, active: false })).toBe(expected);
    });
    it('should work altogether', () => {
        const expected = 'myClass add hover';
        expect(classNames('myClass', { hover: true, active: false }, ['add'])).toBe(expected);
    });
});

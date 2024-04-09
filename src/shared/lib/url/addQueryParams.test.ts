import { getQueryParams } from './addQueryParams'; // Replace './your-file' with the correct path to your function

describe('getQueryParams', () => {
    beforeEach(() => {
        // Mocking window.location.search
        Object.defineProperty(window, 'location', {
            value: {
                search: '',
            },
            writable: true,
        });
    });

    it('should return empty string when no params are provided', () => {
        expect(getQueryParams({})).toEqual('?');
    });

    it('should return query params string with a single param', () => {
        expect(getQueryParams({ param1: 'value1' })).toEqual('?param1=value1');
    });

    it('should return query params string with multiple params', () => {
        expect(getQueryParams({ param1: 'value1', param2: 'value2' })).toEqual('?param1=value1&param2=value2');
    });

    it('should ignore params with empty values', () => {
        expect(getQueryParams({ param1: 'value1', param2: undefined })).toEqual('?param1=value1');
    });

    it('should handle special characters in param values', () => {
        expect(getQueryParams({ param1: 'value 1', param2: 'value&2' })).toEqual('?param1=value+1&param2=value%262');
    });

    it('should handle special characters in param names', () => {
        expect(getQueryParams({ 'param!@#': 'value1', 'param$%^&': 'value2' })).toEqual('?param%21%40%23=value1&param%24%25%5E%26=value2');
    });

    it('should handle existing query params in window.location.search', () => {
        window.location.search = '?existingParam=existingValue';
        expect(getQueryParams({ newParam: 'newValue' })).toEqual('?existingParam=existingValue&newParam=newValue');
    });
});

export const toTitleCase = (text: any): string => {
    if (text === null || text === undefined || typeof text !== 'string') {
        return '';
    }
    if (text.trim() === '') {
        return '';
    }

    return text.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
};

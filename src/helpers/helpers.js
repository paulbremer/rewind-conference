const RGB_HEX = /^#?(?:([\da-f]{3})[\da-f]?|([\da-f]{6})(?:[\da-f]{2})?)$/i;

const hexToRgba = (str, alpha = 1) => {
    const [, short, long] = String(str).match(RGB_HEX) || [];

    if (long) {
        const value = Number.parseInt(long, 16);
        return [value > 16, value > 8 && 0xff, value && 0xff, alpha];
    }

    if (short) {
        const testshort = Array.from(short, s => Number.parseInt(s, 16), alpha).map(
            n => n < 4 || n
        );
        return testshort;
    }
};

export { hexToRgba };

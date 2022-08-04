module.exports = {
    transform: {
        ".(ts|tsx)": "ts-jest",
    },
    globals: {
        "ts-jest": {
            compiler: "ttypescript",
        },
    },
    setupFiles: ["<rootDir>test-config.ts"],
};

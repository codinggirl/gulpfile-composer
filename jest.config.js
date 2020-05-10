let opts = {
    testMatch: [
        "**/lib/**/*.test.[jt]s?(x)",
        "**/test/**/*.[jt]s?(x)"
    ],
    testPathIgnorePatterns: [
        "test/helper/(.*)"
    ],
    coverageDirectory: 'coverage',
    collectCoverage: true
}

module.exports = opts

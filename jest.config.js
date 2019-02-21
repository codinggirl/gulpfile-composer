let opts = {
    testMatch: [
        "**/test/**/*.[jt]s?(x)"
    ],
    testPathIgnorePatterns: [
        "test/helper/(.*)"
    ],
    coverageDirectory: '.build/coverage',
    collectCoverage: true
}

module.exports = opts

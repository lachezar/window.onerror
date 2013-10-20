var config = module.exports;

config["Smoke tests"] = {
    rootPath: "../",
    environment: "browser",
    sources: [
        "onerror.js"
    ],
    tests: [
        "test/onerror-test.js"
    ]
}
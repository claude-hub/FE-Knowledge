const semver = require('semver');
const { dependencyChecker } = require('./dependency-checker');

// 允许的版本更新策略
const VALID_BUMP_STRATEGY = ['major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', 'prerelease'];

VALID_BUMP_STRATEGY.forEach(item => {
  console.log(semver.inc('1.0.0', item, 'beta'))
})


dependencyChecker()
var postcss = require('postcss');

module.exports = postcss.plugin('postcss-line-height-ie-fix', opts => {
    opts = opts || {};
    console.log(opts);
    // Work with options here
    return function (root) {
        root.walkRules(function (rule) {
            rule.walkDecls('line-height', function (decl) {
                rule.append({
                    prop: 'height',
                    value: decl.value
                });
            });
        });
    };
});

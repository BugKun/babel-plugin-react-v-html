module.exports = ({ types: babelTypes }) => ({
    visitor: {
        JSXIdentifier(path) {
            const name = path.node.name;
            if (name === 'v-html') {
                path.node.name = 'dangerouslySetInnerHTML';

                const {
                    JSXExpressionContainer,
                    ObjectExpression,
                    ObjectProperty,
                    StringLiteral
                } = babelTypes;

                path.container.value = JSXExpressionContainer(
                    ObjectExpression([
                        ObjectProperty(
                            StringLiteral('__html'),
                            path.container.value.expression,
                        )
                    ])
                )
            }
        }
    }
});

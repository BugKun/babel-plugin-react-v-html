module.exports = ({
    types: babelTypes
}) => ({
    visitor: {
        JSXIdentifier(path) {
            if (path.node.name === 'v-html') {
                const {
                    JSXExpressionContainer,
                    ObjectExpression,
                    ObjectProperty,
                    StringLiteral,
                    JSXIdentifier
                } = babelTypes,
                htmlContainer = path.parentPath.get('value'),
                html = htmlContainer.get('expression').node;

                path.replaceWith(
                    JSXIdentifier('dangerouslySetInnerHTML')
                );

                htmlContainer.replaceWith(
                    JSXExpressionContainer(
                        ObjectExpression([
                            ObjectProperty(
                                StringLiteral('__html'),
                                html
                            )
                        ])
                    )
                );
            }
        }
    }
});

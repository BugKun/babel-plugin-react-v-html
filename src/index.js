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
                } = babelTypes

                path.replaceWith(
                    JSXIdentifier('dangerouslySetInnerHTML')
                )

                const htmlContainer = path.parentPath.get('value'),
                    html = htmlContainer.get('expression')

                htmlContainer.replaceWith(
                    JSXExpressionContainer(
                        ObjectExpression([
                            ObjectProperty(
                                StringLiteral('__html'),
                                html.node
                            )
                        ])
                    )
                )
            }
        }
    }
});

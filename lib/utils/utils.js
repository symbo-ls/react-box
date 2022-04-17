

import { mapSpacing, getTheme, getColor, THEME, COLOR, mapFontSize, getSequence } from '@symbo.ls/scratch'
import { shape, depth, mapBasedOnRatio } from '../style'


function transformSpacing(property, spacings) {
    if(!spacings) {
        return null;
    }

    if (!Array.isArray(spacings)) {
        return spacings
    }

    var spacingArray = [];

    spacings.map(spacing => {
        spacingArray.push(Object.values(spacing)[0])
    })

    var generatedSpacing = spacingArray.join(' ')

    return { [property]: generatedSpacing }

}


function transformSize(property, values) {

    if (typeof values !== 'string') return

    const [prop1, prop2] = values.split(' ')


    var generatedProps = [
        {
            key: 'boxSize',
            properties: {
                ...mapSpacing(prop1, 'width'),
                ...mapSpacing(prop2, 'height')
            }
        },
        {
            key: 'widthRange',
            properties: {
                ...mapSpacing(prop1, 'minWidth'),
                ...mapSpacing(prop2, 'maxWidth')
            }
        },
        {
            key: 'heightRange',
            properties: {
                ...mapSpacing(prop1, 'minHeight'),
                ...mapSpacing(prop2, 'maxHeight')
            }
        }
    ]

    return generatedProps.find(item => item.key === property).properties
}




export function transformPropsToStyle(props) {

    return {
        ...props.shape && shape[props.shape],
        ...props.depth && depth[props.depth],
        ...props.shape && shape[props.shape],
        ...props.shape && shape[props.shape][props.shapeDirection || 'top'],
        ...props.shapeDirection && { '&:before': { borderColor: getColor(props.backgroundColor) } },
        boxShadow: props.boxShadow,
        lineHeight: props.lineHeight,
        color: getColor(props.color),
        ...mapSpacing(props.round, 'borderRadius') || ({ borderRadius: props.round }),
        borderStyle: props.borderStyle,
        borderWidth: props.borderWidth,
        border: `1px solid ${getColor(props.border)}` || 'transparent 0',
        ...getColor(props.backgroundColor),
        background: getColor(props.background),
        direction: props.direction,

        ...transformSpacing('padding', mapSpacing(props.padding, 'padding')),
        ...transformSpacing('margin', mapSpacing(props.margin, 'margin')),

        ...mapFontSize(props.size),
        ...getTheme(props.theme),
        ...mapSpacing(props.round, 'borderRadius'),
        ...mapBasedOnRatio(props, 'maxWidth'),
        ...mapBasedOnRatio(props, 'minWidth'),
        ...mapSpacing(props.width, 'width'),
        ...mapSpacing(props.height, 'height'),
        ...transformSize('boxSize', props.boxSize),
        ...transformSize('widthRange', props.widthRange),
        ...transformSize('heightRange', props.heightRange),

        display: props.display || getDisplayFromAs(props.as),

        //flex
        flexFlow: props.flow,
        flexDirection: props.flexDirection,
        alignItems: props.alignItems,
        justifyContent: props.justifyContent,
        ...mapBasedOnRatio(props, 'gap'),

        // grid
        gridTemplateColumns: props.columns,
        gridTemplateRows: props.rows,
        ...mapBasedOnRatio(props, 'columnGap'),
        ...mapBasedOnRatio(props, 'rowGap')
    }
}


export function getElementFromAs(value) {
    switch (value) {
        case 'text':
            return "p"
        case 'button':
            return 'button'
        default:
            return 'div'
    }
}

export function getDisplayFromAs(value) {
    switch (value) {
        case 'text':
            return "block"
        case 'grid':
            return 'grid'
        case 'flex':
            return 'flex'
        case 'inline':
            return 'inline'
        case 'inline-block':
            return 'inline-block'
        default:
            return 'block'
    }
}


export function deletePropsFromExtra(values) {
    delete values.props
    return values
}


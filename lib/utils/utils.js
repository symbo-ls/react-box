

import { mapSpacing, getTheme, getColor, THEME, COLOR, mapFontSize } from '@symbo.ls/scratch'
import style, { shape, depth, mapBasedOnRatio } from '../style'


export function transformPropsToStyle(props) {

    return {
        ...props.shape && shape[props.shape],
        ...props.depth && depth[props.depth],
        shapeDirection: ({ props }) => props.shape && shape[props.shape][props.shapeDirection || 'top'],
        shapeDirectionColor: ({ props, ...el }) => props.shapeDirection && { '&:before': { borderColor: el.class.backgroundColor } },
        boxShadow: depth[props.depth],
        round: ({ props, key, ...el }) => props.round && (mapSpacing(props.round, 'borderRadius') || ({ borderRadius: props.round })),
        margin: props.margin,
        color: getColor(props.color),
        border: ({ props }) => props.border && ({ border: getColor(props.border) }) || 'transparent 0',
        ...getColor(props.background),
        // ...mapSpacing(props.padding),
        // ...mapSpacing(props.margin),
        ...mapFontSize(props.size),
        ...getTheme(props.theme),
        ...mapSpacing(props.round, 'borderRadius'),
        ...mapBasedOnRatio(props.maxWidth, 'maxWidth'),
        ...mapBasedOnRatio(props.minWidth, 'minWidth'),
        ...mapSpacing(props.width, 'width'),
        ...mapSpacing(props.height, 'height'),

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
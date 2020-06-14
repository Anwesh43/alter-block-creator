import React from 'react'
import {useStyle, useAnimatedScale, useDimension} from './hooks'

const Block = ({style}) => (<div style = {style}></style>)

const ABCPresentational = ({w, h, scale, onClick}) => {
    const {getBlockStyle} = useStyle(w, h, scale)
    return (<div onClick = {onClick}>
      {[0, 1, 2].map(i => <Block style = {getBlockStyle(i)}/>)}
    </div>)
}

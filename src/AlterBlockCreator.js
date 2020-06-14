import React from 'react'
import {useStyle, useAnimatedScale, useDimension} from './hooks'

const Block = ({style}) => (<div style = {style}></style>)

const ABCPresentational = ({w, h, scale, onClick}) => {
    const {getBlockStyle} = useStyle(w, h, scale)
    return (<div onClick = {onClick}>
      {[0, 1, 2].map(i => <Block style = {getBlockStyle(i)}/>)}
    </div>)
}

const AlterBlockCreator = (props) => {
    const {scale, start} = useAnimatedScale(0.02 / 3, 20)
    const {w, h} = useDimension()
    return <ABCPresentational w = {w} h = {h} scale = {scale} onClick = {start}>
    </ABCPresentational>
}

export default AlterBlockCreator

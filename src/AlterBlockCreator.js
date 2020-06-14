import React from 'react'
import {useStyle, useAnimatedScale, useDimension} from './hooks'

const Block = ({style}) => (<div style = {style}></div>)

const ABCPresentational = ({w, h, scale, onClick}) => {
    const {getBlockStyle} = useStyle(scale, w, h)
    return (<div onClick = {onClick}>
      {[0, 1, 2].map(i => <Block style = {getBlockStyle(i)}/>)}
    </div>)
}

const AlterBlockCreator = (props) => {
    const {scale, start} = useAnimatedScale(0.02 / 3, 20)
    console.log("scale", scale)
    const {w, h} = useDimension()
    return <ABCPresentational w = {w} h = {h} scale = {scale} onClick = {start}>
    </ABCPresentational>
}

export default AlterBlockCreator

import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        start() {
            if (!animated) {
                setAnimated(true)
                var currScale = scale
                const interval = setInterval(() => {
                    currScale += scGap
                    setScale(currScale)
                    if (Math.abs(currScale) > 1) {
                        setScale(0)
                        setAnimated(false)
                        clearInterval(interval)
                    }
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w,
        h
    }
}

export const useStyle = (scale, w, h) => {
    const sf = sinify(scale)
    const position = 'absolute'
    const background = '#3F51B5'
    const size = Math.min(w, h) / 8
    return {
        getBlockStyle(i) {
            const sciy = divideScale(sf, Math.floor(i / 2), 3)
            const sy2 = Math.floor(i / 2)
            const scix = divideScale(sf, i, 3)
            const si = i % 2
            const sy = Math.floor((i + 1) / 2)
            const width = `${size + (w - size) * scix * sy}px`
            const height = `${size + (h - size) * si * scix}px`
            const top = '0px'
            const left = `${(size + (w - size) * sciy) * sy2}px`
            return {position, top, left, width, height, background}
        }
    }
}

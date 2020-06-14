import {useState, useEffect} from 'react'
import {sinify, divideScale} from './utils'

export const useAnimatedScale = (scGap, delay) => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)
    return {
        scale,
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
    const parts = 3
    return {
        getBlockStyle(i) {
            const sciy = divideScale(sf, Math.floor(i / 2), parts + 1)
            const sy2 = Math.floor(i / 2)
            const scix = divideScale(sf, i, parts + 1)
            const si = i % 2
            const sy = Math.floor((i + 1) / 2)
            console.log("size, sciy, sy2, sy, si, scix, sf", size, sciy, sy2, sy, si, scix, sf)
            const width = `${size + (w - size) * scix * si}px`
            const height = `${size + (h - size) * (1 - si) * scix}px`
            const top = '0px'
            const left = `${((w - size) * sciy) * sy2}px`
            return {position, top, left, width, height, background}
        }
    }
}

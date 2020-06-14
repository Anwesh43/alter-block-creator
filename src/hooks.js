import {useState, useEffect} from 'react'

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

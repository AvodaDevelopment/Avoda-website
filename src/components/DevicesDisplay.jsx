import { useState, useRef, useEffect, useCallback } from 'react'
import { useInView } from 'react-intersection-observer'
import computer from '@assets/images/devices/computerdevice.png'
import tablet from '@assets/images/devices/tabletdevice.png'
import phone from '@assets/images/devices/phonedevice.png'
import './DevicesDisplay.css'

function DevicesDisplay() {
    const [rotation1, setRotation1] = useState(0)
    const [rotation2, setRotation2] = useState(0)
    const [rotation3, setRotation3] = useState(0)
    
    const computerRef = useRef(null)
    const tabletRef = useRef(null)
    const phoneRef = useRef(null)
    
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: false
    })

    // Rotation centers in SVG coordinates

    const calculateAngle = (containerRef, mouseX, mouseY, deviceType) => {
        if (!containerRef.current) return 0
        
        const rect = containerRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        // Calculate angle from center to mouse
        const dx = mouseX - centerX
        const dy = mouseY - centerY
        const angle = Math.atan2(dy, dx) * (180 / Math.PI)
        
        return angle
    }

    const handleMouseMove = useCallback((e) => {
        if (!inView) return
        
        const mouseX = e.clientX
        const mouseY = e.clientY
        
        if (computerRef.current) {
            const angle = calculateAngle(computerRef, mouseX, mouseY, 'computer')
            setRotation1(angle)
            setRotation2(angle)
            setRotation3(angle)
        }
       
    }, [inView])

    useEffect(() => {
        if (inView) {
            window.addEventListener('mousemove', handleMouseMove)
            return () => {
                window.removeEventListener('mousemove', handleMouseMove)
            }
        }
    }, [inView, handleMouseMove])
    return (
        <div ref={ref} className="devices-display">
            
            

            {/* SVG 1 */}
            <div className="computer-display" ref={computerRef}>
            <svg className="overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 314.76 240.50" >
                <defs>
                    <style>
                        {`.cls-1-1 { fill: none; }
                        .cls-6-1 { fill: #f8f7fb; mix-blend-mode: lighten; opacity: .16; }`}
                    </style>
                    <clipPath id="clippath-1">
                        <rect className="cls-1-1" width="314.76" height="200.75" rx="7.62" ry="7.62"/>
                    </clipPath>
                </defs>
                <g clipPath="url(#clippath-1)">
                    <rect 
                        className="cls-6-1" 
                        x="161.31" 
                        y="-121.11" 
                        width="432.06" 
                        height="449.82" 
                        transform={`rotate(${rotation1},157.38,100.375)`}
                    />
                </g>
            </svg>
            <img src={computer} alt="Computer" width={"314.76"}/>
            </div>
            {/* SVG 2 */}
            <div className="tablet-display" ref={tabletRef}>
            <svg className="overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124.7 177.32">
                <defs>
                    <style>
                        {`.cls-1-2 { fill: none; }
                        .cls-6-2 { fill: #f8f7fb; mix-blend-mode: lighten; opacity: .16; }`}
                    </style>
                    <clipPath id="clippath-2">
                        <rect className="cls-1-2" x="0" y="0" width="124.7" height="177.32" rx="7.62" ry="7.62"/>
                    </clipPath>
                </defs>
                <g clipPath="url(#clippath-2)">
                    <rect 
                        className="cls-6-2" 
                        x="63.91" 
                        y="-42.55" 
                        width="201.93" 
                        height="266.31" 
                        transform={`rotate(${rotation2},62.35,88.66)`}
                        transition={'transform 0.5s ease-in-out'}
                    />
                </g>
            </svg>
            <img src={tablet} alt="Tablet"  width={"124.7"}/>
            </div>
            <div className="phone-display" ref={phoneRef}>
            {/* SVG 3 */}
            <svg className="overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55.19 116.39">
                <defs>
                    <style>
                        {`.cls-1-3 { fill: none; }
                        .cls-6-3 { fill: #f8f7fb; mix-blend-mode: lighten; opacity: .16; }`}
                    </style>
                    <clipPath id="clippath-3">
                        <rect className="cls-1-3" x="0" y="0" width="55.19" height="116.39" rx="7.62" ry="7.62"/>
                    </clipPath>
                </defs>
                <g clipPath="url(#clippath-3)">
                    <rect 
                        className="cls-6-3" 
                        x="28.29" 
                        y="-27.94" 
                        width="100.69" 
                        height="174.81" 
                        transform={`rotate(${rotation3},27.595,58.195)`}
                    />
                </g>
            </svg>
            <img src={phone} alt="Phone"  width={"55.19px"}/>
            </div>
        </div>
    )
}

export default DevicesDisplay
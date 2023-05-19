import { useEffect, useState } from "react";

import rgbToHex from "./utils";




const SingleColor = ({ index, color }) => {
    const [alert, setAlert] = useState(false)
    const bcg = color.rgb.join(',')

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000)
        return () => {
            clearTimeout(timeout)
        }
    }, [alert])


    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            style={{ background: `rgb(${bcg})`, }}
            onClick={(e) => {
                setAlert(true)
                navigator.clipboard.writeText(`${rgbToHex(...color.rgb)}`)
            }}
        >
            <p className='percent-value'>
                {color.weight} %
            </p>
            <p className="color-value">
                {rgbToHex(...color.rgb)}
            </p>
            {alert && (
                <p className="alert">
                    Copy to clipboard
                </p>
            )}
        </article>
    )
}


export default SingleColor;
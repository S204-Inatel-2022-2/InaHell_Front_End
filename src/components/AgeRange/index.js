import InputRange from 'react-input-range'
import 'react-input-range/lib/css/index.css'

export default function InputAgeRangeSlider({currentAge, updateMainAge}) {
    
    const updateAge = updatedAge => {
        updateMainAge(updatedAge)
    }

    return (
        <InputRange
        minValue={0}
        maxValue={120}
        value={currentAge}
        onChange={value => updateAge(value)} />
    )
}
import { useState } from 'react';
import Box from './Box'
import NewBoxForm from './NewBoxForm';
import {v4 as uuid} from 'uuid';

/** BoxList - renders all of the boxes along with the new box form
 * 
 * Props: none
 * 
 * State: array of all boxes
 * 
 */

const BoxList = () => {

    const [boxes, setBoxes] = useState([])

    const removeBox = (key) => {
        setBoxes(boxes.filter(box => (box.key !== key)))
    }

    const addBox = (backgroundColor, width, height) => {
        const boxKey = uuid();
        const newBox = {
            key: boxKey,
            backgroundColor: backgroundColor,
            width: width,
            height: height,
          };
        setBoxes([...boxes, newBox])
    }
    return (
        <>
            {boxes.map((box) => (
                <div key={box.key}>
                <Box
                    backgroundColor={box.backgroundColor}
                    width={box.width}
                    height={box.height}
                    removeBox={() => removeBox(box.key)}
                />
                </div>
             ))}

            < NewBoxForm addBox={addBox}/>
        </>
    )
}

export default BoxList;
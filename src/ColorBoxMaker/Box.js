/** Box - displays a div with a background color, width and height based on props
 * 
 * Props: {key, backgroundColor, width, height, removeBox}
 * 
 * State: none
 * 
 */

const Box = ({key, backgroundColor, width, height, removeBox}) => {
    const boxStyle = {
        backgroundColor,
        width,
        height 
       }
    return (
        <div style={{ display: 'flex' }} >  
            <div id={key} style={boxStyle} data-testid={`box-${backgroundColor}-${width}-${height}`}></div>
            <button onClick={removeBox} style={{height: '30px', width: '30px'}}>X</button>
        </div>
    )
}

export default Box;
import '../App.css'

export const EventHandling = () => {


    const handelButtonClick = (event) => {
        console.log(event)
        alert('button clicked')
    }

    return(
        <>
        <button onClick={handelButtonClick}>
            click me</button>
            <br />
        <button onClick={() => handelButtonClick(event)}>Click me2</button>
        </>
    )
}
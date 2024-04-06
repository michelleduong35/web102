import React from 'react';
import './CreateMate.css'
import { supabase } from '../client'

const CreateMate = () => {

    const [mate, setMate] = useState({name: "", speed: 0, color: ""})

    const createMate = async (event) => {
        event.preventDefault()
        await supabase
            .from('Mates')
            .insert({name: mate.name, speed: mate.speed, color: mate.color})
            .select();
        if(error) {
            console.log(error)
        } else {
            console.log(data)
        }
        window.location = "/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setMate( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

    return (
        <div>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label for="speed">Speed (mph)</label><br />
                <input type="int8" id="speed" name="speed" onChange={handleChange} /><br />
                <br/>

                <label>Color</label><br />
                <input type="radio" id="red" name="color" value="Red" checked={mate.color === 'Red'} onChange={handleChange} />
                <label htmlFor="red">Red</label>
                <br />
                <input type="radio" id="green" name="color" value="Green" checked={mate.color === 'Green'} onChange={handleChange} />
                <label htmlFor="green">Green</label>
                <br />
                <input type="radio" id="blue" name="color" value="Blue" checked={mate.color === 'Blue'} onChange={handleChange} />
                <label htmlFor="blue">Blue</label>
                <br />
                <input type="submit" value="Submit" onClick={createMate} />
            </form>
        </div>
    )
}

export default CreateMate
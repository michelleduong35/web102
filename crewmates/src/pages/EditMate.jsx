import { supabase } from '../client'
import React from 'react';
import { useParams } from 'react-router-dom';
import './EditMate.css'

const EditMate = ({data}) => {

    const {id} = useParams();
    const [mate, setMate] = useState({id: null, name: "", speed: 0, color: ""});

    const updateMate = async (event) => {
        event.preventDefault()
        await supabase
            .from('Mates')
            .update({name: mate.name, speed: mate.speed, color: mate.color})
            .eq('id', id)
            
        window.location = "/";
    }

    const deleteMate = async (event) => {
        event.preventDefault()
        await supabase
            .from('Mates')
            .delete()
            .eq('id', id);
        window.location = "http://localhost:3000/";
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setPost( (prev) => {
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
                <input type="text" id="name" name="name" value={mate.name} onChange={handleChange} /><br />
                <br/>

                <label for="speed">Speed (mph)</label><br />
                <input type="int8" id="speed" name="speed" value={mate.speed} onChange={handleChange} /><br />
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
                <input type="submit" value="Submit" onClick={updateMate}/>
                <button className="deleteButton" onClick={deleteMate}>Delete</button>
            </form>
        </div>
    )
}

export default EditMate
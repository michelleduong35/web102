import { supabase } from '../client'
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';

const ReadMates = (props) => {

    const [mates, setMates] = useState([]);

    useEffect(() => {
        setMates(props.data);
        const fetchMates = async () => {
            const {data} = await supabase
              .from('Mates')
              .select()
              .order('created_at', { ascending: true })
          
            setMates(data)
          }
        fetchMates();
    }, [props]);
    
    return (
        <div className="ReadMates">
            {
                mates && mates.length > 0 ?
                mates.map((mate,index) => 
                   <Card id={mate.id} name={mate.name} speed={mate.speed} color={mate.color}/>
                ) : <h2>{'No Crewmates Yet 😞'}</h2>
            }
        </div>  
    )
}

export default ReadMates;
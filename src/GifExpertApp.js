import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import {GifGrid} from './components/GifGrid'

const GifExpertApp = () => {

    const [categories, setcategories] = useState([])
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setcategories = {setcategories}/>
            <hr />
            <ol>
                {
                    categories.map( category => <GifGrid category = {category}/>)
                }
            </ol>
        </div>
    )
}

export default GifExpertApp;

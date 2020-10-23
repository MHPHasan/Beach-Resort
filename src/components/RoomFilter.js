import React from 'react'
import { useContext } from 'react'
import { RoomContext } from '../context'
import Title from '../components/Title'

// get all unique values
const getUnique = (items, value) => {
    return [ ...new Set(items.map(item => item[value]))]
}

function RoomFilter({ rooms }) {

    const context = useContext(RoomContext);

    const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;

    // get unique types
    let types = getUnique(rooms, "type");

    // add all
    types = ["all", ...types];

    // map to jsx
    types = types.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    
    let people = getUnique(rooms, "capacity");

    people = people.map((item, index) => {
        return <option value={item} key={index}>{item}</option>
    });

    return <section className="filter-container">
        <Title title="Search Rooms" />
        <form className="filter-form">
            {/* Slelect Type */}
            <div className="form-group">
                <label htmlFor="type">room type</label>
                <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                    {types}
                </select>
            </div>
            {/* End Select Type */}

            {/* Guests */}
            <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                    {people}
                </select>
            </div>
            {/* End Guests */}

            {/* Room Price */}
            <div className="form-group">
                <label htmlFor="price">Room Price ${price}</label>
                <input type="range" name="price" min={minPrice} max={maxPrice} id="price" onChange={handleChange} className="form-control" value={price} />
            </div>
            {/* End Room Price */}

            {/* Room Size */}
            <div className="form-group">
                <label htmlFor="size">Room Size</label>
                <div className="size-inputs">
                    <input type="number" id="size" onChange={handleChange} name="minSize" value={minSize} className="size-input" />
                    <input type="number" id="size" onChange={handleChange} name="maxSize" value={maxSize} className="size-input" />
                </div>
            </div>
            {/* End Room Size */}

            {/* Extras */}
            <div className="form-group">
                <div className="single-extra">
                    <input type="checkbox" id="breakfast" checked={breakfast} onChange={handleChange} name="breakfast" />
                    <label htmlFor="breakfast">Breakfast</label>
                </div>
                <div className="single-extra">
                    <input type="checkbox" id="pets" checked={pets} onChange={handleChange} name="pets" />
                    <label htmlFor="pets">Pets</label>
                </div>
            </div>
            {/* End Extras */}
        </form>
    </section>
}

export default RoomFilter
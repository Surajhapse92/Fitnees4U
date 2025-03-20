import React, { useEffect, useState } from 'react';
import './MakeDiet.css';
import Navbar from '../../componets/Navbar/Navbar'
import Footer from '../../componets/Footer/Footer'

function MakeDiet() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const listOfLocalStorage = localStorage.getItem('data');
        if (listOfLocalStorage) {
            setData(JSON.parse(listOfLocalStorage));
        }
    }, []);

    function add(event) {
        event.preventDefault();

        const meal = document.getElementById('meal').value;
        const time = document.getElementById('time').value;
        const product = document.getElementById('product').value;
        const description = document.getElementById('description').value;

        if (meal === 'Select' || time === 'Select Time' || !product || !description) {
            alert('Please fill in all fields.');
            return;
        }

        const newData = [...data, { meal, time, product, description }];
        setData(newData);
        localStorage.setItem('data', JSON.stringify(newData));

        document.getElementById('meal').value = 'Select';
        document.getElementById('time').value = 'Select Time';
        document.getElementById('product').value = '';
        document.getElementById('description').value = '';
    }

    return (
        <>
            <Navbar />

            <div>
                <div className="form-container">
                    <div className="form-items form-dark-bg" id="form">
                        <form onSubmit={add}>
                            <h2>Make Your Own Diet Plan</h2>
                            <div className="content">
                                <div className="input-box">
                                    <label htmlFor="meal">Select Meal</label>
                                    <select name="meal" id="meal" required>
                                        <option>Select</option>
                                        <option>Wake Up</option>
                                        <option>Breakfast</option>
                                        <option>Snack</option>
                                        <option>Lunch</option>
                                        <option>Dinner</option>
                                        <option>Sleep</option>
                                    </select>
                                </div>
                                <div className="input-box">
                                    <label htmlFor="time">Select Time</label>
                                    <select name="time" id="time" required>
                                        <option>Select Time</option>
                                        <option>6 AM - 7 AM</option>
                                        <option>7 AM - 8 AM</option>
                                        <option>11 AM - 12 PM</option>
                                        <option>1 PM - 2 PM</option>
                                        <option>4 PM - 5 PM</option>
                                        <option>8 PM - 9 PM</option>
                                        <option>10 PM - 11 PM</option>
                                    </select>
                                </div>
                                <div className="input-box">
                                    <label htmlFor="product">Product</label>
                                    <input type="text" placeholder="Add Product" id="product" required />
                                </div>
                                <div className="input-box">
                                    <label htmlFor="description">Description</label>
                                    <input type="text" placeholder="Description" id="description" required />
                                </div>
                            </div>
                            <div className="alert">
                                <p>Make a proper diet to upgrade your body.</p>
                            </div>
                            <div className="btn-container">
                                <button type="submit" className="btn">Confirm</button>
                                <button type="reset" className="btn">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="table-container" id="yourDiet">
                    <p>Your Diet Plan</p>
                    <table border="1">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Meal</th>
                                <th>Time</th>
                                <th>Product</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody id="table-content">
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.meal}</td>
                                    <td>{item.time}</td>
                                    <td>{item.product}</td>
                                    <td>{item.description}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

            </div>
            <Footer />
        </>
    );
}

export default MakeDiet;


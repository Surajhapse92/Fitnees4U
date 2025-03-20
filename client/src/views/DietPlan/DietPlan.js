import React from 'react';
import './DietPlan.css';
import Navbar from '../../componets/Navbar/Navbar'
import Footer from '../../componets/Footer/Footer'
import roastchickenImg from './png/proteins/roast-chicken.png';
import yogurtImg from './png/proteins/yogurt.png';
import soyImg from './png/proteins/soy.png';
import eggImg from './png/proteins/egg.png';
import almondImg from './png/proteins/almond.png';
import redbeansImg from './png/proteins/red-beans.png';
import carbImg from './png/proteins/carb.png';
import eggbigImg from './png/proteins/egg-big.png';
import bananaImg from './png/proteins/banana.png';
import dietImg from './png/proteins/diet.png';
import { Link } from 'react-router-dom';

function DietPlan() {
    const data = {
        muscleGain: {
            wakeup: ['Wake Up', '6 AM - 7 AM', 'Warm Water', 'Early in morning when you wake up <br /> drink warm water (Empty Stomach)'],
            BreakFast: ['BreakFast', '7 AM - 8 AM', 'Oats and milk', 'Oats Meal 40gm to 50gm'],
            Launch: ['Launch', '12 PM - 1 PM ', 'Food', 'Dal(1 bowl) + Roti/Rice with salad & 2 eggs or paneer 100gm'],
            Snack: ['Snack', '3 PM - 4 PM', 'Fruits', 'Banana or any seasonal fruits'],
            WorkOut: ['WorkOut', '6 PM - 7 PM', 'Protein Shake', '(Follow our week workout plan) + Protein Shake(Optional)'],
            Dinner: ['Dinner', '9 PM - 10 PM', 'Food', 'Veggie(Sabzi) + 2 Roti with eggs/chicken/paneer(50-100gm)'],
            Sleep: ['Sleep', '10 PM - 11 PM', '--', 'Sleep at least 6 to 8 hours daily'],
        },
        weightLoss: {
            wakeup: ['Wake Up', '6 AM - 7 AM', 'Warm Water or Green Tea', 'Early in morning when you wake up <br /> drink warm water or green tea'],
            BreakFast: ['BreakFast', '7 AM - 8 AM', 'Oats and milk', 'Oats Meals with warm milk 1 bowl 40gm'],
            Snack1: ['Snack', '11 AM - 12 PM', 'Fruit', 'Apple & orange or any seasonal fruits'],
            Launch: ['Launch', '1 PM - 2 PM ', 'Food', 'Dal(1 bowl) + 2 Roti with salad & 4 eggs or paneer 100gm'],
            Snack: ['Snack', '4 PM - 5 PM', 'Coffee', 'Coffee with less sugar or green tea'],
            Dinner: ['Dinner', '8 PM - 9 PM', 'Food', 'Veggie(Sabzi) + 2 Roti with salad & chicken or paneer(100gm)'],
            Sleep: ['Sleep', '10 PM - 11 PM', '--', 'Sleep at least 6 to 8 hours daily'],
        },
    };

    function renderPlan(planType) {
        const muscleGainElement = document.getElementById('table-content');
        const selectedPlan = planType === 'gain' ? data.muscleGain : data.weightLoss;

        const tableRows = Object.keys(selectedPlan).map((key) => {
            const [name, time, product, description] = selectedPlan[key];
            return `
                <tr>
                    <td>${name}</td>
                    <td>${time}</td>
                    <td>${product}</td>
                    <td>${description}</td>
                </tr>
            `;
        }).join('');

        muscleGainElement.innerHTML = `
            <p>One day Plan For ${planType === 'gain' ? 'Muscle Gain' : 'Weight Loss'}</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Time</th>
                        <th>Product</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        `;
    }

    return (
      <>
            <Navbar active="diet" />

            <div className="protein-container">
                <h1>How Much Protein Do You Need TO Build Muscle?</h1>
                <div className="protein-card-content">
                    <div className="card" id="card1">
                        <h2>How Do You Grow Muscle?</h2>
                        <div className="inner">
                            <p>Enough Protein</p>
                            <span><i className="fa-solid fa-plus"></i></span>
                            <p>Resistance exercise</p>
                        </div>
                    </div>
                    <div className="card card2" id="card2">
                        <h2>What is enough protein?</h2>
                        <span className="formula">0.8 - 2.0 g/kg</span>
                        <p>Weight(lbs) / 2.2 = Weight(kg)</p>
                        <p>Weight(kg) x 0.8 = Protein</p>
                    </div>
                    <div className="card" id="card3">
                        <h2>Protein Sources</h2>
                        <div className="protein-foods">
                            <div className="food">
                                <img src={roastchickenImg} alt="protein food" />
                                <p>Meat & Fish</p>
                            </div>
                            <div className="food">
                                <img src={yogurtImg} alt="protein food" />
                                <p>Dairy</p>
                            </div>
                        </div>
                        <div className="protein-foods">
                            <div className="food">
                                <img src={soyImg} alt="protein food" />
                                <p>Soy & Peas</p>
                            </div>
                            <div className="food">
                                <img src={eggImg} alt="protein food" />
                                <p>Eggs</p>
                            </div>
                        </div>
                        <div className="protein-foods">
                            <div className="food">
                                <img src={almondImg} alt="protein food" />
                                <p>Nuts & Seeds</p>
                            </div>
                            <div className="food">
                                <img src={redbeansImg} alt="protein food" />
                                <p>Beans</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="focus">
                <h1>What to eat before & after workouts to build muscle</h1>
                <div className="focus-card">
                    <div className="card" id="fcard1">
                        <h2>Focus on:</h2>
                        <div className="carbs-container">
                            <div className="carbs one-carb">
                                <img src={carbImg} alt="carbs" />
                                <h3>Carbs</h3>
                                <p>Provide fuel muscles need to perform and recover</p>
                                <h4>Choose whole, complex carbs</h4>
                                <p>Whole grains, vegetables, legumes</p>
                            </div>
                            <div className="carbs one-carb">
                                <img src={eggbigImg} alt="carbs" />
                                <h3>Protein</h3>
                                <p>Provides amino acids needed for muscle-building</p>
                                <h4>Choose whole proteins</h4>
                                <p>Grass-fed meat, pastured poultry eggs, quality protein powder</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="focus-card">
                    <div className="card" id="fcard2">
                        <h2>Before Workout:</h2>
                        <div className="carbs-container">
                            <div className="carbs pre-workout">
                                <p>60-90 minutes in advance</p>
                                <img src={bananaImg} alt="carbs" />
                            </div>
                            <div className="carbs pre-workout">
                                <span>Up to 50 grams of carbs + <br /> 10 grams of protein</span>
                                <ul>
                                    <li><i className="fa-solid fa-arrow-right"></i> Whole-grain toast + eggs</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Oats + unsweetened yogurt + berries</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Banana + eggs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="focus-card">
                    <div className="card" id="fcard3">
                        <h2>After Workout:</h2>
                        <div className="carbs-container">
                            <div className="carbs post-workout">
                                <p>Within 60 minutes</p>
                                <img src={dietImg} alt="carbs" />
                            </div>
                            <div className="carbs post-workout">
                                <span>Up to 60 grams of carbs + <br /> 15 grams of protein</span>
                                <ul>
                                    <li><i className="fa-solid fa-arrow-right"></i> Sweet potato + eggs</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Rice cakes + turkey + hummus</li>
                                    <li><i className="fa-solid fa-arrow-right"></i> Chicken salad + fruit</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
    <div class="one-day-container">
        <h2>One Day Diet Plan</h2>
        <div class="gain-loss-container">
            <button type="button" class="btn" onClick={() => renderPlan('gain')} >For Muscle Gain</button>
            <button type="button" class="btn" onClick={() => renderPlan('lose')} >For Weight Loss</button>
            <Link to="/makediet"><button type="button" class="btn">Make Your Diet</button></Link>
        </div>

        <div class="table-container" id="table-content">
            <p>One day Plan For Weight Loss</p>
            <table border="1">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Time</th>
                        <th>Product</th>
                        <th>Description</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Wake Up</td>
                        <td>6 AM - 7 AM</td>
                        <td>Warm Water or Green Tea</td>
                        <td>Early in morning when you wake up <br /> drink warm water or green tea</td>
                    </tr>

                    <tr>
                        <td>BreakFast</td>
                        <td>7 AM - 8 AM</td>
                        <td>Oats and milk</td>
                        <td>Oats Meals with warm milk 1 bowl 40gm</td>
                    </tr>
                    <tr>
                        <td>Snack</td>
                        <td>11 AM - 12 PM</td>
                        <td>Fruit</td>
                        <td>Apple & orange or any seasonal fruits</td>
                    </tr>

                    <tr>
                        <td>Launch</td>
                        <td>1 PM - 2 PM</td>
                        <td>Food</td>
                        <td>Dal(1 bowl) + 2 Roti with salad & 4 eggs or paneer 100gm</td>
                    </tr>

                    <tr>
                        <td>Snack</td>
                        <td>4 PM - 5 PM</td>
                        <td>Coffee</td>
                        <td>Coffe with less sugar or green tea</td>
                    </tr>

                    <tr>
                        <td>Dinner</td>
                        <td>8 PM - 9 PM</td>
                        <td>Food</td>
                        <td>Veggle(Sabzi) + 2 Roti with salad & chicken or paneer(100gm)</td>
                    </tr>

                    <tr>
                        <td>Sleep</td>
                        <td>10 PM - 11 PM</td>
                        <td>--</td>
                        <td>Sleep at least 6 to 8 hours daily</td>
                    </tr>

                </tbody>
            </table>
        </div>
    </div>
    
    
    <div class="meal-plan-container meal-plan-container-light" id="mealPlan">
        <h2>2400-Calorie Meal Plan For Building Muscle</h2>
        <p>This Plan includes three balanced meals and two snacks daily,providing the perfect mix of 200 grams of
            protein,243 grams of carbohydrates, and 70g of dietary fats.</p>
        <table border="1">
            <thead>
                <tr>
                    <th>Macros</th>
                    <th>Grams</th>
                    <th>Calories</th>
                    <th>% of 2400</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Protein</td>
                    <td>200 g</td>
                    <td>880</td>
                    <td>33.3%</td>
                </tr>

                <tr>
                    <td>Carbs</td>
                    <td>243 g</td>
                    <td>972</td>
                    <td>40.5%</td>
                </tr>

                <tr>
                    <td>Facts</td>
                    <td>70 g</td>
                    <td>630</td>
                    <td>26.3%</td>
                </tr>
            </tbody>
        </table>
        <div class="calories-card">
            <div class="card calories-card-dark" id="ccard1">
                <h4>BreakFast</h4>
                <p>Chia Seed Mango Pudding</p>
                <ul>
                    <li>Chia Seeds</li>
                    <li>Protein Powder</li>
                    <li>Frozen Mango</li>
                    <li>Milk</li>
                    <li>Greek yogurt</li>
                    <li>Honey</li>
                </ul>
            </div>
            <div class="card calories-card-dark" id="ccard2">
                <h4>Lunch</h4>
                <p>Protein Pasta Salad</p>
                <ul>
                    <li>Cucumbers</li>
                    <li>Cherry Tomato</li>
                    <li>Red Onion</li>
                    <li>Black Beans</li>
                    <li>Whole Grain Pasta</li>
                    <li>Shrimp</li>
                </ul>
            </div>
            <div class="card calories-card-dark" id="ccard3">
                <h4>Dinner</h4>
                <p>Lemon Pepper Tilapia</p>
                <ul>
                    <li>Tuna salad</li>
                    <li>Baby carrots</li>
                    <li>Cucumber</li>
                    <li>Celery</li>
                    <li>Wheat crackers</li>
                </ul>
            </div>
            <div class="card calories-card-dark" id="ccard4">
                <h4>Snack</h4>
                <p>Almonds and a Hard Boiled Egg</p>
                <ul>
                    <li>Almonds</li>
                    <li>Egg</li>
                </ul>
            </div>
        </div>
    </div>

            <Footer />
      </>
);
}

export default DietPlan;



// import React from 'react'
// import './DietPlan.css'
// import Navbar from '../../componets/Navbar/Navbar'
// import Footer from '../../componets/Footer/Footer'
// import roastchickenImg from './png/proteins/roast-chicken.png'
// import yogurtImg from './png/proteins/yogurt.png'
// import soyImg from './png/proteins/soy.png'
// import eggImg from './png/proteins/egg.png'
// import almondImg from './png/proteins/almond.png'
// import redbeansImg from './png/proteins/red-beans.png'
// import carbImg from './png/proteins/carb.png'
// import eggbigImg from './png/proteins/egg-big.png'
// import bananaImg from './png/proteins/banana.png'
// import dietImg from './png/proteins/diet.png'


// function DietPlan() {


//     const data = {
//         "muscleGain": {
//             "wakeup": ["Wake Up", "6 AM - 7 AM", "Warm Water", "Early in morning when you wake up <br /> drink warm water (Empty Stamach)"],

//             "BreakFast": ["BreakFast", "7 AM - 8 AM", "Oats and milk", "Oats Meal 40gm to 50gm"],

//             "Launch": ["Launch", "12 PM - 1 PM ", " Food", " Dal(1 bowl) + Roti/Rice with salad & 2 eggs or paneer 100gm "],

//             "Snack": ["Snack", "3 PM - 4 PM", "Fruits ", " Banana or any seasonal fruits "],

//             "WorkOut": ["WorkOut", "6 PM - 7 PM", " Protein Shake ", " (Follow our week workout plan) + Protein Shake(Optional)"],

//             "Dinner": ["Dinner", "9 PM - 10 PM", " Food ", " Veggle(Sabzi) + 2 Roti with eggs/chicken/paneer(50-100gm)"],

//             "Sleep": ["Sleep", "10 PM - 11 PM", " -- ", " Sleep at least 6 to 8 hours daily "]
//         },

//         "weightLoss": {
//             "wakeup": ["Wake Up", "6 AM - 7 AM", "Warm Water or Green Tea", "Early in morning when you wake up <br /> drink warm water or green tea"],

//             "BreakFast": ["BreakFast", "7 AM - 8 AM", "Oats and milk", "Oats Meals with warm milk 1 bowl 40gm"],

//             "Snack1": ["Snack", "11 AM - 12 PM", "Fruit", "Apple & orange or any seasonal fruits"],

//             "Launch": ["Launch", "1 PM - 2 PM ", " Food ", " Dal(1 bowl) + 2 Roti with salad & 4 eggs or paneer 100gm "],

//             "Snack": ["Snack", "4 PM - 5 PM", " Coffee ", " Coffe with less sugar or green tea "],

//             "Dinner": ["Dinner", "8 PM - 9 PM", " Food ", " Veggle(Sabzi) + 2 Roti with salad & chicken or paneer(100gm)"],

//             "Sleep": ["Sleep", "10 PM - 11 PM", " -- ", " Sleep at least 6 to 8 hours daily "]
//         }

//     }
//     function muscleGain(receive) {
//         const muscleGainElement = document.getElementById('table-content');

//         if (receive == 'gain') {
//             muscleGainElement.innerHTML = `  <p>One day Plan For Muscle Gain</p>
//             <table border="1">
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Time</th>
//                     <th>Product</th>
//                     <th>Description</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 <tr>
//                     <td>${data.muscleGain.wakeup[0]}</td>
//                     <td>${data.muscleGain.wakeup[1]}</td>
//                     <td>${data.muscleGain.wakeup[2]}</td>
//                     <td>${data.muscleGain.wakeup[3]}</td>
//                 </tr>

//                 <tr>
//                     <td>${data.muscleGain.BreakFast[0]}</td>
//                     <td>${data.muscleGain.BreakFast[1]}</td>
//                     <td>${data.muscleGain.BreakFast[2]}</td>
//                     <td>${data.muscleGain.BreakFast[3]}</td>
//                 </tr>
//                 <tr>
//                     <td>${data.muscleGain.Launch[0]}</td>
//                     <td>${data.muscleGain.Launch[1]}</td>
//                     <td>${data.muscleGain.Launch[2]}</td>
//                     <td>${data.muscleGain.Launch[3]}</td>
//                 </tr>

//                 <tr>
//                     <td>${data.muscleGain.Snack[0]}</td>
//                     <td>${data.muscleGain.Snack[1]}</td>
//                     <td>${data.muscleGain.Snack[2]}</td>
//                     <td>${data.muscleGain.Snack[3]}</td>
//                 </tr>

//                 <tr>
//                     <td>${data.muscleGain.WorkOut[0]}</td>
//                     <td>${data.muscleGain.WorkOut[1]}</td>
//                     <td>${data.muscleGain.WorkOut[2]}</td>
//                     <td>${data.muscleGain.WorkOut[3]}</td>
//                 </tr>

//                 <tr>
//                     <td>${data.muscleGain.Dinner[0]}</td>
//                     <td>${data.muscleGain.Dinner[1]}</td>
//                     <td>${data.muscleGain.Dinner[2]}</td>
//                     <td>${data.muscleGain.Dinner[3]}</td>
//                 </tr>

//                 <tr>
//                     <td>${data.muscleGain.Sleep[0]}</td>
//                     <td>${data.muscleGain.Sleep[1]}</td>
//                     <td>${data.muscleGain.Sleep[2]}</td>
//                     <td>${data.muscleGain.Sleep[3]}</td>
//                 </tr>

//             </tbody>
//         </table > `
//         }
//         else if (receive == 'loss') {
//             muscleGainElement.innerHTML = `  <p>One day Plan For Weight Loss</p>
//             <table border="1">
//             <thead>
//                 <tr>
//                     <th>#</th>
//                     <th>Time</th>
//                     <th>Product</th>
//                     <th>Description</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 <tr>
//                     <td>${data.weightLoss.wakeup[0]}</td>
//                     <td>${data.weightLoss.wakeup[1]}</td>
//                     <td>${data.weightLoss.wakeup[2]}</td>
//                     <td>${data.weightLoss.wakeup[3]}</td>
//                 </tr>

//                 <tr>
//                     <td>${data.weightLoss.BreakFast[0]}</td>
//                     <td>${data.weightLoss.BreakFast[1]}</td>
//                     <td>${data.weightLoss.BreakFast[2]}</td>
//                     <td>${data.weightLoss.BreakFast[3]}</td>
//                 </tr>
                
//                 <tr>
//                     <td>${data.weightLoss.Snack1[0]}</td>
//                     <td>${data.weightLoss.Snack1[1]}</td>
//                     <td>${data.weightLoss.Snack1[2]}</td>
//                     <td>${data.weightLoss.Snack1[3]}</td>
//                 </tr>

//                 <tr>
//                     <td>${data.weightLoss.Launch[0]}</td>
//                     <td>${data.weightLoss.Launch[1]}</td>
//                     <td>${data.weightLoss.Launch[2]}</td>
//                     <td>${data.weightLoss.Launch[3]}</td>
//                 </tr>

//                 <tr>
//                     <td>${data.weightLoss.Snack[0]}</td>
//                     <td>${data.weightLoss.Snack[1]}</td>
//                     <td>${data.weightLoss.Snack[2]}</td>
//                     <td>${data.weightLoss.Snack[3]}</td>
//                 </tr>

//                 <tr>
//                     <td>${data.weightLoss.Dinner[0]}</td>
//                     <td>${data.weightLoss.Dinner[1]}</td>
//                     <td>${data.weightLoss.Dinner[2]}</td>
//                     <td>${data.weightLoss.Dinner[3]}</td>
//                 </tr>

//                 <tr>
//                     <td>${data.weightLoss.Sleep[0]}</td>
//                     <td>${data.weightLoss.Sleep[1]}</td>
//                     <td>${data.weightLoss.Sleep[2]}</td>
//                     <td>${data.weightLoss.Sleep[3]}</td>
//                 </tr>

//             </tbody>
//         </table > `
//         }
//     }


//     return (
//         <div>
//             <Navbar />

//             <div className="protein-container">
//                 <h1>How Much Protein Do You Need TO Build Muscle?</h1>
//                 <div className="protein-card-content">
//                     <div className="card" id="card1">
//                         <h2>How Do You Grow Muscle?</h2>
//                         <div className="inner">
//                             <p>Enough Protein</p>
//                             <span><i className="fa-solid fa-plus"></i></span>
//                             <p>Resistance exercise</p>
//                         </div>
//                     </div>
//                     <div className="card card2" id="card2">
//                         <h2>What is enough protein?</h2>
//                         <span className="formula">0.8 - 2.0 g/kg</span>
//                         <p>Weight(lbs) / 2.2 = Weight(kg)</p>
//                         <p>Weight(kg) x 0.8 = Protein</p>
//                     </div>
//                     <div className="card" id="card3">
//                         <h2>protein sources</h2>
//                         <div className="protein-foods">
//                             <div className="food">
//                                 <img src={roastchickenImg} alt="protein food" />
//                                 <p>Meat & Fish</p>
//                             </div>
//                             <div className="food">
//                                 <img src={yogurtImg} alt="protein food" />
//                                 <p>Dairy</p>
//                             </div>
//                         </div>
//                         <div className="protein-foods">
//                             <div className="food">
//                                 <img src={soyImg} alt="protein food" />
//                                 <p>Soy & Peas</p>
//                             </div>
//                             <div className="food">
//                                 <img src={eggImg} alt="protein food" />
//                                 <p>Eggs</p>
//                             </div>
//                         </div>
//                         <div className="protein-foods">
//                             <div className="food">
//                                 <img src={almondImg} alt="protein food" />
//                                 <p>Nuts & Seeds</p>
//                             </div>
//                             <div className="food">
//                                 <img src={redbeansImg} alt="protein food" />
//                                 <p>Beans</p>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//             <div className="focus">
//                 <h1>What to eat before & after workouts to build muscle</h1>
//                 <div className="focus-card">
//                     <div className="card" id="fcard1">
//                         <h2>Focus on:</h2>
//                         <div className="carbs-container">
//                             <div className="carbs one-carb">
//                                 <img src={carbImg} alt="carbs" />
//                                 <h3>Carbs</h3>
//                                 <p>Provide fuel muscles need to perform and recover</p>
//                                 <h4>choose whole, complex carbs</h4>
//                                 <p>whole grains, vegetables,legumes</p>
//                             </div>
//                             <div className="carbs one-carb">
//                                 <img src={eggbigImg} alt="carbs" />
//                                 <h3>Protein</h3>
//                                 <p>Provides amino acids needed for muscle-building</p>
//                                 <h4>choose whole proteins</h4>
//                                 <p>grass-fed meat, pastured poultry eggs, quality protein powder</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="focus-card">
//                     <div className="card" id="fcard2">
//                         <h2>Before Workout:</h2>
//                         <div className="carbs-container">
//                             <div className="carbs pre-workout">
//                                 <p>60-90 minutes in advance</p>
//                                 <img src={bananaImg} alt="carbs" />
//                             </div>
//                             <div className="carbs pre-workout">
//                                 <span>Up to 50 grams of carbs + <br /> 10 grams of protein</span>
//                                 <ul>
//                                     <li><i className="fa-solid fa-arrow-right"></i> Whole-grain toast + eggs</li>
//                                     <li><i className="fa-solid fa-arrow-right"></i> Oats + unsweetened yogurt + berries</li>
//                                     <li><i className="fa-solid fa-arrow-right"></i> Banana + eggs</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="focus-card">
//                     <div className="card" id="fcard3">
//                         <h2>After workout:</h2>
//                         <div className="carbs-container">
//                             <div className="carbs pre-workout">
//                                 <p>30-60 minutes post workout</p>
//                                 <img src={dietImg} alt="carbs" />
//                             </div>
//                             <div className="carbs pre-workout">
//                                 <span>2:1 ratio of carbs:protein</span>
//                                 <ul>
//                                     <li><i className="fa-solid fa-arrow-right"></i> Protein shake (protein powder + fruit + greens)
//                                     </li>
//                                     <li><i className="fa-solid fa-arrow-right"></i> Brown rice + beef + veggies</li>
//                                     <li><i className="fa-solid fa-arrow-right"></i> Sweet potato + chicken</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="one-day-container">
//                 <h2>One Day Diet Plan</h2>
//                 <div className="gain-loss-container">
//                     <button type="button" className="btn" onclick="muscleGain('gain')">For Muscle Gain</button>
//                     <button type="button" className="btn" onclick="muscleGain('loss')">For Weight Loss</button>
//                     <a href="./../pages/dietForm.html"><button type="button" className="btn">Make Your Diet</button></a>
//                 </div>

//                 <div className="table-container" id="table-content">
//                     <p>One day Plan For Weight Loss</p>
//                     <table border="1">
//                         <thead>
//                             <tr>
//                                 <th>#</th>
//                                 <th>Time</th>
//                                 <th>Product</th>
//                                 <th>Description</th>
//                             </tr>
//                         </thead>

//                         <tbody>
//                             <tr>
//                                 <td>Wake Up</td>
//                                 <td>6 AM - 7 AM</td>
//                                 <td>Warm Water or Green Tea</td>
//                                 <td>Early in morning when you wake up <br /> drink warm water or green tea</td>
//                             </tr>

//                             <tr>
//                                 <td>BreakFast</td>
//                                 <td>7 AM - 8 AM</td>
//                                 <td>Oats and milk</td>
//                                 <td>Oats Meals with warm milk 1 bowl 40gm</td>
//                             </tr>
//                             <tr>
//                                 <td>Snack</td>
//                                 <td>11 AM - 12 PM</td>
//                                 <td>Fruit</td>
//                                 <td>Apple & orange or any seasonal fruits</td>
//                             </tr>

//                             <tr>
//                                 <td>Launch</td>
//                                 <td>1 PM - 2 PM</td>
//                                 <td>Food</td>
//                                 <td>Dal(1 bowl) + 2 Roti with salad & 4 eggs or paneer 100gm</td>
//                             </tr>

//                             <tr>
//                                 <td>Snack</td>
//                                 <td>4 PM - 5 PM</td>
//                                 <td>Coffee</td>
//                                 <td>Coffe with less sugar or green tea</td>
//                             </tr>

//                             <tr>
//                                 <td>Dinner</td>
//                                 <td>8 PM - 9 PM</td>
//                                 <td>Food</td>
//                                 <td>Veggle(Sabzi) + 2 Roti with salad & chicken or paneer(100gm)</td>
//                             </tr>

//                             <tr>
//                                 <td>Sleep</td>
//                                 <td>10 PM - 11 PM</td>
//                                 <td>--</td>
//                                 <td>Sleep at least 6 to 8 hours daily</td>
//                             </tr>

//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             <div className="meal-plan-container meal-plan-container-light" id="mealPlan">
//                 <h2>2400-Calorie Meal Plan For Building Muscle</h2>
//                 <p>This Plan includes three balanced meals and two snacks daily,providing the perfect mix of 200 grams of
//                     protein,243 grams of carbohydrates, and 70g of dietary fats.</p>
//                 <table border="1">
//                     <thead>
//                         <tr>
//                             <th>Macros</th>
//                             <th>Grams</th>
//                             <th>Calories</th>
//                             <th>% of 2400</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>Protein</td>
//                             <td>200 g</td>
//                             <td>880</td>
//                             <td>33.3%</td>
//                         </tr>

//                         <tr>
//                             <td>Carbs</td>
//                             <td>243 g</td>
//                             <td>972</td>
//                             <td>40.5%</td>
//                         </tr>

//                         <tr>
//                             <td>Facts</td>
//                             <td>70 g</td>
//                             <td>630</td>
//                             <td>26.3%</td>
//                         </tr>
//                     </tbody>
//                 </table>
//                 <div className="calories-card">
//                     <div className="card calories-card-dark" id="ccard1">
//                         <h4>BreakFast</h4>
//                         <p>Chia Seed Mango Pudding</p>
//                         <ul>
//                             <li>Chia Seeds</li>
//                             <li>Protein Powder</li>
//                             <li>Frozen Mango</li>
//                             <li>Milk</li>
//                             <li>Greek yogurt</li>
//                             <li>Honey</li>
//                         </ul>
//                     </div>
//                     <div className="card calories-card-dark" id="ccard2">
//                         <h4>Lunch</h4>
//                         <p>Protein Pasta Salad</p>
//                         <ul>
//                             <li>Cucumbers</li>
//                             <li>Cherry Tomato</li>
//                             <li>Red Onion</li>
//                             <li>Black Beans</li>
//                             <li>Whole Grain Pasta</li>
//                             <li>Shrimp</li>
//                         </ul>
//                     </div>
//                     <div className="card calories-card-dark" id="ccard3">
//                         <h4>Dinner</h4>
//                         <p>Lemon Pepper Tilapia</p>
//                         <ul>
//                             <li>Tuna salad</li>
//                             <li>Baby carrots</li>
//                             <li>Cucumber</li>
//                             <li>Celery</li>
//                             <li>Wheat crackers</li>
//                         </ul>
//                     </div>
//                     <div className="card calories-card-dark" id="ccard4">
//                         <h4>Snack</h4>
//                         <p>Almonds and a Hard Boiled Egg</p>
//                         <ul>
//                             <li>Almonds</li>
//                             <li>Egg</li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>


//             <Footer />
//         </div>
//     )
// }

// export default DietPlan
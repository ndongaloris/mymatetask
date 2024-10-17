import React from 'react'
import "./goal.css"

export const Goal = () => {
  return (
    <div className='goal'>
        <h1>Goals</h1>
            <ul className='goalList'>
                <li>
                    <a href="">Spiritual</a>
                </li>
                <li>
                    <a href="">Social</a>
                </li>
                <li>
                    <a href="">Physical</a>
                </li>
                <li>
                    <a href="">Intellectual</a>
                </li>
            </ul>
        <h2>Sub-Goal</h2>
        <h3>Category: The Goals is that you know</h3>
        <ul className='subgoalList' >
            <li>
                <p>This</p>
                <input type="checkbox" />
            </li>
            <li>
                <p>This</p>
                <input type="checkbox" />
            </li>
            <li>
                <p>This</p>
                <input type="checkbox" />
            </li>
            <li>
                <p>This</p>
                <input type="checkbox" />
            </li>
            <li>
                <p>This</p>
                <input type="checkbox" />
            </li>
            <li>
                <p>This</p>
                <input type="checkbox" />
            </li>
        </ul>
    </div>
  )
}

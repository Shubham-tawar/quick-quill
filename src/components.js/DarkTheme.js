import React from 'react'

export default function Darktheme() {
    const handleDarkTheme = () => {
        document.body.style.backgroundColor = '#343a40'; // Dark background
        document.body.style.color = 'white'; // Light text color
    }
    const handleLightTheme = () =>{
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black'; // Dark text color
    }
  return (
    <div>
      <button type="button" className="btn btn-dark m-3" onClick={handleDarkTheme}>Dark Mode</button>
      <button type="button" className="btn btn-light m-3" onClick={handleLightTheme}>Light Mode</button>
    </div>
  )
}

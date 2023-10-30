
function Dog() {
    
    return (
     <>
     <h1>Pablo</h1>
     <p>Pablo is a 4 year old husky I got from a loving home in north miami. He is protective and aggressive and weights 80lbs</p>
     </>
    )
  }

// const obj = {x: 1, y: 2, z: 3}
// const{x,y,z}



  function Dog(props) {
    const { name, desc} = props
    return (
        <>
        <h2>{name}</h2>
        <p>{desc}</p>
        </>
    )
}






  function App (){
    return (
        <main>
            <h1>Dogs:</h1>
            <Dog name=" Pablo" desc="4yr old husky"/>
            <Dog name=" Charli" desc="All heart and no brains"/>
            <Dog name=" luci" desc="Made Clifford look murderous"/>
        </main>
    )
  }
//Global ()
    //Local ()
        //Local
    //Local
// variable shadowing : variables defined in different scopes
// Local variable value shadowing over the parents
// name = Jen instead of let name = Jen creates a leaked global in this case

let name = "Brian"
if(true){
    let name = "Mike"
    if(true){
        name = "Jen"
        console.log(name)

    }
}

if(true){
    console.log(name)
}


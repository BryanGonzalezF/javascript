const tipoDeSuscripciones = "free"


if (tipoDeSuscripciones==="free"){
    console.log("Solo puedes tomar los cursos gratis")
}else if(tipoDeSuscripciones === "Basic"){
    console.log("Puedes tomar casi todos los cursos de platzi durante un mes")
}else if (tipoDeSuscripciones === "Expert"){
    console.log("Puedes tomar casi todos los curso de platzi durante un año")
} else if(tipoDeSuscripciones==="ExpertPlus"){
    console.log("Tú y alguien más pueden tomar todos los cursos de platzi durante un año")
}
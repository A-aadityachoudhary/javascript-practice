interface rectangle  {
    height:number,
    width:number
}
interface colourRectangle extends rectangle{
    colour:string
}
const colourRect:colourRectangle={
    height:20,
    width:150,
    colour:"blue"
}
console.log(colourRect)
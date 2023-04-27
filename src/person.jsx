const Person=({person})=>{
  return (
    <article className="person">
    <img  src={person.image} alt={person.name} className="img"></img>
    <div>
      <h4>{person.name}</h4>
      <p>{person.age}</p>
    </div>
    </article>
  )
}
export default Person
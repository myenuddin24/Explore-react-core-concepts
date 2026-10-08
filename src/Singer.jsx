export default function Singer({singer}) {
    return (
        <div>
            <h3>Singer: {singer.name}</h3>
            <h4>Age: {singer.age}</h4>
        </div>
    )
}
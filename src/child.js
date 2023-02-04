function ChildComponent(props){
    const { name,age } = props
    return (
        <div>
            <p>내 이름은 {name}이고 {age}살이다</p>
        </div>)
}

export default ChildComponent; 
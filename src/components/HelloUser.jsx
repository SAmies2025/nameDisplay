export default  function HelloUser({ firstName, middleName, lastName }) {
    return (
        <h1>Hello {`${firstName} ${middleName} ${lastName}`}!</h1>
    )
    
}
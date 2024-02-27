import PropTypes from 'prop-types'

function Student(props) {
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Gay: {props.isGay ? "Yes" : "No"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isGay: PropTypes.bool,
}
Student.defaultProps = {
    name: "Fulano",
    age: 0,
    isGay: false,
}
export default Student
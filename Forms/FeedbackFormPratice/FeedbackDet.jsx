function FeedbackDet(props){
    return (
        <>
            <h2 style={{ color: 'blue', fontFamily: 'Arial, sans-serif', marginBottom: '10px' }}>
                Name of Customer: {props.name}
            </h2>
            <h3 style={{ color: 'green', fontFamily: 'Verdana, sans-serif', marginBottom: '8px' }}>
                Rating Given: {props.Score}
            </h3>
            <p style={{ color: 'gray', fontFamily: 'Tahoma, sans-serif', lineHeight: '1.5' }}>
                Comment: {props.Comment}
            </p>
        </>
    )
}
export default FeedbackDet;

type squareProps={
    value: string,
onClick: () =>void
}

const SquareButton = ({onClick,value}:squareProps) => {
    return (
        <button style={{width:"100px",height:"100px"}} type="button" onClick={onClick}>
            {value}
        </button>
    );
};

export default SquareButton;
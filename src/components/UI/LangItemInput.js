import classes from './LangItemInput.module.css'

const LangItemInput = (props) => {
    return (
        <div className={classes.general}>
            <input label={props.label} type="radio" id={props.id} value={props.value} name={props.name} onChange={props.onChange}/>
        </div>
    )
}

export default LangItemInput
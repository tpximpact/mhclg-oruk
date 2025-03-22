import styles from './Register.module.css'

const FieldError = ({ formState, name }) => {
	return <span className={'error ' + styles.Error}>{formState.fieldErrors[name]?.[0]}</span>
}

export { FieldError }

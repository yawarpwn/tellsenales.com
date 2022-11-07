const WithDefaults = (component, defaultProps) => {
	component.defaultProps = defaultProps
	return component
}

export default WithDefaults

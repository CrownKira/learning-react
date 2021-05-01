import React from 'react'
import { Field, reduxForm } from 'redux-form';

class StreamForm extends React.Component {
    componentDidMount() {
        // console.log(this.props);
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => { //destructure the input argument out of the object
        // console.log(meta);
        // return <input {...input} />; //new syntax: Take the key value pairs add them as props to the input element 
        // ie. add event listeners and handlers to the field
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={className}>
                <label htmlFor="">{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = (formValues) => { // onSubmit is passed in the formValues instead of event object!!
        //not dealing with event object!!
        //don't need handle preventDefault now since handleSubmit deals with that for us 
        // console.log(formValues);
        this.props.onSubmit(formValues); //passed down from parents
    };

    // Field passes input properties and meta properties to the input component
    // input properties: all the attributes of the input
    // meta properties: useful state of an input eg. touched, etc 
    // all additional props passed into the component
    // this.props.handleSubmit(this.onSubmit) // this actly returns a function ***
    // that takes event as an argument ie.
    // this.props.handleSubmit(this.onSubmit) //will be eval since it is func application
    // >> event=>f(event) // this 'f' takes in event then invoke onSubmit(e.target.values) 
    // then invoke action creator then dispatch...
    // , this.onSubmit thus doesnt need event as a parameter
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field
                    name="title"
                    component={this.renderInput}
                    label="Enter Title"
                />
                <Field
                    name="description"
                    component={this.renderInput}
                    label="Enter Description"
                />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }
};

const validate = (formValues) => { // validate func is passed to reduxForm as an argument!!
    // validate invoked when:
    // formWrapped component did muount and onChange input
    // update the error state of the field
    console.log('validate is invoked')
    const errors = {};

    if (!formValues.title) {
        errors.title = 'You must enter a title';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
};

//pass in a ton of props to stream create
// define tons of methods in the wrapper component then pass them as callback func to StreamCreate
export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

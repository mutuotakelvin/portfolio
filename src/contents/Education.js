import React, { Component } from 'react';
import Widecard from '../components/Widecard';
class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title="Bachelor of Science(Computer Science)" where="Machakos University" from="July 2019" to="Present" />
                <Widecard title=" HSC" where="LangLang Secondary School" from="2015" to="2018" />
            </div>
        )
    }
}
export default Education
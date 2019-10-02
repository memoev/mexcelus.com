import React from 'react'

export default class subForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
    }
    render() {
        return (
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="bot-field" />
                <h3>
                    Don't be a stranger!
                </h3>
                <br></br>
                <p>
                    I'm all about new and old tech. Let’s talk about geeky stuff or building something together. <b>never any ads, spam, or affiliate links</b>. 
                </p>
                <div style={{ textAlign: "center" }}>
                    <label htmlFor="name" style={{
                        paddingRight: "10px",
                    }}>
                        <b>email:</b>
                        <input type="email" name="email" placeholder="johndoe@me.com" style={{
                            marginLeft: "10px", width: "250px"
                        }} />
                    </label>
                    <button name="button" type="submit">submit</button>
                </div>
            </form>
        )
    }
}
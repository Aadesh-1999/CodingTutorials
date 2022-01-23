import React from 'react';
import PropTypes from 'prop-types';
export const Footer = (props) => {
    let footerStyle={
        height: "100%", color:"red" ,
    }

    return (
        <div className='footerParent fixed-bottom mt-5 shadow bg-light'>
            <footer className='row d-flex jutify-content-centre align-content-centre border border-white' style={footerStyle}>
                <div className='col' >
                    Copyright &copy; {props.name}
                </div>
            </footer>
        </div>
    )
}

Footer.defaultProps={
  name: "Aadesh"
}
Footer.propTypes={
  name:PropTypes.string
}
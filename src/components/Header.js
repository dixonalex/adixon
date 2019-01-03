import React from 'react'
import PropTypes from 'prop-types'
import avatar from '../images/avatar.png'

const HeadlineMargin = {
	marginBottom: 0
}

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo" style={{overflow: "hidden"}}>
		<span className="image fit"><img src={avatar} alt="" /></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Alex Dixon</h1>
		<p style={HeadlineMargin}>Full Stack Data Engineer</p>
		<p style={HeadlineMargin}>AWS / Python / Postgres / Redshift</p>
		<p style={HeadlineMargin}>Running & Biking Enthusiast</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header

import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class About extends Component {
    render() {
        return (
            <div>
            <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/">
                <img src="https://jsonworld.com/content/uploads/blog-images/react.png" width="30" height="30" className="d-inline-block align-top" alt="" />
                Mat Hayward
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink style={{ color: "cyan" }} className="nav-item nav-link active" to="/">About <span className="sr-only">(current)</span></NavLink>
                        <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/contact">Contact</NavLink>
                        <NavLink style={{ color: "gray" }} className="nav-item nav-link" to="/portfolio">Portfolio</NavLink>
                    </div>
                </div>
            </nav>
                <div className="jumbotron jumbotron-fluid">
                    <h1>Mat Hayward</h1>
                    <p>&nbsp;&nbsp;&nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hanc se tuus Epicurus omnino ignorare dicit quam aut qualem esse velint qui honestate summum bonum metiantur. An vero displicuit ea, quae tributa est animi virtutibus tanta praestantia? Vides igitur, si amicitiam sua caritate metiare, nihil esse praestantius, sin emolumento, summas familiaritates praediorum fructuosorum mercede superari. Ita fit cum gravior, tum etiam splendidior oratio. Sit, inquam, tam facilis, quam vultis, comparatio voluptatis, quid de dolore dicemus? At ille non pertimuit saneque fidenter: Istis quidem ipsis verbis, inquit; Est autem eius generis actio quoque quaedam, et quidem talis, ut ratio postulet agere aliquid et facere eorum. Duo Reges: constructio interrete.</p>
                </div>
            </div>
        );
    };
};

export default About;
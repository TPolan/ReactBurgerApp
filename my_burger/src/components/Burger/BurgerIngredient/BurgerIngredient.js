import React, {Component} from "react";
import classes from './BurgerIngredient.css'
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {

        let ingredient;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className={classes.BreadBottom}>1</div>;
                break;

            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}>1</div>
                        <div className={classes.Seeds2}>1</div>
                    </div>
                );
                break;

            case ('meat'):
                ingredient = <div className={classes.Meat}>1</div>;
                break;

            case ('salad'):
                ingredient = <div className={classes.Salad}>1</div>;
                break;

            case ('bacon'):
                ingredient = <div className={classes.Bacon}>1</div>;
                break;

            case ('cheese'):
                ingredient = <div className={classes.Cheese}>1</div>;
                break;
            default:
                ingredient = null
        }
        return ingredient;
    }
}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;
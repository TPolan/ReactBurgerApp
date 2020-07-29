import React, {Component} from "react";
import './BurgerIngredient.css'
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
    render() {

        let ingredient;

        switch (this.props.type) {
            case ('bread-bottom'):
                ingredient = <div className='BreadBottom'>BS</div>;
                break;

            case ('bread-top'):
                ingredient = (
                    <div className='BreadTop'>BS
                    </div>
                );
                break;

            case ('meat'):
                ingredient = <div className='Meat'>BS</div>;
                break;

            case ('salad'):
                ingredient = <div className='Salad'>BS</div>;
                break;

            case ('bacon'):
                ingredient = <div className='Bacon'>BS</div>;
                break;

            case ('cheese'):
                ingredient = <div className='Cheese'>BS</div>;
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
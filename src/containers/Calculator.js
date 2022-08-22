import { connect } from "react-redux";
import "../css/Calculator.css";
import { currentEquation, fullEquation } from "../actions/CalculatorAction";

// maps the search field to the properties of the component
const mapStateToProps = state => ({
    current: state.calculatorReducer.current,
    full: state.calculatorReducer.full
});

// allows us to use the onSearchChange function
const matchDispatchToProps = dispatch => ({
    setCurrentEquation: (value) => dispatch(currentEquation(value)),
    setFullEquation: (value) => dispatch(fullEquation(value))
});


const Calculator = ({ current, full, setCurrentEquation, setFullEquation }) => {


    const btnClick = (event) => {
        const { innerHTML, className } = event.target;

        // number entered
        if (className === "number") {
            if (current === "0" && innerHTML === "0")
                return;
            else if (current === "0" || full.includes("=")) {
                setCurrentEquation(innerHTML);
                setFullEquation(innerHTML);
            }
            else {
                // remove leading - + signs
                setCurrentEquation((isNaN(current) && current !== "." ? "" : current) + innerHTML);
                setFullEquation(full + "" + innerHTML);
            }
        }
        // add or subtract  
        // TODO : RESOLVE BUG WITH OPERATIONS
        else if (innerHTML === "+" || innerHTML === "-" || innerHTML === "*" || innerHTML === "/") {

            if ((full.length > 0 && full[full.length - 1] === "*" && innerHTML === '*') ||
                (full.length > 0 && full[full.length - 1] === "/" && innerHTML === '/') ||
                (full.length > 0 && full[full.length - 1] === "+" && innerHTML === '+') ||
                (full.length > 1 && full[full.length - 1] === "-" && innerHTML === '+')) return;

            setFullEquation(full.includes("=") ? current + innerHTML : full + innerHTML);
            setCurrentEquation(innerHTML);
        }

        // check valid decimal
        else if (innerHTML === "." && !(String(current).includes("."))) {
            setCurrentEquation((isNaN(current) ? "" : current) + innerHTML);
            setFullEquation(full + ".");
        }
        // clear the form
        else if (innerHTML === "AC") {
            setCurrentEquation("0");
            setFullEquation("");
        }
        else if (innerHTML === "=") {
            // eslint-disable-next-line
            const total = String(eval(full));
            setCurrentEquation(total);
            setFullEquation(full + "=" + total)
        }
    }

    return (
        <div className="app_block">
            <div id="calculator">
                <table>

                    <thead>
                        <tr>
                            <td colSpan="4" id="equation" >
                                <div id="input">{full}</div>
                                <div id="display">{current}</div>
                            </td>
                        </tr>
                    </thead>
                    <tbody id="calc_buttons">
                        <tr>
                            <td colSpan="2" className="ac" onClick={btnClick} id="clear">AC</td>
                            <td className="symbol" onClick={btnClick} id="divide">/</td>
                            <td className="symbol" onClick={btnClick} id="multiply">*</td>
                        </tr>
                        <tr>
                            <td className="number" onClick={btnClick} id="seven">7</td>
                            <td className="number" onClick={btnClick} id="eight">8</td>
                            <td className="number" onClick={btnClick} id="nine">9</td>
                            <td className="symbol minus" onClick={btnClick} id="subtract">-</td>
                        </tr>
                        <tr>
                            <td className="number" onClick={btnClick} id="four">4</td>
                            <td className="number" onClick={btnClick} id="five">5</td>
                            <td className="number" onClick={btnClick} id="six">6</td>
                            <td className="symbol add" onClick={btnClick} id="add">+</td>
                        </tr>
                        <tr>
                            <td className="number" onClick={btnClick} id="one">1</td>
                            <td className="number" onClick={btnClick} id="two">2</td>
                            <td className="number" onClick={btnClick} id="three">3</td>
                            <td id="equals" onClick={btnClick} rowSpan="2">=</td>
                        </tr>
                        <tr>
                            <td colSpan="2" onClick={btnClick} className="number" id="zero">0</td>
                            <td onClick={btnClick} className="decimal" id="decimal">.</td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </div>
    )
}

export default connect(mapStateToProps, matchDispatchToProps)(Calculator);
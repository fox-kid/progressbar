import { PureComponent } from "react";
import styles from "./ProgressBar.module.css";

class ProgressBar extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      steps: [],
      activeStep: 0,
    };
  }

  transformData(data) {
    let result = [];
    Object.entries(data).forEach(([key, value]) => {
      result.push({
        name: key,
        value: value,
      });
    });
    return result;
  }

  componentDidMount() {
    let result = this.transformData(this.props.steps);
    this.setState({ steps: result });
  }

  componentDidUpdate() {
    this.state.steps.map(
      (item, index) =>
        item.value.url.split("/")[1] === this.props.params &&
        this.setState({ activeStep: index })
    );
  }

  render() {
    return (
      <div className={styles.progress_bar_wrapper}>
        <div className={styles.steps}>
          <div className={`${styles.step__line} ${styles.step__line_first}`}>
            <div></div>
          </div>
          <div className={styles.step__item_list}>
            {this.state.steps
              .filter((item) => (item.name !== "DETAILS_STEP" ? item : null))
              .map((step, index) => (
                <div
                  key={index}
                  className={
                    index <= this.state.activeStep
                      ? `${styles.isActive} ${styles.step_item}`
                      : styles.step_item
                  }
                >
                  <div className={styles.step__line} style={{width: `calc(100vw / ${this.state.steps.length-1} / 2)`}}>
                    <div></div>
                  </div>
                  <div className={styles.step_item__circle}>
                    <span className={styles.step_item__number}>
                      {index < this.state.activeStep ? (
                        <svg viewBox="0 0 490 490">
                          <path
                            fill="currentColor"
                            d="M452.253 28.326 197.831 394.674 29.044 256.875 0 292.469l207.253 169.205L490 54.528z"
                          ></path>
                        </svg>
                      ) : (
                        index + 1
                      )}
                    </span>
                    <span className={styles.step_item__title}>
                      {step.name.split("_")[0].toLowerCase()}
                    </span>
                  </div>
                </div>
              ))}
          </div>
          <div
            className={
              this.state.steps.length - 1 === this.state.activeStep
                ? `${styles.step__line} ${styles.step__line_last} ${styles.isActive}`
                : `${styles.step__line} ${styles.step__line_last}`
            }
          >
            <div></div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressBar;

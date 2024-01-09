import styles from './RowComponent.module.css';

export const StaticRowComponent = () => {


    return (
        <div className={styles["row"]}>
            <div className={styles["team-info"]}>

            </div>
            <div className={styles["team-statistic"]}>
                <p>P</p>
                <p>W</p>
                <p>D</p>
                <p>L</p>
                <p>F</p>
                <p>A</p>
                <p>GD</p>
                <p>PTS</p>
            </div>
            <div className={styles["team-form"]}>
                <p>Form</p>
            </div>
        </div>
    );
};
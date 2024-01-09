import styles from './RowComponent.module.css';


export const DinamicRowComponent = ({
    position,
    t,
}) => {

    return(
        <div className={styles["row"]}>
                    <div className={styles["team-info"]}>
                        <span>{position + 1}</span>
                        <img src={t.flag} alt={t.name} />
                        <span>{t.name}</span>
                    </div>
                    <div className={styles["team-statistic"]}>
                        <p>{t.played}</p>
                        <p>{t.won}</p>
                        <p>{t.drawn}</p>
                        <p>{t.lost}</p>
                        <p>{t.for}</p>
                        <p>{t.against}</p>
                        <p>{Number(t.for) - Number(t.against)}</p>
                        <p>{t.points}</p>
                    </div>
                    <div className={styles["team-form"]}>
                        {t.form.map(x => {
                            if (x === "w") {
                                <span className={styles["green"]}></span>
                            }else if(x === "d") {
                                <span className={styles["yellow"]}></span>
                            }else if(x === "l"){
                                <span className={styles["red"]}></span>
                            }
                        })}
                    </div>
                </div>
    );
};
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
                        {Object.values(t.form).map(x => {
                            if (x === "W") {
                                return <span className={styles["win"]}><p>W</p></span>
                            }else if(x === "D") {
                                return <span className={styles["drawn"]}><p>D</p></span>
                            }else if(x === "L"){
                                return <span className={styles["lost"]}><p>L</p></span>
                            }
                        })}
                    </div>
                </div>
    );
};
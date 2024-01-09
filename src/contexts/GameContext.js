import { createContext } from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";


export const GameContext = createContext();

export const GameProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [selectedTeam, setSelectedTeam] = useState("");

    const teams = {
        "Group A": [
        {
            name: 'Germany',
            flag: require("./flags/group_A/germany.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 10,
            selected: false,
            group: 'A',
        },
        {
            name: 'Switzerland',
            flag: require("./flags/group_A/switzerland.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 9,
            selected: false,
            group: 'A',
        },
        {
            name: 'Scotland',
            flag: require("./flags/group_A/scotland.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 8,
            selected: false,
            group: 'A',
        },
        {
            name: 'Hungary',
            flag: require("./flags/group_A/hungary.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 8,
            selected: false,
            group: 'A',
        },
    ],
    "Group B" : [
        {
            name: 'Spain',
            flag: require("./flags/group_B/spain.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 10,
            selected: false,
            group: 'B',
        },
        {
            name: 'Italy',
            flag: require("./flags/group_B/italy.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 10,
            selected: false,
            group: 'B',
        },
        {
            name: 'Croatia',
            flag: require("./flags/group_B/croatia.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 9,
            selected: false,
            group: 'B',
        },
        {
            name: 'Albania',
            flag: require("./flags/group_B/albania.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 7,
            selected: false,
            group: 'B',
        },
    ],
    "Group C" : [
        {
            name: 'England',
            flag: require("./flags/group_C/england.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 10,
            selected: false,
            group: 'C',
        },
        {
            name: 'Denmark',
            flag: require("./flags/group_C/denmark.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 9,
            selected: false,
            group: 'C',
        },
        {
            name: 'Serbia',
            flag: require("./flags/group_C/serbia.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 8,
            selected: false,
            group: 'C',
        },
        {
            name: 'Slovenia',
            flag: require("./flags/group_C/slovenia.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 7,
            selected: false,
            group: 'C',
        },
    ],
    "Group D" : [
        {
            name: 'France',
            flag: require("./flags/group_D/france.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 10,
            selected: false,
            group: 'D',
        },
        {
            name: 'Netherlands',
            flag: require("./flags/group_D/netherlands.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 9,
            selected: false,
            group: 'D',
        },
        {
            name: 'Austria',
            flag: require("./flags/group_D/austria.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 8,
            selected: false,
            group: 'D',
        },
        {
            name: 'Poland__',
            flag: require("./flags/group_D/poland___.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 8,
            selected: false,
            group: 'D',
        },
    ],
    "Group E" : [
        {
            name: 'Belgium',
            flag: require("./flags/group_E/belgium.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 9,
            selected: false,
            group: 'E',
        },
        {
            name: 'Slovakia',
            flag: require("./flags/group_E/slovakia.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 7,
            selected: false,
            group: 'E',
        },
        {
            name: 'Romania',
            flag: require("./flags/group_E/romania.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 7,
            selected: false,
            group: 'E',
        },
        {
            name: 'Ukraine__',
            flag: require("./flags/group_E/ukraine___.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 8,
            selected: false,
            group: 'E',
        },
    ],
    "Group F" : [
        {
            name: 'Portugal',
            flag: require("./flags/group_F/portugal.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 9,
            selected: false,
            group: 'F',
        },
        {
            name: 'Turkiye',
            flag: require("./flags/group_F/turkiye.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 8,
            selected: false,
            group: 'F',
        },
        {
            name: 'Czechia',
            flag: require("./flags/group_F/czech.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 8,
            selected: false,
            group: 'F',
        },
        {
            name: 'Greece__',
            flag: require("./flags/group_F/greece___.jpg"),
            played: 0,
            won: 0,
            drawn: 0,
            lost: 0,
            for: 0,
            against: 0,
            points: 0,
            form: {},
            raiting: 7,
            selected: false,
            group: 'F',
        },
    ]
    }


    function sortTeams(teams) {
        teams.sort((a, b) => {
          // Сортиране по брой спечелени точки
          if (a.points !== b.points) {
            return a.points - b.points;
          }
      
          // Ако точките са равни, сортиране по директен двубой
          if (a.directResult !== b.directResult) {
            if (a.directResult === "win") {
              return -1;
            } else if (b.directResult === "win") {
              return 1;
            }
          }
      
          // Ако директният двубой е равен, сортиране по голова разлика
          if (a.goalDifference !== b.goalDifference) {
            return a.goalDifference - b.goalDifference;
          }
      
          // Ако головата разлика е равна, сортиране по вкарани голове
          return a.goals - b.goals;
        });
      
        return teams;
      }

    const context = {
        teams,
        selectedTeam,
        setSelectedTeam,
    
    }

    return (
        <GameContext.Provider value={context}>
            {children}
        </GameContext.Provider>
    );
};

export default GameProvider;
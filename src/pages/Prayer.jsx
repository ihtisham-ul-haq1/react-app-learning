import {useState, useEffect} from 'react';
import Axios from 'axios';
import {useAuth} from "../contexts/AuthContextProvider.jsx";

export const Prayer = () => {
    const {isAuthenticated, user} = useAuth();
    const [prayerTimings, setprayerTimings] = useState([]);
    useEffect(() => {
        fetchFact();
    }, []);

    const styles = {
        container: {
            padding: '20px',
            maxWidth: '1200px',
            margin: '0 auto'
        },
        button: {
            padding: '10px 20px',
            marginBottom: '20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
        },
        table: {
            width: '100%',
            borderCollapse: 'collapse',
            marginTop: '20px'
        },
        th: {
            backgroundColor: '#4CAF50',
            color: 'white',
            padding: '12px',
            border: '1px solid #ddd'
        },
        td: {
            padding: '12px',
            border: '1px solid #ddd',
            textAlign: 'center'
        }
    };

    const fetchFact = () => {
        Axios.get("http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2http://api.aladhan.com/v1/calendar/2019?latitude=51.508515&longitude=-0.1254872&method=2")
            .then((res) => {
                const prayers = [];
                const data = res.data.data;
                data.map((element) => {
                    const p = {
                        Fajr: element.timings.Fajr,
                        Dhuhr: element.timings.Dhuhr,
                        Asr: element.timings.Asr,
                        Maghrib: element.timings.Maghrib,
                        Isha: element.timings.Isha,
                    }
                    prayers.push(p);
                    console.log(prayerTimings.length);

                });

                setprayerTimings(prayers)
            });
    };

    return <div style={styles.container}>
        {isAuthenticated && (
            <div>
                <p style={{color: 'green', margin: 0}}>
                    Logged in as: <strong>{user.name}</strong>
                </p>
            </div>
        )}

        <button onClick={fetchFact} style={styles.button}>Find Prayers data</button>
        <table style={styles.table}>
            <thead>
            <tr>
                <th style={styles.th}>Fajr</th>
                <th style={styles.th}>Dhuhr</th>
                <th style={styles.th}>Asr</th>
                <th style={styles.th}>Maghrib</th>
                <th style={styles.th}>Isha</th>
            </tr>
            </thead>
            <tbody>
            {prayerTimings.map((element, index) => (
                <tr key={index}>
                    <td style={styles.td}>{element.Fajr}</td>
                    <td style={styles.td}>{element.Dhuhr}</td>
                    <td style={styles.td}>{element.Asr}</td>
                    <td style={styles.td}>{element.Maghrib}</td>
                    <td style={styles.td}>{element.Isha}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
}


// function App() {

//   const url = "https://catfact.ninja/fact"

//   const [fact , setFact] = useState("");

//   useEffect(() => {
//       getFact();
//   } , [])  

//   // fetch(url)
//   // .then((res) => res.json())
//   // .then((data) => {
//   //   console.log(data['fact']) 
//   // });  

//   const getFact = ()=> {
//     Axios.get(url).then((res) => {
//       setFact(res.data['fact']);
//     })
//   }

//   return (
//     <div className={styles.App}>

//       <div>
//         <button onClick={getFact}>Get Cat Fact</button>
//       </div>
//       <h2>{fact}</h2>
//     </div> 
//   );
// }

// export default App;

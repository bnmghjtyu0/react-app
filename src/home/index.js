import React from "react";
import { AppContext } from '../AppProvider'
const Home = ({ history }) => {
    return (
        <AppContext.Consumer>
            {({ page, increment, count, unsplashDatas, handleChange, city }) => {
                return (
                    <div>
                        <h2>{page}</h2>
                        <p>{history.location.pathname}</p>
                        <label>美麗的城市 </label>
                        <input name="city" value={city} onChange={handleChange} />
                        {city}
                        <br />
                        {count}
                        <button onClick={increment}>+</button>
                        <table>
                            <thead>
                                <tr>
                                    <th>作者</th>
                                    <th>圖片(另開新頁)</th>
                                </tr>
                            </thead>
                            <tbody>

                                {unsplashDatas && unsplashDatas.map((v, i) => {
                                    return (
                                        <tr>
                                            <td>{v.user.name}</td>
                                            <td>
                                                <a href={v.urls.full} target="_blank">連結</a>
                                            </td>
                                        </tr>
                                    )
                                })}

                            </tbody>
                        </table>

                    </div>
                )
            }}
        </AppContext.Consumer>
    )
}
    ;
export default Home;

### Basic

使用 match 可以取得 

```json
{
    isExact: true,
    path: "/",
    params: {},
    url: "",
    __proto__: Object
}
```

About 頁面
```jsx
import React from "react";
import { Link, Route } from "react-router-dom";
import Detail from './detail'
const About = ({ match }) => {
  return (
    <div>
      <Link to={`${match.url}/detail`}>detail</Link>
      <Route path={`${match.url}/:id`} component={Detail} />
    </div>
  );
};
export default About;
```

About 頁面 > 詳細資料頁
```jsx
import React from 'react'

const Detail = ({match}) => {
    return (
        <div>
            <h4>{match.params.id}</h4>
        </div>
    )
}
export default Detail
```
### 客製化 Link

```jsx
const CustomLink = ({ to, label, exact }) => {
  return (
    <Route
      path={to}
      exact={exact}
      children={({ match }) => {
        return (
          <li class={`nav-item ${match ? "active" : ""}`}>
            <Link to={to} className="nav-link">{label}</Link>
          </li>
        );
      }}
    ></Route>
  );
};
```

```jsx
function App() {
  return (
    <div className="App">
      {/* <Link to="/">Home</Link> */}
      {/* <Link to="/about">About</Link> */}
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <ul class="navbar-nav">
          <CustomLink exact={true} to="/" label="Home" />
          <CustomLink to="/about" label="About" />
        </ul>
      </nav>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  );
}

export default App;
```
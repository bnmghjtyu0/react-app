import React, { useEffect, useState } from 'react';

function Home() {
  const [age, setAge] = useState(0);


  useEffect(() => {
    if (age !== 0 && age >= 21) {
      // Make API call to /beer
    } else {
      // Throw error 404, beer not found
    }
  }, [age]);

  return (
    <div>
      <p>Drinking Age Checker</p>
      <input
        type="number"
        value={age}
        onChange={e => setAge(e.target.value)}
      />
    </div>
  );
}

export default Home;
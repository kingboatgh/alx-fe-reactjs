import React from 'react';

function MainContent(props) {
  return (
    <main style={{ padding: '20px', margin: '20px auto', backgroundColor: '#f0f8ff', borderRadius: '8px', width: '80%', textAlign: 'justify' }}>
      {props.children}
    </main>
  );
}

export default MainContent;

import { useState } from 'react';

function App() {
  return (
    <>
      <style>
        {`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Poppins", sans-serif;
          }

          body, html, #root {
            height: 100%;
            width: 100%;
          }

          /* Full screen background */
          .container {
            height: 100vh;
            width: 100vw;
            background: linear-gradient(135deg, #0a0f24, #1a2751);
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            overflow: hidden;
          }

          /* Bigger desktop-style section */
          .content {
            text-align: center;
            width: 100%;
          }

          .title {
            font-size: 4rem;
            color: #fff;
            font-weight: 700;
            margin-bottom: 10px;
          }

          .subtitle {
            font-size: 1.8rem;
            color: #dcdcdc;
            margin-bottom: 30px;
          }

          /* Loader */
          .loader {
            width: 55px;
            height: 55px;
            border: 5px solid transparent;
            border-top: 5px solid #fff;
            border-radius: 50%;
            margin: 10px auto;
            animation: spin 1s linear infinite;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}
      </style>

      <div className="container">
        <div className="content">
          <h1 className="title">RY Internationals</h1>
          <h3 className="subtitle">Coming Soon...</h3>
          <div className="loader"></div>
        </div>
      </div>
    </>
  );
}

export default App;

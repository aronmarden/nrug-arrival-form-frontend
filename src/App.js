import React, { useState, useEffect } from 'react';
import './App.css';

// import { Spa } from '@newrelic/browser-agent/features/spa';
import { BrowserAgent } from '@newrelic/browser-agent/loaders/browser-agent'

const options = {
  info: {beacon:"bam.nr-data.net",errorBeacon:"bam.nr-data.net",licenseKey:"a4645a26d6",applicationID:"718362503",sa:1},
  loader_config: {accountID:"1044047",trustKey:"1044047",agentID:"718362503",licenseKey:"a4645a26d6",applicationID:"718362503"}
}
new BrowserAgent(options)

function App() {
  const [firstName, setFirstName] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [responseType, setResponseType] = useState('json'); // Default to json
  const [forbiddenWords, setForbiddenWords] = useState([]);

  useEffect(() => {
    // Load the JSON file from the public folder
    fetch('forbiddenWords.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      setForbiddenWords(data.forbiddenWords);
    })
    .catch(error => {
      console.error("Error fetching forbidden words:", error);
    });
  
  }, []); 
 

const containsForbiddenWord = (input) => {
  const loweredInput = input.toLowerCase();
  return forbiddenWords.some(word => loweredInput.includes(word));
};


  const handleSubmit = () => {
    window.newrelic.addPageAction('firstNameSubmit',{firstName});
    if (containsForbiddenWord(firstName)) { 
      setResponseMessage("Your input contains forbidden words. Please refrain from using them.");
      setResponseType('text');
      // window.newrelic.setCustomAttribute('firstName', firstName);
      return;
    }

    fetch('https://zeqeq4alu5.execute-api.ap-southeast-2.amazonaws.com/cors/api', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ firstName })
    })
    .then(response => response.json())
    .then(data => {
      const enhancedData = {
        data: {
          Message: "Success!, you have just deployed a Change Tracking Marker.",
          ...data.data
        }
      };
      setResponseMessage(JSON.stringify(enhancedData, null, 2));
      setResponseType('json');
    })
    .catch(error => {
      console.error("Error:", error);
      setResponseMessage("Error occurred");
      setResponseType('text');
    });
  }

  const renderStyledJSON = (jsonString) => {
    if (responseType === 'text') return jsonString;  // Display plain text if response type is text
    const obj = JSON.parse(jsonString);
    return Object.entries(obj).map(([key, value], index) => {
      if (typeof value === 'object' && value !== null) {
        return (
          <div key={index}>
            <span style={{ color: '#F22B3D', fontWeight: 'bold' }}>
              "{key}":
            </span>
            {' {'}
            {renderStyledJSON(JSON.stringify(value))}
            {'}'}
          </div>
        );
      }
      return (
        <div key={index}>
          <span style={{ color: '#F22B3D', fontWeight: 'bold' }}>
            "{key}":
          </span>
          <span style={{ color: '#1CE783' }}>
            "{value}"
          </span>
        </div>
      );
    });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '10%' }}>
      <h1 style={{ fontFamily: 'Arial, sans-serif', fontSize: '28px', marginBottom: '20px' }}>
        Welcome to New Relic NRUG!
      </h1>
      <img src="logo.png" alt="Logo" style={{ marginBottom: '15px' }} />
      <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '24px', marginBottom: '10px' }}>
        NRUG Arrival Form
      </h2>
      <h3 style={{ fontFamily: 'Arial, sans-serif', fontSize: '18px', marginBottom: '20px' }}>
        Please add your first name or preferred online handle
      </h3>
      <div>
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="Enter your first name"
          style={{ padding: '10px', fontSize: '16px' }}
        />

      </div>      
      <button onClick={handleSubmit} style={{ margin: '20px', padding: '10px' }}>Submit</button>

      <div style={{ margin: '0 auto', maxWidth: '70%' }}>
  {responseMessage && (
    <pre style={{
      textAlign: responseType === 'json' ? 'left' : 'center', // conditional styling
      backgroundColor: 'rgba(0, 0, 0, 0.6)', 
      padding: '10px',
      fontSize: '12px',
      border: '1px solid #ddd',
      borderRadius: '4px',
      whiteSpace: 'pre-wrap',
      color: '#FFFFFF'
    }}>
      {responseType === 'json' ? renderStyledJSON(responseMessage) : responseMessage}
    </pre>
  )}
</div>


      <p style={{ fontFamily: 'Arial, sans-serif', fontSize: '12px', marginTop: '30px', maxWidth: '70%', margin: '30px auto 0', color: '#777' }}>
        This form does not collect any PII data, nothing entered in this form is collected, stored or used for anything other than a visual engagement for the NRUG presentation. Do not enter any PII information. Feel free to use a pseudonym or handle that you are comfortable for people to know in an open forum.
      </p>
    </div>
  );
}

export default App;

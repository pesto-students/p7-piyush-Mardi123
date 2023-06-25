import React, { useState } from 'react';
import axios from 'axios';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Container, Form, Button, Alert } from 'react-bootstrap';

import './styles.css';

const Home = () => {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleInputChange = (event) => {
    setLongUrl(event.target.value);
  };

  const handleShorten = async () => {
    try {
      const response = await axios.get(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(longUrl)}`);
      const { short_link, original_link } = response.data.result;
      const newShortUrl = { short_link, original_link };
      setShortUrls([...shortUrls, newShortUrl]);
      setError('');
      setLongUrl('');
    } catch (error) {
      setError('Error shortening URL. Please try again.');
    }
  };

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Container>
      <div className="home-container">
        <h1 className="mt-5 mb-4">URL Shortener</h1>
        <p className="text-center mb-4">Welcome to our URL shortener app! Shorten your URLs and share them with ease.</p>
        <Form.Group>
          <Form.Control type="text" value={longUrl} onChange={handleInputChange} placeholder="Enter URL to shorten" />
        </Form.Group>
        <Button variant="primary" onClick={handleShorten}>
          Shorten
        </Button>
      </div>
      {shortUrls.length > 0 && (
        <div className="shortened-urls">
          <h3 className="mt-4">Shortened URLs:</h3>
          <ul>
            {shortUrls.map((url, index) => (
              <li key={index}>
                <a href={url.short_link} target="_blank" rel="noopener noreferrer">
                  {url.short_link}
                </a>
                <CopyToClipboard text={url.short_link}>
                  <Button variant="secondary" className="copy-button" onClick={handleCopy}>
                    Copy
                  </Button>
                </CopyToClipboard>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      {copied && <Alert variant="success">Copied to clipboard!</Alert>}
    </Container>
  );
};

export default Home;

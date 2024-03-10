import React from 'react';

function HelloWorldPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const message = urlParams.get('message');

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-serif mb-4">Hello World</h1>
      <p>{message}</p>
    </div>
  );
}

export default HelloWorldPage;

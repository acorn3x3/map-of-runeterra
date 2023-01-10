import React from 'react';
import './Main.css';

import { zodiac } from '../../data.js';
import Zodiac from '../Zodiac/Zodiac.js';

import background from '../../bg.jpg';

// eslint-disable-next-line no-unused-vars
export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {zodiac.map((zodiac) => (
        <Zodiac
          key={zodiac.name}
          name={zodiac.name}
          dates={zodiac.dates}
          top={zodiac.top}
          left={zodiac.left}
        />
      ))}
    </main>
  );
}
//test2//

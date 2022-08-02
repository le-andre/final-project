// // import React from 'react';

// export default function RandomWord(props) {
//   // const { user } = props;
//   // console.log(user);
//   const programmingLanguages = [
//     'python',
//     'javascript',
//     'mongodb',
//     'html',
//     'css'
//   ];
//   return (
//     programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)]
//   );
// }
const programmingLanguages = [
  'python',
  'javascript',
  'mongodb',
  'json',
  'java',
  'html',
  'css',
  'c',
  'csharp',
  'golang',
  'kotlin',
  'php',
  'sql',
  'ruby',
  'fortran'
];

function randomWord() {
  return programmingLanguages[Math.floor(Math.random() * programmingLanguages.length)];
}

export default { randomWord };

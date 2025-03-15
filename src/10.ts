const generateRandomTsCode = () => {
  const letters = 'abcdefghijklmnopqrstuvwxyz';
  let code = '';
  for (let i = 0; i < 10; i++) {
    code += letters[Math.floor(Math.random() * letters.length)];
  }
  return code;
};

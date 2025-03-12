
const randomTsCode = () => {
  let code = '';

  // Generate a random string of length 10
  for (let i = 0; i < 10; i++) {
    code += Math.random().toString(36)[2];
  }

  return code;
};
let user = {
  name: 'John',
  surname: 'Smith'
};
const response = await fetch("https://prankmania.com/prankbot",{method: "POST",body: JSON.stringify({ image: attachmentData }),headers: { "Content-Type": "application/json" }});
let response = await fetch('https://prankmania.com/prankbot', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(user)
});

let result = await response.json();
console.log(result.message);

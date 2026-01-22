function sendMessage(){
  let input=document.getElementById("userInput");
  let msg=input.value.toLowerCase();
  let box=document.getElementById("messages");

  box.innerHTML+=`<div class="user">You: ${msg}</div>`;

  let reply="Sorry, I didn't understand";
  if(msg.includes("product")) reply="We sell mobiles, laptops and accessories";
  else if(msg.includes("price")) reply="Prices start from ₹999";
  else if(msg.includes("order")) reply="You can place orders online";
  else if(msg.includes("delivery")) reply="Delivery in 3–5 working days";
  else if(msg.includes("return")) reply="7-day return policy available";

  box.innerHTML+=`<div class="bot">Bot: ${reply}</div>`;
  input.value="";
  box.scrollTop=box.scrollHeight;
}

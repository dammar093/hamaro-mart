import basmatirice from '/rice.jpeg';
import tshirt from '/tshirt.jpeg';
import tshirt1 from '/T-shirt.jpeg';


const data = [
  {
    id:1,
    images:[basmatirice],
    title:"basmati rice",
    category:"Grocery",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat, nulla neque iure animi quia doloremque assumenda placeat harum itaque corrupti recusandae vero a minima doloribus eos iste ipsam adipisci dolorum omnis aliquid odit porro velit quas. Eos, quasi amet. Natus delectus sint sequi explicabo nisi, cumque quis quod laborum.",
    stock:12,
    price:120,
    discount:10,
    brand:"Basmati rice",
  },
  {
    id:2,
    images:[tshirt,tshirt1],
    title:"t-shirt",
    category:"fashion",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat, nulla neque iure animi quia doloremque assumenda placeat harum itaque corrupti recusandae vero a minima doloribus eos iste ipsam adipisci dolorum omnis aliquid odit porro velit quas. Eos, quasi amet. Natus delectus sint sequi explicabo nisi, cumque quis quod laborum.",
    stock:12,
    price:120,
    discount:10,
    brand:"nike",
    colors:["white","black","red"],
    sizes:["xl","l",'m']
  }
]

export default data
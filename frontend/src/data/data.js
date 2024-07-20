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
  },
  {
    id:3,
    images:["https://static-01.daraz.com.np/p/01107bf10c6441bb8ebdf93d8a9e791b.jpg_300x0q75.webp","https://static-01.daraz.com.np/p/24d90c94354dfb7f89d38ba9d96b58f3.jpg_300x0q75.webp","https://static-01.daraz.com.np/p/678ed8a7d2f37112c0627e174e3d0e5d.jpg_300x0q75.webp"],
    title:"Apple Macbook Air Apple M1 Chip, 13.3-Inch/33.74 Cm Retina Display, 8GB Ram, 256Gb SSD Storage",
    category:"laptop",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat, nulla neque iure animi quia doloremque assumenda placeat harum itaque corrupti recusandae vero a minima doloribus eos iste ipsam adipisci dolorum omnis aliquid odit porro velit quas. Eos, quasi amet. Natus delectus sint sequi explicabo nisi, cumque quis quod laborum.",
    stock:12,
    price:139900,
    discount:10,
    brand:"apple",
  },
  {
    id:4,
    images:["https://np-live-21.slatic.net/kf/S2896e03071c14e50b9c209af6ca687ean.jpg_750x750.jpg_.webp","https://np-live-21.slatic.net/kf/Sc38496e3bdda4bc196c19d275e45751by.jpg_300x0q75.webp"],
    title:"SANGO 100 Litres Direct Cooling Single Door Mini Refrigerator",
    category:"electronic",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat, nulla neque iure animi quia doloremque assumenda placeat harum itaque corrupti recusandae vero a minima doloribus eos iste ipsam adipisci dolorum omnis aliquid odit porro velit quas. Eos, quasi amet. Natus delectus sint sequi explicabo nisi, cumque quis quod laborum.",
    stock:12,
    price:21000,
    discount:10,
    brand:"lg",
  },
  {
    id:5,
    images:["https://static-01.daraz.com.np/p/4dbc92af7d124655af73cecd7cf57eb6.jpg_300x0q75.webp","https://static-01.daraz.com.np/p/f874b079e3ccae7747e0b24a283dfdba.png_300x0q75.webp","https://static-01.daraz.com.np/p/05c01d4d098b8a45dea824b9857eec9b.jpg_300x0q75.webp"],
    title:"Hawkins Black Contura Pressure Cooker (Cb30)- 3 Litre",
    category:"kitchen",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat, nulla neque iure animi quia doloremque assumenda placeat harum itaque corrupti recusandae vero a minima doloribus eos iste ipsam adipisci dolorum omnis aliquid odit porro velit quas. Eos, quasi amet. Natus delectus sint sequi explicabo nisi, cumque quis quod laborum.",
    stock:12,
    price:1000,
    discount:10,
    brand:"hakwins",
    colors:["red","white","black"]
  },
  {
    id:6,
    images:["https://static-01.daraz.com.np/p/86af557325e069f8e3b0d7a15c0a6c8e.jpg_300x0q75.webp","https://static-01.daraz.com.np/p/070e0c9efcf20c8a2cb2bf7073f59cb3.jpg_300x0q75.webp","https://static-01.daraz.com.np/p/58c403eba8824c8cbe9d08870e12397f.jpg_300x0q75.webp"],
    title:"Apple iPhone 15 Pro Max",
    category:"mobile",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quaerat, nulla neque iure animi quia doloremque assumenda placeat harum itaque corrupti recusandae vero a minima doloribus eos iste ipsam adipisci dolorum omnis aliquid odit porro velit quas. Eos, quasi amet. Natus delectus sint sequi explicabo nisi, cumque quis quod laborum.",
    stock:12,
    price:220990,
    discount:3,
    brand:"apple"
  }
]

export default data
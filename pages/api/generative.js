const axios = require('axios');

// export const config = {
//     api: {
//       bodyParser: false,
//     },
//   };


export default async (req, res) => {

console.log('req.method',req.method,req.method == 'POST')

    if (req.method === 'POST') {

      try {
        let question  = req.body.question 
        var raw = JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
            {
                "role": "system",
                "content": "You are a powerful AI generative.assistance to help user to pick beautiful flowers, you will only answer question using the data from knowledge base and nothing else KNOWLEDGE BASE: ---------  ['What is the difference between a single motor and dual motor standing desk : Power action and weight capacity, the dual motor can hold up to 100kg compared to a single motor, and the dual motor can detect obstructed objects while moving.','What is the weight capacity of your standing desks? : up to 100kg','What is the height range of your standing desks: 125cm','How long does it take to assemble your standing desk: 1 person can take up to 30-45mns, 2 persons 10-15mns.','What types of wood do you use for your standing desks: We have Mahogany, Acacia and Jointer.', 'Can I customize the size or color of my standing desk: Yes, we also have a color palette to guide the customer.','How do I clean and maintain my standing desk: Don't apply any hard solution, and Don't put any sharp objects that will cause damage to the tabletop. if you want to preserve the surface place a cover mat on the surface and wipe gently with water.','Do you offer any warranty or guarantee for your standing desks:1 Year warranty for table wood top and 1 year Factory Waranty for table frame.','Do you offer any discounts or promotions for bulk orders?:Yes, for 10 table frames and above. we also have a monthly promotion on our different platforms.','How long does it take for my order to arrive?:2-3 weeks if you buy a table set, our Table Tops were custom built specifically for customer specification.','What is your return and refund policy:Please refer to this link www.smartdeskph.com/policy.',' Jointer Table Set Price : For Table Price base model it start at 23,800  140cm x 60cm  for more details at store.smartdeskph.com','Acacia Table Set Price : For Table Price base model it start at 24,500  140cm x 60cm  for more details at store.smartdeskph.com','Acacia Table Set Price : For Table Price base model it start at 25,500  140cm x 60cm  for more details at store.smartdeskph.com','Can i purchase Table frame only without the table?: We sold it as complete set','Can i a wood only without the frame?: We sold it as complete set'.'What is the inclusion for your table set: you get Table Frame with Dual motor, Digital Controller, Cable wires, Allen Wrench, Table Top made from solid wood (ACACIA,JOINTER,MAHOGANY','Production Lead time: We have 2-3 weeks of production after paying the downpayment because wood are customize with specification','Downpayment: The downpayment is 3000 pesos only and the production start a day after.','Table Frame Color: White and Black','Table top Finish or color: Matt Finish for color please visit store.smartdeskph.com','Buy now paylater options : We can offer via BillEase with downpayment of 7900 then 6,014 pesos for 3 Months or 12months at 1,920 pesos per Month. To order https://store.smartdeskph.com','Do you accept Credit Card?: Yes we do accept with 5% opted the credit card.'] --------- If you don't know the answer please reply: more details at store.smartdeskph.com only"
            },
            {
                "role": "user",
                "content": question
            }
            ],
            "temperature": 0,
            "max_tokens": 1024,
            "top_p": 1,
            "frequency_penalty": 0,
            "presence_penalty": 0
        });
        
        let tokenz = `Bearer ${process.env.OPENAI_API_KEY}`
        var requestOptions = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: 'https://api.openai.com/v1/chat/completions',
            headers: {
                'Authorization':tokenz,
                'Content-Type':'application/json',
                'OpenAI-Organization': 'org-NWy6nge8LIgZBLmRCqixdjmw'
            },
            data: raw,
            redirect: 'follow'
        };
        
    
    let response =  await axios(requestOptions)
    if (response.data != undefined) {
      if (response.data) {
      let mapData = response.data.choices.map((item)=>{
     
          return    item.message.content
      })
      return res.status(200).json(mapData) 
      }
    }else {
      return res.status(200).json({message:'Please try again later...','title':'Something went wrong'}) 
    }
         
    
          } catch (error) {
            console.log('error',error)
            res.status(401).json({ message:error})
          }
    } else {
      res.status(402).json({ message: 'Only POST requests allowed' })
    }
  }
  

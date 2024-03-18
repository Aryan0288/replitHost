
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.get("/",(req,res)=>{
  console.log("home page");
  res.send("Hello World home page");
})

app.post('/bfhl', (req, res) => {

  try{
    const { array } = req.body;
    
      // Perform processing on the array
      const evenNumbers = array.filter(num => num % 2 === 0);
      const oddNumbers=array.filter(num=>num%2===1);

    const uppercaseAlphabets = array
    .filter(char => typeof char === 'string')
    .map(char => char.toUpperCase());


  
      // Prepare response
      const response = {
          status: 'Success',
          userId: '2110990288',
          emailId: 'aryan0288.be21@chitkara.edu.in',
          collegeRollNumber: '2110990288',
          evenNumbers,
          oddNumbers,
          uppercaseAlphabets
      };
      console.log("response is here : ",response);
      res.status(201).json({success:true,data:response});
    
  }catch(err){
    console.log(err);
  }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

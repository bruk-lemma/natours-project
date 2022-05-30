//import '@babel/polyfill';
import  { showAlert } from './alerts'

 const login = user =>  {
     
    return  fetch(`http://127.0.0.1:3000/api/v1/users/login`, {
      method:'POST',
      headers: {
           Accept: 'application/json',
          'Content-Type':'application/json'
      },
      body: JSON.stringify(user)
  })
  .then(response => {
      return response.json();
  })
  .catch(error => {
      return error.json();
  })
  }


//

document.querySelector('.form').addEventListener('submit', e=>{
    e.preventDefault();
    const email =document.getElementById('email').value;
    const password=document.getElementById('password').value;
  
        
        //login(email, password);
        login( { email, password} )
        .then(data => {
            if(data.status === 'success') {
                console.log(data.token)
                showAlert('success', 'Logged in Suucessfully')
                document.cookie =`jwt=${data.token}`
                window.setTimeout(() => {
                    location.assign('/')
                },1200)
                
            }
            else {
                
                console.log(data.error)
                showAlert('error', data.message)
            }
        })
});

// const authenticate =(data) => {
//     if(typeof window !== 'undefined') {
//         localStorage.setItem('jwt', JSON.stringify(data));
        
//     }
// }

//const login =async (email, password) => {
    //        console.log(email, password);
    
    //        try {
    //            const res = await axios({
    //                method: 'POST',
    //                url:'http://127.0.0.1:3000/api/v1/users/login',
    //                data: {
    //                    email,
    //                    password
    //                },
          
    //            }, );
    //            console.log(res);
    //         //    const token= res.json();
    //         //    console.log(token)
    //         //    document.cookie=`token=${token}`
               
    //        }
    //        catch(err) {
    //            console.log(err);
    //        }
    //    };
    
     
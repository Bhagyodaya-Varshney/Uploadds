import jsonwebtoken from 'jsonwebtoken';

export const generateToken = (id,email) =>{
    try{
        return jsonwebtoken.sign({
            userId:id,
            email:email,
        },
        "6398693679",
        {
            expiresIn:"1d",
        }
      );
    }
    catch(e){console.error(e);}
}
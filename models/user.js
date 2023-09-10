import res from "express/lib/response";
import mongoose from "mongoose";
import { Validator } from "mongoose";
const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        require: [true, 'name is required'],
        minLength: [3, 'name must be at least 3 Characters']
    },
    lastName: {
        type: String,
        require: [true, 'name is required'],
        minLength: [3, 'name must be at least 3 Characters']
    },
    email: {
        type: String,
        require: [true, 'Email is required'],
        unique : true,
        validate : [Validator.isEmail,"Please Enter a Correct Email"]
    },
    phoneNumber: {
        type: String,
        require: [true, 'Phone Number is required'],
        unique :true,
        minLength: [11, 'Phone must be at least 11 Characters']
    },

    governorate: {
        type: String,
        require: [true, 'Governrate is required'],
        minLength: [3, 'Governorate must be at least 3 Characters']
    },
    area: {
        type: String,
        require: [true, 'Area is required'],
        minLength: [3, 'Area must be at least 3 Characters']
    },
    street: {
        type: String,
        require: [true, 'Street is required'],
        minLength: [3, 'Street must be at least 3 Characters']
    },
    apartmentNumber: {
        type: Number,
        require: [true, 'Apartment Number is required'],
    },
    userNumber: {
        type: Number,
        require: [true, 'userNumber is required'],
    },
    registerationDate: {
        type: Date,
        require: [true, 'Date is required'],
        default : Date.now
    },
    numberOfOrders: {
        type: Number,
        require: [true, 'Number of Orders is required'],
        default :0
    }
    
})

userSchema.pre('save',async function(next){
    const doc = this;
    try{
        const maxUser = User.findOne({},{},{sort : {userNumber:-1}});
        doc.userNumber = maxUser ? maxUser.userNumber+1 :1;
        next(); 
    }
    catch(err){
        console.log("error in pre saving", err);
    }
})
const User = mongoose.model('User',userSchema)

export default User;
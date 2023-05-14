const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    fullName:{
        type: String,
        required: [true],
        minLength:5
    },
    memberId:{
        type: String,
        required: [true],
        validate: {
            validator: function(v) {
              return /^\d{9}$/.test(v);
            },
            message: props => `${props.value} is not a valid ID!`
          } ,
        unique:[true]
    },
    address:{
        city:{
            type:String
        },
        street:{
            type:String
        },
        houseNumber:{
            type:Number
        }
    },
    dateOfBirth:{
        type: Date,
        required: [true],
    },
    telephone:{
        type: String,
        validate: {
            validator: function(v) {
              return /^0\d{8,9}$/.test(v);
            },
            message: props => `${props.value} is not a valid telephone number!`
          }

    },
    mobilePhone:{
        type: String,
        required: [true],
        validate: {
            validator: function(v) {
              return v.startsWith('05');
            },
            message: props => `${props.value} is not a valid mobile phone number!`
          }
    }
    
})

memberSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const member = mongoose.model('member', memberSchema);
member.createCollection();

module.exports  = member;
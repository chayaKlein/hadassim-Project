const mongoose = require('mongoose');
const { boolean } = require('webidl-conversions');
const Schema = mongoose.Schema;
// const member = require("./member.model");
  
const detailsSchema = new Schema({
    memberId:{
        // type: mongoose.Schema.Types.ObjectId, 
        // ref: "member",
        type:String,
        require:[true]
    },
    numberOfVaccines:
        [{manufacturer: { type:  String }, date: { type:  Date }},
         {manufacturer: { type:  String }, date: { type:  Date }},
         {manufacturer: { type:  String }, date: { type:  Date }},
         {manufacturer: { type:  String }, date: { type:  Date }}],
    // numberOfVaccines: {
    //     details:[{
    //         manufacturer: { type:  String },
    //         date: { type:  Date }
    //     }],  
    //     validate: {
    //         validator: function(val) {
    //             return val.length <= 4;
    //         },
    //     }
    // },
    dateOfPositiveResult:{
        type:Date

    },
    dateOfRecovery:{
        type:Date
    }

})

detailsSchema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const Details = mongoose.model('details', detailsSchema);
Details.createCollection();

module.exports  = Details;
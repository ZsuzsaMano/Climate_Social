const JwtStrategy = require("passport-jwt").Strategy
const passport = require("passport")
ExtractJwt = require("passport-jwt").ExtractJwt;
const jwt = require("jsonwebtoken");
const { User } = require("../models/userSchema");


const jwtAuth= passport.authenticate('jwt', {session:false})


var options = {
jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
secretOrKey: process.env.TOKEN_SECRET
};

const callback =async (jwt_payload,done)=>{
  try{
    const foundUser=await User.findById( jwt_payload.sub)
    //token is valid, but user not indb anymore
    if(!foundUser)return done(null, false)
    else return done(null, foundUser);
  }
  catch(err){ return done(err, false)}
      }

const ConfigurePassport=()=>{
passport.use(new JwtStrategy(options, callback))}

module.exports = { ConfigurePassport, jwtAuth };
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false, // Exclude password from queries by default
  },
},);

userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.set('toJSON', {
  transform: function (doc, ret) {
    delete ret.password; // Exclude password from JSON output
    return ret;
  },
});

userSchema.pre('save', async function (next) {  
  if (!this.isModified('password')) return next(); // Skip hashing if password is not modified
    this.password = await bcrypt.hash(this.password, 10);
  next();
});

const User = mongoose.model('User', userSchema);
export default User;
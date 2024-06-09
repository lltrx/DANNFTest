const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

mongoose
  .connect(
    `mongodb+srv://turkif182:68wrJX9T8pVSnl81@cluster0.zdb2niu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("MongoDB Connection Succeeded.");
  })
  .catch((err) => {
    console.log("Error in DB connection: " + err);
  });

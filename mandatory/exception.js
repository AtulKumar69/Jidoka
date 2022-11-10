function arab() {
  try {
    throw "bogus";
  }
  catch (e)
  {
    console.log("bogus");
    throw e; 
  }
  finally
  {
    return false; 
  }
 
}

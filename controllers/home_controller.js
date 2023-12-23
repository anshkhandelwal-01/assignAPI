
// Render Home Page
module.exports.home = async function(req, res){
    try {
        return res.render('sign_in',{
            title: "Home",
        });
    } catch (error) {
       console.log('Error', error); 
       return;
    }
}
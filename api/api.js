const { async } = require("@firebase/util");
const {DB} = require("../firebase/admin");

exports.service = async(req , res) =>{
    const postref = DB.collection("posts");
        try {
            postref.get().then(snapshot => {
                const data= snapshot.docs.map(doc => ({
                    id : doc.id,
                    ...doc.data()

                }))
                return res.json(data);
            })
        } catch (error) {
            return res.json({
                error:error
            })
        }

}
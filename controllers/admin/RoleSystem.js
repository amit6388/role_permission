const PermissionSchema=require('../../models/admin/Permission');
const RoleSchema=require('../../models/admin/role');
const UserSchema=require('../../models/admin/user');


const getUserControler = async (req, res) => {
    try {
        const { id } = req.params;
        let data = await UserSchema.findById(id)
                                    .populate('roleId') // Populate roleId with only the name field
                                    .populate('permissionId'); // Populate permissionId with only the name field
                                
                                    res.send({
                                      _id: data._id,
                                      name: data.name,
                                      role: data.roleId.name,
                                      permission: data.permissionId.name
                                  });//rest ull api is going here ..........
    } catch (err) {
        console.log(err);
        res.status(500).json({ // Handle error with appropriate status code
            code: 500,
            message: "Internal Server Error",
            error: true,
            status: false,
        });
    }
}

const getcreateRole=async(req,res)=>{
    try { 
        let data = await RoleSchema.find( );

        res.send(data);
       
     } catch (err) {
       console.log(err);
     }
  }
  const getPermissionController=async(req,res)=>{
    try { PermissionSchema
        let data = await PermissionSchema.find(  ); 
        res.send(data);
     } catch (err) {
       console.log(err);
     }
  }

const UserControler=async(req,resp)=>{
    try { 
       const {name,  roleId,permissionId}=req.body;
         let data = new UserSchema({ name, roleId,permissionId}); 
         await data.save(); 
         resp.status(200).json({
           code: 200,
           message: "Role Register successfully",
           data:data,
           error: false,
           status: true,
         });
       
     } catch (err) {
       console.log(err);
     }
  }
const createRole=async(req,resp)=>{
    try { 
       const {name}=req.body;
         let data = new RoleSchema({ name}); 
         await data.save(); 
         resp.status(200).json({
           code: 200,
           message: "Role Register successfully",
   
           error: false,
           status: true,
         });
       
     } catch (err) {
       console.log(err);
     }
  }
  const PermissionController=async(req,resp)=>{
    try { 
       const {name}=req.body;
         let data = new PermissionSchema({ name}); 
         await data.save(); 
         resp.status(200).json({
           code: 200,
           message: "Role Register successfully",
   
           error: false,
           status: true,
         });
       
     } catch (err) {
       console.log(err);
     }
  }

  module.exports={
    getUserControler,
    getcreateRole,
    getPermissionController,
    UserControler,
    createRole,
    PermissionController
  }



//   const getUserController = async (req, res) => {
//     try {
//         const { id } = req.params;
//         let data = await UserSchema.findById(id)
//             .populate({
//                 path: 'roleId',
//                 select: 'name',
//                 match: { name: { $regex: 'admin', $options: 'i' } } // Filter roleId with name containing 'admin'
//             })
//             .populate({
//                 path: 'permissionId',
//                 select: 'name',
//                 match: { name: { $regex: 'few', $options: 'i' } } // Filter permissionId with name containing 'few'
//             });

//         // Filter out null values from roleId and permissionId
//         data.roleId = data.roleId.filter(role => role !== null);
//         data.permissionId = data.permissionId.filter(permission => permission !== null);

//         res.send(data);
       
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ // Handle error with appropriate status code
//             code: 500,
//             message: "Internal Server Error",
//             error: true,
//             status: false,
//         });
//     }
// }



 